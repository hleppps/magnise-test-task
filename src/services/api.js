import { COIN_API_HOSTNAME, COIN_API_KEY } from "../constants";

export const sendRequest = (requestPath) => {
  const headers = { "X-CoinAPI-Key": COIN_API_KEY };
  return fetch(`${COIN_API_HOSTNAME}${requestPath}`, { headers })
    .then((response) => response.json())
    .then((data) => data);
};
