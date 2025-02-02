export function apiCall(path: string, queryParams?: Record<string, string>) {
  const query = new URLSearchParams(queryParams).toString();
  return fetch(`http://api.openweathermap.org/${path}?${query}&appid=${process.env.REACT_APP_OPENWEATHERMAP_API_KEY}`);
}
