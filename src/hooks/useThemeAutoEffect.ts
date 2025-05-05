import { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { AppDispatch, RootState } from '../store/store'
import { getThemeByTime, shouldUpdateTheme } from '../utils/themeUtils'
import { setTheme } from '../store/themeSlice'

export const useThemeAutoEffect = (
  sunrise: number | null,
  sunset: number | null,
  timeZone: number | null
) => {
  const dispatch = useDispatch<AppDispatch>()
  const { theme, isAutoTheme } = useSelector((state: RootState) => state.theme)

  useEffect(() => {
    if (!isAutoTheme) return

    const currentTheme = getThemeByTime(sunrise, sunset, timeZone)
    if (theme !== currentTheme) {
      dispatch(setTheme(currentTheme))
    }

    const interval = setInterval(() => {
      if (shouldUpdateTheme(theme, sunrise, sunset, timeZone)) {
        dispatch(setTheme(getThemeByTime(sunrise, sunset, timeZone)))
      }
    }, 60 * 1000)

    return () => clearInterval(interval)
  }, [dispatch, theme, isAutoTheme, sunrise, sunset, timeZone])
}
