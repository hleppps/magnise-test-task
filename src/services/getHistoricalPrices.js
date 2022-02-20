import { COIN_API_PATH_EXCHANGERATE, MAX_LENGTH } from "../constants";
import { sendRequest } from "./api";
import { parseDate } from "./parseDate";

export const getHistoricalPrices = async (cryptocurrency) => {
  try {
    const date = new Date();
    const dateString = `${date.getUTCFullYear()}-${(
      "0" +
      (date.getUTCMonth() + 1)
    ).slice(-2)}-${("0" + date.getUTCDate()).slice(-2)}`;
    const timeString = `${("0" + date.getUTCHours()).slice(-2)}:${(
      "0" + date.getUTCMinutes()
    ).slice(-2)}:${("0" + date.getUTCSeconds()).slice(-2)}`;

    const time_end = `${dateString}T${timeString}`;

    const data_reversed = await sendRequest(
      `${COIN_API_PATH_EXCHANGERATE}/${cryptocurrency}/USD/history?period_id=20SEC&limit=${MAX_LENGTH}&time_end=${time_end}`
    );

    const data = data_reversed.reverse();

    const values = data.map((item) => item.rate_open);
    const labels = data.map((item) => parseDate(item.time_open));

    return { values, labels };
  } catch {
    alert("API Error!");
    return [];
  }
};
