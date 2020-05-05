const orm = require("../config/orm");

function burger(name) {
    this.name = name;
    this.devoured = false;
}




module.exports = burger;