import React from 'react'
import HourlyForecastCard from './HourlyForecastCard'
import { IForecast24hProps, IForecast24h } from '../../types'
import style from '../../styles/components/HourlyForecast/HourlyForecast.module.css'
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react'
import { FreeMode } from 'swiper/modules'
// Import Swiper styles
import 'swiper/css'
import 'swiper/css/free-mode'
import 'swiper/css/pagination'

const HourlyForecast: React.FC<IForecast24hProps> = ({ arr }) => {
  return (
    <div className={style.container}>
      <Swiper
        slidesPerView={4}
        spaceBetween={5}
        freeMode={true}
        modules={[FreeMode]}
      >
        {arr.map((item: IForecast24h, index: number) => (
          <SwiperSlide key={index}>
            <HourlyForecastCard
              time={item.time}
              temperature={item.temperature}
              humidity={item.humidity}
              weathercode={item.weathercode}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  )
}

export default HourlyForecast
