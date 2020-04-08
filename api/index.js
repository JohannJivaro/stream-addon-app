const express = require('express');
const fs = require('fs');
const cors = require('cors');

const app = express();
const port = 3000;

// Today's buy-ins Route
app.get('/buy-ins', cors(), (req, res, next) => {
    const path = '../../Users/Daníel Már/Desktop/todays-buyins.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read buy-ins file');
        }

        return res.json(data);
    });
});

// Today's cashes Route
app.get('/cashes', cors(), (req, res, next) => {
    const path = '../../Users/Daníel Már/Desktop/todays-cashes.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read cashes file');
        }

        return res.json(data);
    });
});

// Yesterday Route
app.get('/yesterday', cors(), (req, res, next) => {
    const path = '../../Users/Daníel Már/Desktop/yesterday.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read cashes file');
        }

        return res.json(data);
    });
});

// Bankroll Route
app.get('/bankroll', cors(), (req, res, next) => {
    const path = '../../Users/Daníel Már/Desktop/bankroll.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read bankroll file');
        }

        return res.json(data);
    });
});

// Latest Donation Route
app.get('/latest-donation', cors(), (req, res, next) => {
    const path = '../../Users/Daníel Már/Documents/Twitch/Muxy/most_recent_donator.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read latest donation file');
        }

        return res.json(data);
    });
});

// Top Donation This Month Route
app.get('/top-donation', cors(), (req, res, next) => {
    const path = '../../Users/Daníel Már/Documents/Twitch/Muxy/30day_top_donator.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read top donation file');
        }

        return res.json(data);
    });
});

// Latest Subscriber This Month Route
app.get('/latest-subscriber', cors(), (req, res, next) => {
    const path = '../../Users/Daníel Már/Documents/Twitch/Muxy/most_recent_subscriber.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read latest subscriber file');
        }

        return res.json(data);
    });
});

// Artist Route
app.get('/artist', cors(), (req, res, next) => {
    const path = '../../Program Files (x86)/OBSCurrentSongV1.28/artist.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read artist file');
        }

        return res.json(data);
    });
});

// Songname Route
app.get('/songname', cors(), (req, res, next) => {
    const path = '../../Program Files (x86)/OBSCurrentSongV1.28/song.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read songname file');
        }

        return res.json(data);
    });
});

// ChronoUp Route
app.get('/chrono-up', cors(), (req, res, next) => {
    const path = '../../Program Files (x86)/Snaz/TextFiles/ChronoUp.txt';

    fs.readFile(path, 'utf8', (error, data) => {
        if (error) {
            res.status(500, 'Could not read songname file');
        }

        return res.json(data);
    });
});

// ChronoDown Route
app.get('/chrono-down', cors(), (req, res, next) => {
    const path = '../../Program Files (x86)/Snaz/TextFiles/ChronoDown.txt';

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
