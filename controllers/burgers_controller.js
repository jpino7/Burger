const routes = require("express").router();
const burger = require("../models/burger");

routes.get("/", function (req, res) {
    burger.selectBurgers().then(result => {
        //This will populate results based on burger status
        let devoured = result.filter(b => b.devoured === 1);
        let notDevoured = result.filter(b => b.devoured === 0);
        res.render("index", {
            notDevouredList: notDevoured,
            devouredList: devoured
        });
    }).catch((err) => {
        res.status(500).send({error: err});
    });
});

module.exports = routes;