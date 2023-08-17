

const apId="59723b52ef2cdacce790353a5680ef86";

export const getWeatherUrl=(city,countryCode)=>`https://api.openweathermap.org/data/2.5/weather?q=${city},${countryCode}&appid=${apId}`
export const getForecastUrl=(city,countryCode)=>`https://api.openweathermap.org/data/2.5/forecast?q=${city},${countryCode}&appid=${apId}`

