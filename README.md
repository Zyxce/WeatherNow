# 🌤 WeatherNow — SPA Weather App

WeatherNow — это современное одностраничное приложение (SPA) для просмотра прогноза погоды с использованием React, TypeScript, SASS, Redux Toolkit и мультиязычности.

## 🔧 Стек технологий

- ⚛️ React
- 📘 TypeScript
- 🎨 SASS (SCSS)
- 🌐 i18next (мультиязычность)
- 📦 Redux Toolkit (глобальное состояние)
- 📡 OpenWeatherMap API (данные о погоде)
- 📱 Адаптивный дизайн (mobile-first)
- React-icons и AdobeIllustrator для иконок

## 📁 Структура проекта

src/
├── assets/ # Изображения, иконки, графика
├── components/
│ ├── Header/
│ │ ├── Header.tsx
│ │ ├── Logo.tsx
│ │ ├── CitySearch.tsx
│ │ └── LanguageSwitcher.tsx
│ │
│ ├── TodayWeather/
│ │ ├── TodayWeather.tsx
│ │ ├── LocationInfo.tsx
│ │ ├── WeatherIcon.tsx
│ │ ├── FeelsLike.tsx
│ │ └── WindInfo.tsx
│ │
│ ├── AdditionalParams/
│ │ ├── AdditionalParams.tsx
│ │ ├── Sunrise.tsx
│ │ ├── Pressure.tsx
│ │ └── UVIndex.tsx
│ │
│ ├── DailyForecast/
│ │ ├── DailyForecast.tsx
│ │ └── ForecastCard.tsx
│ │
│ ├── WeatherChart/
│ │ └── WeatherChart.tsx
│ │
│ ├── MoonPhases/
│ │ ├── MoonPhases.tsx
│ │ └── MoonPhaseCard.tsx
│ │
│ └── Footer/
│ └── Footer.tsx
│
├── i18n/ # Конфигурация мультиязычности
│ └── index.ts
│
├── pages/
│ └── Home.tsx
│
├── services/ # Запросы к API
│ └── weatherApi.ts
│
├── store/ # Zustand или Redux (глобальное состояние)
│ └── useWeatherStore.ts
│
├── styles/
│ ├── base/ # reset, mixins, variables
│ ├── components/ # стили по компонентам
│ └── index.scss
│
├── types/ # Общие типы TypeScript
│ └── weather.ts
│
├── App.tsx
├── main.tsx
└── index.scss
