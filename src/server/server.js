import path from 'path';
import fs from 'fs';
import express from 'express';
import React from 'react';
import ReactDOMServer from 'react-dom/server';
//import entry point applicatie
import App from '../src/containers/App';
//static router
import { StaticRouter as Router} from 'react-router-dom';
import Helmet from 'react-helmet';

//entry point node server, set port, rerout dan match /* wildcard

const PORT = 8080;
const app = express();

app.get('/*', (req, res) => {
    const context = {};
    const app = ReactDOMServer.renderToString(
        <Router location={req.url} context={context}>
        <App />
        </Router>);

        const helmet = Helmet.renderStatic();


const indexFile = path.resolve('./build/index.html');
fs.readFile(indexFile, 'utf8', (err, data) => {
    if (err) {
        console.error('Something went wrong:', err);
        return res.status(500).send('Oops, better luck next time!');
    }

    data = data.replace('<meta name="helmet"/>', `${helmet.title.toString()}${helmet.meta.toString()}`);

    return res.send(data);
});
});

//express server luiter nu naar port 8080

app.listen(PORT, () => {
    console.log(`Server-Side Rendered application running on port ${PORT}`);
    });
