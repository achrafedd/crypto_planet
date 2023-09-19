import express from 'express';
import axios from 'axios';
import bodyParser from 'body-parser';
import dotenv from 'dotenv/config';


const app = express();
const PORT = 3000;
const API_KEY = process.env.API_KEY;
const URL = "https://api.blockchain.com/v3/exchange";

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const fetchData = async () => {
    const response = await axios.get(URL + "/tickers",
        { headers : { 'X-API-Token': API_KEY }}
    );
    const data = response.data;
    return data;
}

const fetchSymbols = async () => {
    const response = await axios.get(URL + "/symbols", {
		headers: { "X-API-Token": API_KEY },
	});
    const data = response.data;
    return data;
}

const symbols = await fetchSymbols()
const tickers = await fetchData();

app.get('/', (req, res) => {
    res.render("index.ejs", {
		symbols,
		tickers,
	});
})

app.listen(PORT, () => {
    console.log(`Running on port ${PORT}`);
    console.log(`http://localhost:${PORT}`);
})