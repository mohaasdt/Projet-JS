let result = document.getElementById("result");
let result1 = document.getElementById("result1");
let buttons = Array.from(document.querySelectorAll(".button"));

buttons.map((button) => {
    button.addEventListener("click", (Event) => {
        switch(Event.target.innerText) {  
            case "C": {
                result.innerText = "";
                result1.innerText = "";
                break;
            }
            case "←": {  
                if (result.innerText.length > 0) {
                    result.innerText = result.innerText.slice(0, -1);
                }
                break;
            }
            case "=": {
                try {  
                    result1.innerText = eval(result.innerText);  
                } catch {
                    result1.innerText = "Erreur";
                }
                break;
            }
            default: {
                result.innerText += Event.target.innerText;
                if (result.innerText.length > 15) {
                    result1.innerText = "Trop long !";
                    result.innerText = "";
                }
            }
        }
    });
});






















