import api from "./api";

export async function getCurrentWeather(q: string) {
  const response = await api.get("current.json", { params: { q } });
  return response.data;
}

export async function getForecast(q: string, days: number = 5) {
  const response = await api.get("forecast.json", {
    params: { q, days },
  });
  return response.data;
}

export async function searchCities(q: string) {
  const response = await api.get("search.json", { params: { q } });
  return response.data;
}