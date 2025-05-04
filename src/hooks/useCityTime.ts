import { useMemo } from 'react'

const useCityTime = (timezoneOffsetSeconds: number | null): string => {
  return useMemo(() => {
    if (timezoneOffsetSeconds === null) return ''
    const currentUtcDate = new Date()
    const cityTimeInMs = currentUtcDate.getTime() + timezoneOffsetSeconds * 1000
    const cityDate = new Date(cityTimeInMs)
    const hours = cityDate.getUTCHours().toString().padStart(2, '0')
    const minutes = cityDate.getUTCMinutes().toString().padStart(2, '0')

    return `${hours}:${minutes}`
  }, [timezoneOffsetSeconds])
}

export default useCityTime
