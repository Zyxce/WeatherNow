import { IForecastDay, IMoonPhaseData } from '../types'
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

/// получение фаз лун на 4 дня
export const getMoonData = (
  lat: number,
  lon: number,
  timezoneOffset: number
): IMoonPhaseData[] => {
  const moonPhases: IMoonPhaseData[] = []

  for (let i = 1; i < 5; i++) {
    const date = new Date(Date.now() + i * 86400000 + timezoneOffset * 1000)
    const moon = getMoonIllumination(date)
    const moonTimes = getMoonTimes(date, lat, lon)

    //возраст луны от 0 до 1
    const moonAge = Math.floor(moon.phase * 29.53) //29.53 дня в лунном цикле

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

// меняет фазу в название фазы
const getPhaseName = (phase: number): string => {
  if (phase < 0.125) return 'New Moon'
  if (phase < 0.25) return 'Waxing Crescent'
  if (phase < 0.375) return 'First Quarter'
  if (phase < 0.625) return 'Waxing Gibbous'
  if (phase < 0.75) return 'Full Moon'
  if (phase < 0.875) return 'Waning Gibbous'
  if (phase < 0.9375) return 'Last Quarter'
  return 'Waning Crescent'
}
// меняет фазу в код картинки для фазы
const getPhaseIcon = (phase: number): string => {
  if (phase < 0.125) return '1m'
  if (phase < 0.25) return '2m'
  if (phase < 0.375) return '3m'
  if (phase < 0.625) return '4m'
  if (phase < 0.75) return '5m'
  if (phase < 0.875) return '6m'
  if (phase < 0.9375) return '7m'
  return '8m'
}
