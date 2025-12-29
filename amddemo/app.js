define(["require", "exports", "greeter"], function (require, exports, model) {
    "use strict";
    exports.__esModule = true;
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
});
//# sourceMappingURL=app.js.map