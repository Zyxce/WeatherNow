import newMoon from '../assets/icons/1m.svg'
import waxingCrescent from '../assets/icons/2m.svg'
import firstQuarter from '../assets/icons/3m.svg'
import waxingGibbous from '../assets/icons/4m.svg'
import fullMoon from '../assets/icons/5m.svg'
import waningGibbous from '../assets/icons/6m.svg'
import lastQuarter from '../assets/icons/7m.svg'
import waningCrescent from '../assets/icons/8m.svg'

const useMoonIcon = (iconCode: string) => {
  switch (iconCode) {
    case '1m':
      return newMoon
    case '2m':
      return waxingCrescent
    case '3m':
      return firstQuarter
    case '4m':
      return waxingGibbous
    case '5m':
      return fullMoon
    case '6m':
      return waningGibbous
    case '7m':
      return lastQuarter
    case '8m':
      return waningCrescent
    default:
      return firstQuarter
  }
}

export default useMoonIcon
