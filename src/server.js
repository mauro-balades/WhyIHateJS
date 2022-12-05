
import express from "express";
import path from "path";
import ejs from "ejs";

const __dirname = path.resolve();

export default (collections) => {
    const app = express()

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.get('/', (req, res) => {
        res.render("index.ejs", {})
    })

    app.set('views', path.join(__dirname, '/src/pages'));
    app.engine('html', ejs.renderFile);

    return app;
}
