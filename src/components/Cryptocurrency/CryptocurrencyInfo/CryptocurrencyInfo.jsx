import Grid from "@mui/material/Grid";
import Clock from "../../Clock";
import styles from "./CryptocurrencyInfo.module.css";

const CryptocurrencyInfo = ({ selectedCryptocurrency, activePrice }) => {
  return (
    <Grid className={styles.info} container columns={3}>
      <Grid item xs={1}>
        <p>Symbol:</p>
        <p>{selectedCryptocurrency || "*not selected*"}</p>
      </Grid>
      <Grid item xs={1}>
        <p>Price:</p>
        {selectedCryptocurrency ? <p>${activePrice || " *loading..*"}</p> : <p>*not selected*</p>}
        
      </Grid>
      <Grid item xs={1}>
        <p>Time:</p>
        <p>
          <Clock />
        </p>
      </Grid>
    </Grid>
  );
};



export default CryptocurrencyInfo;
