const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

// Today's buy-ins Route
app.get('/buy-ins', cors(), (req, res, next) => {
	const path = '../../../../../Desktop/johann/todays-buyins.txt';

	fs.readFile(path, 'utf8', (error, data) => {
		if (error) {
			res.status(500, 'Could not read buy-ins file');
		}

		return res.json(data);
	});
});

// Today's cashes Route
app.get('/cashes', cors(), (req, res, next) => {
	const path = '../../../../../Desktop/johann/todays-cashes.txt';

	fs.readFile(path, 'utf8', (error, data) => {
		if (error) {
			res.status(500, 'Could not read cashes file');
		}

		return res.json(data);
	});
});

// Bankroll Route
app.get('/bankroll', cors(), (req, res, next) => {
	const path = '../../../../../Desktop/johann/bankroll.txt';

	fs.readFile(path, 'utf8', (error, data) => {
		if (error) {
			res.status(500, 'Could not read bankroll file');
		}

		return res.json(data);
	});
});

// Latest Donation Route
app.get('/latest-donation', cors(), (req, res, next) => {
    const path = '../../../../../Desktop/johann/latest-donation.txt';

fs.readFile(path, 'utf8', (error, data) => {
    if (error) {
        res.status(500, 'Could not read latest donation file');
    }

    return res.json(data);
	});
});

// Top Donation This Month Route
app.get('/top-donation', cors(), (req, res, next) => {
    const path = '../../../../../Desktop/johann/top-donation.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read top donation file');
        }

        return res.json(data);
    });
});

// Latest Subscriber This Month Route
app.get('/latest-subscriber', cors(), (req, res, next) => {
    const path = '../../../../../Desktop/johann/latest-subscriber.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read latest subscriber file');
        }

        return res.json(data);
    });
});

// Artist Route
app.get('/artist', cors(), (req, res, next) => {
    const path = '../../../../../Desktop/johann/artist.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read artist file');
        }

        return res.json(data);
    });
});

// Songname Route
app.get('/songname', cors(), (req, res, next) => {
    const path = '../../../../../Desktop/johann/songname.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read songname file');
        }

        return res.json(data);
    });
});

// ChronoUP Route
app.get('/chrono-up', cors(), (req, res, next) => {
    const path = '../../../../../Desktop/johann/chronoup.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read songname file');
        }

        return res.json(data);
    });
});

app.listen(port, () => {
	console.log(`Server is running on port ${port}`);
});
