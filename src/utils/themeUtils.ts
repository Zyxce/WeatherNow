export const getThemeByTime = (
  sunrise: number | null,
  sunset: number | null,
  timeZone: number | null
): 'dark' | 'light' => {
  if (!sunrise || !sunset || !timeZone) {
    const hours = new Date().getHours()
    return hours >= 20 || hours < 6 ? 'dark' : 'light'
  }
  const now = Math.floor(Date.now() / 1000)
  const cityNow = now + timeZone
  const citySunrise = sunrise + timeZone
  const citySunset = sunset + timeZone
  return cityNow > citySunrise && cityNow < citySunset ? 'light' : 'dark'
}

export const shouldUpdateTheme = (
  currentTheme: 'dark' | 'light',
  sunrise: number | null,
  sunset: number | null,
  timeZone: number | null
): boolean => {
  return currentTheme !== getThemeByTime(sunrise, sunset, timeZone)
}
