interface Window {
    calculate: Calculator;
}

window.onload = () => {
    let calculate = new Calculator();
    window.calculate = calculate;
    calculate.Initialize();
}

class Calculator {
    Initialize(): void {
        this.Calculate();
    };

    Calculate(): void {
        let display = document.getElementById("calcInput") as HTMLInputElement;
        let calcBtn = document.getElementsByClassName("calc-btn") as HTMLCollectionOf<HTMLInputElement>;

        if (calcBtn != null) {
            for (var i = 0; i < calcBtn.length; i++) {
                calcBtn[i].addEventListener("click", function () {
                    display.value += this.value;
                    console.log(this.value);
                });
            }
        }

        let clear = document.getElementById("clear") as HTMLButtonElement;
        if (clear != null) {
            clear.addEventListener("click", function () {
                display.value = "";
            });
        }

        let evaluate = document.getElementsByClassName("eval-btn");
        if (evaluate != null) {
            evaluate[0].addEventListener("click", function () {
                display.value = eval(display.value);
            });
        }
    }
}