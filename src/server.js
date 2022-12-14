
import express from "express";
import path from "path";
import ejs from "ejs";

const __dirname = path.resolve();

export default (collections) => {
    const app = express()

    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));
    app.use(express.static(__dirname + "/public")); // This line helps us server static files in the public folder. Here we'll write our CSS and browser javascript code

    for (const collection of collections) {
        app.get(`/${collection.id}`, (req, res) => {
            res.render("collection.ejs", { collection })
        })
    }

    app.get('/', (req, res) => {
        res.render("index.ejs", { collections: collections })
    })

    app.set('views', path.join(__dirname, '/src/pages'));
    app.engine('html', ejs.renderFile);
    app.set('view engine', 'ejs');


    return app;
}
