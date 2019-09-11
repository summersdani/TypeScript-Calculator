window.onload = function () {
    var calculate = new Calculator();
    window.calculate = calculate;
    calculate.Initialize();
};
var Calculator = /** @class */ (function () {
    function Calculator() {
    }
    Calculator.prototype.Initialize = function () {
        this.Calculate();
    };
    ;
    Calculator.prototype.Calculate = function () {
        var display = document.getElementById("calcInput");
        var calcBtn = document.getElementsByClassName("calc-btn");
        if (calcBtn != null) {
            for (var i = 0; i < calcBtn.length; i++) {
                calcBtn[i].addEventListener("click", function () {
                    display.value += this.value;
                    console.log(this.value);
                });
            }
        }
        var clear = document.getElementById("clear");
        if (clear != null) {
            clear.addEventListener("click", function () {
                display.value = "";
            });
        }
        var evaluate = document.getElementsByClassName("eval-btn");
        if (evaluate != null) {
            evaluate[0].addEventListener("click", function () {
                display.value = eval(display.value);
            });
        }
    };
    return Calculator;
}());
//# sourceMappingURL=tsScripts.js.map