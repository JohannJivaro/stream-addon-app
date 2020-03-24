const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

// Today's buy-ins Route
app.get('/buy-ins', cors(), (req, res, next) => {
	const path = '../../../../Desktop/johann/profit.txt';

	fs.readFile(path, 'utf8', (error, data) => {
		if (error) {
			res.status(500, 'Could not read profit file');
		}

		return res.json(data);
	});
});

// Today's cashes Route
app.get('/cashes', cors(), (req, res, next) => {
	const path = '../../../../Desktop/johann/profit.txt';

	fs.readFile(path, 'utf8', (error, data) => {
		if (error) {
			res.status(500, 'Could not read profit file');
		}

		return res.json(data);
	});
});

// Bankroll Route
app.get('/bankroll', cors(), (req, res, next) => {
	const path = '../../../../Desktop/johann/profit.txt';

	fs.readFile(path, 'utf8', (error, data) => {
		if (error) {
			res.status(500, 'Could not read profit file');
		}

		return res.json(data);
	});
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
