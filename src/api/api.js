// import axios from 'axios';

import { isDev } from "./api.config";

// const api = axios.create({
//   baseURL: 'http://192.168.1.105:3001',
//   headers: {
//     'Content-Type': 'application/json',
//   },
// });

// export default api;

// const BASE_URL = isDev
// ?
const BASE_URL = "http://192.168.1.101:3001";

async function request(url, options = {}) {
  const response = await fetch(`${BASE_URL}${url}`, {
    headers: {
      "Content-Type": "application/json",
    },
    ...options,
  });

  if (!response.ok) {
    const text = await response.text();
    throw new Error(text || response.statusText);
  }

  const data = await response.json();

  // mimic axios response shape
  return { data };
}

export default {
  get: (url) => request(url),
  post: (url, body) =>
    request(url, {
      method: "POST",
      body: JSON.stringify(body),
    }),
  put: (url, body) =>
    request(url, {
      method: "PUT",
      body: JSON.stringify(body),
    }),
  delete: (url) =>
    request(url, {
      method: "DELETE",
    }),
};
