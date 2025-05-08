import { useTranslation } from 'react-i18next'

const useTranslateMoonPhase = (dayOfWeek: string, language: string) => {
  const { t } = useTranslation()
  if (language === 'en') {
    return dayOfWeek
  } else if (language === 'ru') {
    switch (dayOfWeek) {
      case 'New Moon':
        return t('moonPhase.newMoon')
      case 'Waxing Crescent':
        return t('moonPhase.waxingCrescent')
      case 'First Quarter':
        return t('moonPhase.firstQuater')
      case 'Waxing Gibbous':
        return t('moonPhase.waxingGibbous')
      case 'Full Moon':
        return t('moonPhase.fullMoon')
      case 'Waning Gibbous':
        return t('moonPhase.waningGibbous')
      case 'Last Quarter':
        return t('moonPhase.lastQuarter')
      case 'Waning Crescent':
        return t('moonPhase.waningCrescent')
      default:
        return null
    }
  }
}

export default useTranslateMoonPhase
