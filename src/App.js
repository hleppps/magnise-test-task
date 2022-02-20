import { useEffect, useState } from "react";
import CryptocurrencyChart from "./components/Cryptocurrency/CryptocurrencyChart";
import CryptocurrencyInfo from "./components/Cryptocurrency/CryptocurrencyInfo";
import CryptocurrencySubscribeForm from "./components/Cryptocurrency/CryptocurrencySubscribeForm";
import { getCryptocurrenciesList } from "./services/getCryptocurrenciesList";
import { getHistoricalPrices } from "./services/getHistoricalPrices";
import { parseDate } from "./services/parseDate";
import { queue } from "./services/queue";

function App() {
  const [cryptocurrenciesList, setCryptocurrenciesList] = useState([]);
  const [selectedCryptocurrency, setSelectedCryptocurrency] = useState();
  const [activePrice, setActivePrice] = useState();
  const [chartData, setChartData] = useState({ labels: [], values: [] });

  useEffect(() => {
    getCryptocurrenciesList().then((res) => setCryptocurrenciesList(res));
  }, []);

  const onWebSocketMessageHandler = (price) => {
    setActivePrice(price);
    setChartData((prevData) => {
      const date = parseDate();
      const newLabels = queue([...prevData.labels], date);
      const newValues = queue([...prevData.values], price);
      return { labels: newLabels, values: newValues };
    });
  };

  useEffect(() => {
    getHistoricalPrices(selectedCryptocurrency).then((res) =>
      setChartData(res)
    );

    const client = new WebSocket("wss://ws-sandbox.coinapi.io/v1/");

    client.onopen = () => {
      client.send(
        `{"type": "hello",
        "apikey": "01615595-8709-4139-9ED4-59A20A10F2CC",
        "heartbeat": ${false},
        "subscribe_data_type": ["exrate"],
        "subscribe_filter_asset_id": ["${selectedCryptocurrency}/USD"],
        "subscribe_update_limit_ms_exrate": ${10000}
          }`
      );
    };
    client.onmessage = (message) => {
      if (message.data) {
        const parsedData = JSON.parse(message.data);

        onWebSocketMessageHandler(parsedData.rate);
      }
    };

    return () => {
      client.close();
    };
  }, [selectedCryptocurrency]);

  return (
    <>
      <CryptocurrencySubscribeForm
        cryptocurrenciesList={cryptocurrenciesList}
        setSelectedCryptocurrency={setSelectedCryptocurrency}
      />
      <CryptocurrencyInfo
        selectedCryptocurrency={selectedCryptocurrency}
        activePrice={activePrice}
      />
      <CryptocurrencyChart chartData={chartData} />
    </>
  );
}

export default App;
