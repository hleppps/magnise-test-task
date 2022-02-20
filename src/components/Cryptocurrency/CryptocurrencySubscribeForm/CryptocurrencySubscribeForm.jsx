import Autocomplete from "@mui/material/Autocomplete";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import { useState } from "react";
import styles from "./CryptocurrencySubscribeForm.module.css";

const CryptocurrencySubscribeForm = ({
  cryptocurrenciesList,
  setSelectedCryptocurrency,
}) => {
  return (
    <div className={styles.form}>
      <Autocomplete
        className={styles.input}
        onChange={(event, value) => setSelectedCryptocurrency(value)}
        disablePortal
        id="combo-box-demo"
        options={cryptocurrenciesList}
        renderInput={(params) => <TextField {...params} label="Currency" />}
      />
      <Button  variant="contained" disabled={true} onClick={() => {}}>
        Subscribe
        <div className={styles.button_span}>  (redundant)  </div>
      </Button>
    </div>
  );
};

export default CryptocurrencySubscribeForm;
