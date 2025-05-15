import { IForecastDay, IMoonPhaseData, IForecast24h } from '../types'
import { getMoonIllumination, getMoonTimes } from 'suncalc'
//обработка данных на 5 дней
export const processForecastData = (
  list: any[],
  timezoneOffset: number
): IForecastDay[] => {
  const groupedByDate: { [key: string]: any[] } = {}

  list.forEach((entry) => {
    const utcTimestamp = entry.dt * 1000
    const localTimestamp = utcTimestamp + timezoneOffset * 1000
    const date = new Date(localTimestamp)
    const dateKey = date.toISOString().split('T')[0]

    if (!groupedByDate[dateKey]) {
      groupedByDate[dateKey] = []
    }
    groupedByDate[dateKey].push(entry)
  })

  const sortedDates = Object.keys(groupedByDate).sort()
  const nextFourDays = sortedDates.slice(1, 5)

  return nextFourDays.map((dateKey) => {
    const entries = groupedByDate[dateKey]
    const dayEntries = entries.filter((e) => e.sys.pod === 'd')
    const nightEntries = entries.filter((e) => e.sys.pod === 'n')

    //день
    const dayMaxTemp = Math.max(...dayEntries.map((e) => e.main.temp))
    const dayEntry = dayEntries.find((e) => e.main.temp === dayMaxTemp)

    //ночь
    const nightMinTemp = Math.min(...nightEntries.map((e) => e.main.temp))
    const nightEntry = nightEntries.find((e) => e.main.temp === nightMinTemp)

    //день недели
    const date = new Date(`${dateKey}T00:00:00`)
    const dayOfWeek = date.toLocaleDateString('en-US', { weekday: 'long' })

    return {
      dayOfWeek,
      dayTemp: dayMaxTemp,
      nightTemp: nightMinTemp,
      dayIcon: dayEntry?.weather[0]?.icon || '',
      nightIcon: nightEntry?.weather[0]?.icon || '',
      dayDescription: dayEntry?.weather[0]?.description || '',
      nightDescription: nightEntry?.weather[0]?.description || '',
    }
  })
}

export const getHourlyForecast = (
  hourly: {
    time: string[]
    temperature_2m: number[]
    relativehumidity_2m: number[]
    weathercode: number[]
  },
  utcOffsetSeconds: number
): IForecast24h[] => {
  if (!hourly?.time?.length) return [] // Проверка наличия данных

  const nowUTC = new Date()
  const localTime = new Date(nowUTC.getTime() + utcOffsetSeconds * 1000)

  // Следующий полный час в ЛОКАЛЬНОМ времени города
  const nextHour = new Date(localTime)
  nextHour.setHours(nextHour.getHours() + 1, 0, 0, 0)

  // Конвертируем в UTC для поиска
  const searchUTCTime = new Date(nextHour.getTime() - utcOffsetSeconds * 1000)
  const searchTime = searchUTCTime.toISOString().slice(0, 13) + ':00'

  const startIndex = hourly.time.findIndex((t) => t === searchTime)
  if (startIndex === -1) return []

  return hourly.time.slice(startIndex, startIndex + 24).map((time, index) => ({
    time: new Date(time + 'Z')
      .toLocaleTimeString('en-GB', {
        hour: '2-digit',
        minute: '2-digit',
        hour12: false,
        timeZone: `Etc/GMT${utcOffsetSeconds >= 0 ? '-' : '+'}${Math.abs(
          utcOffsetSeconds / 3600
        )}`,
      })
      .replace(':', ''),
    temperature: hourly.temperature_2m[startIndex + index],
    humidity: hourly.relativehumidity_2m[startIndex + index],
    weathercode: hourly.weathercode[startIndex + index],
  }))
}

/// получение фаз лун на 5 дня
export const getMoonData = (
  lat: number,
  lon: number,
  timezoneOffset: number
): IMoonPhaseData[] => {
  const moonPhases: IMoonPhaseData[] = []

  for (let i = 0; i < 5; i++) {
    const date = new Date(Date.now() + i * 86400000 + timezoneOffset * 1000)
    const moon = getMoonIllumination(date)
    const moonTimes = getMoonTimes(date, lat, lon)

    //возраст луны от 0 до 1
    const moonAge = Math.floor(moon.phase * 29.53) //29.53 дня в лунном цикле
    console.log(moon.phase)
    moonPhases.push({
      date: date.toLocaleDateString('en', { weekday: 'long' }),
      phaseName: getPhaseName(moon.phase),
      phaseIcon: getPhaseIcon(moon.phase),
      age: moonAge,
      sunrise:
        moonTimes.rise?.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }) || 'No rise',
      sunset:
        moonTimes.set?.toLocaleTimeString([], {
          hour: '2-digit',
          minute: '2-digit',
        }) || 'No set',
    })
  }

  return moonPhases
}

const getPhaseName = (phase: number): string => {
  if (phase <= 0.111 && phase >= 0) return 'New Moon'
  if (phase <= 0.222 && phase >= 0.112) return 'Waxing Crescent'
  if (phase <= 0.333 && phase >= 0.223) return 'First Quarter'
  if (phase <= 0.444 && phase >= 0.334) return 'Waxing Gibbous'
  if (phase <= 0.555 && phase >= 0.445) return 'Full Moon'
  if (phase <= 0.666 && phase >= 0.556) return 'Waning Gibbous'
  if (phase <= 0.777 && phase >= 0.667) return 'Last Quarter'
  if (phase <= 0.888 && phase >= 0.778) return 'Waning Crescent'
  if (phase <= 1 && phase >= 0.889) return 'New Moon'
  return 'N/A'
}

const getPhaseIcon = (phase: number): string => {
  if (phase <= 0.111 && phase >= 0) return '1m'
  if (phase <= 0.222 && phase >= 0.112) return '2m'
  if (phase <= 0.333 && phase >= 0.223) return '3m'
  if (phase <= 0.444 && phase >= 0.334) return '4m'
  if (phase <= 0.555 && phase >= 0.445) return '5m'
  if (phase <= 0.666 && phase >= 0.556) return '8m'
  if (phase <= 0.777 && phase >= 0.667) return '7m'
  if (phase <= 0.888 && phase >= 0.778) return '6m'
  if (phase <= 1 && phase >= 0.889) return '1m'
  return 'N/A'
}
