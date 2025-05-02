import React from 'react'
import style from '../../styles/components/Footer/Footer.module.css'
import { useTranslation } from 'react-i18next'

const Footer: React.FC = () => {
  const { t } = useTranslation()
  return (
    <div className={style.footer}>
      <p className={style.copyright}>© 2025 WeatherNow</p>
      <p className={style.developed}>{t('footer.developedBy')} Zyxce</p>
    </div>
  )
}

export default Footer
