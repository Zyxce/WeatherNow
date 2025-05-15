import lowNight from '../assets/icons/1hn.svg'
import middleNight from '../assets/icons/2hn.svg'
import highNight from '../assets/icons/3hn.svg'
import lowDay from '../assets/icons/1hd.svg'
import middleDay from '../assets/icons/2hd.svg'
import highDay from '../assets/icons/3hd.svg'

const useHumidityIcon = (humidity: number, theme: string) => {
  if (humidity <= 25 && theme === 'n') return lowNight
  if (humidity >= 26 && humidity <= 65 && theme === 'n') return middleNight
  if (humidity >= 66 && theme === 'n') return highNight
  if (humidity <= 25 && theme === 'd') return lowDay
  if (humidity >= 26 && humidity <= 65 && theme === 'd') return middleDay
  if (humidity >= 66 && theme === 'd') return highDay
}

export default useHumidityIcon
