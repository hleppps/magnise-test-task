import Chart from "../../Chart";

const CryptocurrencyChart = ({chartData}) => {
  return (
    <div>
      <Chart values={chartData.values} labels={chartData.labels} />
    </div>
  );
};

export default CryptocurrencyChart;
