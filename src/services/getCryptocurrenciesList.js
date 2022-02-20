import { BANNED_CURRENCIES, COIN_API_PATH_ASSETS } from "../constants";
import { sendRequest } from "./api";

export const getCryptocurrenciesList = async () => {
  try {
    const cryptocurrenciesList = await sendRequest(COIN_API_PATH_ASSETS);
    const filteredList = cryptocurrenciesList.reduce((filtered, item) => {
      if (!BANNED_CURRENCIES.includes(item.asset_id)) {
        const newItem = item.asset_id;
        filtered.push(newItem);
      }
      return filtered;
    }, []);
    return filteredList;
  } catch {
    alert("API Error!");
    return [];
  }
};
