export const apiRequest = (endpoint, params) => {
  const url = new URL(endpoint, process.env.EXPO_PUBLIC_BACKEND_URL);
  return fetch(url, params);
};
