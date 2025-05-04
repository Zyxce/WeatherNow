const useFormattedTime = (
  timestamp: number | null,
  timeZoneOffset: number | null
): string => {
  if (timestamp === null || timeZoneOffset === null) return ''

  const localDate = new Date((timestamp + timeZoneOffset) * 1000)

  const hours = localDate.getUTCHours().toString().padStart(2, '0')
  const minutes = localDate.getUTCMinutes().toString().padStart(2, '0')

  return `${hours}:${minutes}`
}

export default useFormattedTime
