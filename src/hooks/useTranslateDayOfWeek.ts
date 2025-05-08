import { useTranslation } from 'react-i18next'

const useTranslateDayOfWeek = (dayOfWeek: string, language: string) => {
  const { t } = useTranslation()
  if (language === 'en') {
    return dayOfWeek
  } else if (language === 'ru') {
    switch (dayOfWeek) {
      case 'Monday':
        return t('dayOfWeek.monday')
      case 'Tuesday':
        return t('dayOfWeek.tuesday')
      case 'Wednesday':
        return t('dayOfWeek.wednesday')
      case 'Thursday':
        return t('dayOfWeek.thursday')
      case 'Friday':
        return t('dayOfWeek.friday')
      case 'Saturday':
        return t('dayOfWeek.saturday')
      case 'Sunday':
        return t('dayOfWeek.sunday')
      default:
        return null
    }
  }
}

export default useTranslateDayOfWeek
