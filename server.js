/* eslint-disable quotes */
const express = require('express');
const path = require('path');
const compression = require('compression');
const googleTrends = require('google-trends-api');

const app = express();

app.use(compression());

const port = process.env.PORT || 3000;

app.use((req, res, next) => {
  if (process.env.NODE_ENV === 'production') {
    // perform host checking prior to https checking
    if (req.headers['x-forwarded-proto'] !== 'https')
      return res.redirect(`https://${req.headers.host}${req.url}`);
    return next();
  }
  return next();
});

app.use(express.static(path.join(__dirname, 'dist')));

app.get('/app', (req, res) => {
  res.sendFile(path.join(`${__dirname}/dist/index.html`));
});

app.get('/data', (req, res) => {
    
    googleTrends.dailyTrends({ geo: 'US' }, (err, results) => {
        if(err) {
            return res.status(500).json(err)
        }
        
        return res.json(results) 
    })
})

app.listen(port, () => console.log(`App is live on port ${port}!`));