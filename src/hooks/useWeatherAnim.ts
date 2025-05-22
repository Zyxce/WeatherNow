import ClearDay from '../components/Anims/ClearDay'
import LowDay from '../components/Anims/LowDay'
import ScatteredDay from '../components/Anims/ScatteredDay'
import OvercastDay from '../components/Anims/OvercastDay'
import DownPourDay from '../components/Anims/DownPourDay'
import RainDay from '../components/Anims/RainDay'
import ThunderstormDay from '../components/Anims/ThunderstormDay'
import SnowDay from '../components/Anims/SnowDay'
import FogDay from '../components/Anims/FogDay'
import ClearNight from '../components/Anims/ClearNight'
import LowNight from '../components/Anims/LowNight'
import ScatteredNight from '../components/Anims/ScatteredNight'
import OvercastNight from '../components/Anims/OvercastNight'
import DownPourNight from '../components/Anims/DownPourNight'
import RainNight from '../components/Anims/RainNight'
import ThunderstormNight from '../components/Anims/ThunderstormNight'
import SnowNight from '../components/Anims/SnowNight'
import FogNight from '../components/Anims/FogNight'

const useWeatherAnim = (iconCode: string) => {
  switch (iconCode) {
    case '01d':
    case '0d':
    case '1d':
      return ClearDay
    case '01n':
    case '0n':
    case '1n':
      return ClearNight
    case '02d':
    case '2d':
      return LowDay
    case '02n':
    case '2n':
      return LowNight
    case '03d':
    case '3d':
      return ScatteredDay
    case '03n':
    case '3n':
      return ScatteredNight
    case '04d':
      return OvercastDay
    case '04n':
      return OvercastNight
    case '09d':
    case '51d':
    case '53d':
    case '55d':
    case '56d':
    case '57d':
      return DownPourDay
    case '09n':
    case '51n':
    case '53n':
    case '55n':
    case '56n':
    case '57n':
      return DownPourNight
    case '10d':
    case '61d':
    case '63d':
    case '65d':
    case '66d':
    case '67d':
    case '80d':
    case '81d':
    case '82d':
      return RainDay
    case '10n':
    case '61n':
    case '63n':
    case '65n':
    case '66n':
    case '67n':
    case '80n':
    case '81n':
    case '82n':
      return RainNight
    case '11d':
    case '95d':
    case '96d':
    case '99d':
      return ThunderstormDay
    case '11n':
    case '95n':
    case '96n':
    case '99n':
      return ThunderstormNight
    case '13d':
    case '71d':
    case '73d':
    case '75d':
    case '77d':
    case '85d':
    case '86d':
      return SnowDay
    case '13n':
    case '71n':
    case '73n':
    case '75n':
    case '77n':
    case '85n':
    case '86n':
      return SnowNight
    case '50d':
    case '45d':
    case '48d':
      return FogDay
    case '50n':
    case '45n':
    case '48n':
      return FogNight
    default:
      return ClearDay
  }
}

export default useWeatherAnim
