const express = require('express');
const dotenv = require('dotenv');
const path = require('path');

const app = express();

// Setup body parser
app.use(express.json());

// Setup static directory
app.use('/public', express.static(path.join(__dirname, 'public')));

// Setting up config.env file variables
dotenv.config({ path: './config/config.env' });

const PORT = process.env.PORT;

app.get('/', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/index.html'));
});

app.get('/connectFour', (req, res) => {
	res.sendFile(path.join(__dirname + '/views/connectFour.html'));
});

app.listen(PORT, () => {
	console.log(
		`Server started at port ${PORT} and in ${process.env.NODE_ENV} mode.`
	);
});
