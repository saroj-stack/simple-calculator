let show = document.querySelector("#show");

let btns = Array.from(document.querySelectorAll(".btn"));
let btnsNew = [...btns];
btnsNew.push(document.querySelector('.result'));

btnsNew.map((btn) => {
    btn.addEventListener("click", (e) => {
        switch (e.target.innerText) {
            case "C":
                show.innerText = "";
                break;

            case "DEL":
                if (show.innerText) {
                    show.innerText = show.innerText.slice(0, -1);
                }
                break;


            case "=":

                try {
                    show.innerText = eval(show.innerText);

                }
                catch {
                    show.innerText = '!Error';
                }
                break;

            default:
                show.innerText += e.target.innerText;




        }
    });
});
