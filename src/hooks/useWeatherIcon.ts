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
    case '0d':
    case '1d':
      return clearDay
    case '01n':
    case '0n':
    case '1n':
      return clearNight
    case '02d':
    case '2d':
      return lowDay
    case '02n':
    case '2n':
      return lowNight
    case '03d':
    case '3d':
      return scatteredDay
    case '03n':
    case '3n':
      return scatteredNight
    case '04d':
      return overcastDay
    case '04n':
      return overcastNight
    case '09d':
    case '51d':
    case '53d':
    case '55d':
    case '56d':
    case '57d':
      return downpourDay
    case '09n':
    case '51n':
    case '53n':
    case '55n':
    case '56n':
    case '57n':
      return downpourNight
    case '10d':
    case '61d':
    case '63d':
    case '65d':
    case '66d':
    case '67d':
    case '80d':
    case '81d':
    case '82d':
      return rainDay
    case '10n':
    case '61n':
    case '63n':
    case '65n':
    case '66n':
    case '67n':
    case '80n':
    case '81n':
    case '82n':
      return rainNight
    case '11d':
    case '95d':
    case '96d':
    case '99d':
      return thunderstormDay
    case '11n':
    case '95n':
    case '96n':
    case '99n':
      return thunderstormNight
    case '13d':
    case '71d':
    case '73d':
    case '75d':
    case '77d':
    case '85d':
    case '86d':
      return snowDay
    case '13n':
    case '71n':
    case '73n':
    case '75n':
    case '77n':
    case '85n':
    case '86n':
      return snowNight
    case '50d':
    case '45d':
    case '48d':
      return fogDay
    case '50n':
    case '45n':
    case '48n':
      return fogNight
    default:
      return 'N/A'
  }
}

export default useWeatherIcon
