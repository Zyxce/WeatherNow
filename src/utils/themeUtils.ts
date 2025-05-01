export const getThemeByTime = (): 'dark' | 'light' => {
  const hours = new Date().getHours()
  return hours >= 20 || hours < 6 ? 'dark' : 'light'
}

export const shouldUpdateTheme = (currentTheme: 'dark' | 'light'): boolean => {
  return currentTheme !== getThemeByTime()
}
