import clearDay from '../assets/icons/1d.svg'
import lowDay from '../assets/icons/2d.svg'
import scatteredDay from '../assets/icons/3d.svg'
import overcastDay from '../assets/icons/4d.svg'
import downpourDay from '../assets/icons/9d.svg'
import rainDay from '../assets/icons/10d.svg'
import thunderstormDay from '../assets/icons/11d.svg'
import snowDay from '../assets/icons/13d.svg'
import fogDay from '../assets/icons/50d.svg'
import clearNight from '../assets/icons/1n.svg'
import lowNight from '../assets/icons/2n.svg'
import scatteredNight from '../assets/icons/3n.svg'
import overcastNight from '../assets/icons/4n.svg'
import downpourNight from '../assets/icons/9n.svg'
import rainNight from '../assets/icons/10n.svg'
import thunderstormNight from '../assets/icons/11n.svg'
import snowNight from '../assets/icons/13n.svg'
import fogNight from '../assets/icons/50n.svg'

const useWeatherIcon = (iconCode: string) => {
  switch (iconCode) {
    case '01d':
      return clearDay
    case '01n':
      return clearNight
    case '02d':
      return lowDay
    case '02n':
      return lowNight
    case '03d':
      return scatteredDay
    case '03n':
      return scatteredNight
    case '04d':
      return overcastDay
    case '04n':
      return overcastNight
    case '09d':
      return downpourDay
    case '09n':
      return downpourNight
    case '10d':
      return rainDay
    case '10n':
      return rainNight
    case '11d':
      return thunderstormDay
    case '11n':
      return thunderstormNight
    case '13d':
      return snowDay
    case '13n':
      return snowNight
    case '50d':
      return fogDay
    case '50n':
      return fogNight
    default:
      return clearDay
  }
}

export default useWeatherIcon
