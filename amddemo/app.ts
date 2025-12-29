import model = require("greeter");

var el = document.getElementById("content");
var start = document.getElementById("start");
var button = document.getElementById("button");

var greeter = new model.Greeter(el);

start.onclick = function () {
    greeter.start();
};

button.onclick = function () {
    greeter.stop();
};

