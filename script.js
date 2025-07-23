const box = document.querySelectorAll(".box")
const restart = document.querySelector(".restart")
const winner = document.querySelector("#winner")
// const showwinner=document.getElementById("#showwinner")
let button = 1;
for (let i = 0; i < box.length; i++) {
    const element = box[i];
    // console.log(winner)
    // console.log(element);
    element.addEventListener("click", function () {
        if (element.innerHTML == "") {

            if (button == 1) {
                element.innerHTML = "x";
                // element.style.backgroundColor = "red";
                button = 0;
                checkwinner();


            }
            else {
                element.innerHTML = "o";
                // element.style.backgroundColor = "green";
                button = 1;
                checkwinner();
            }
        }

    })
}
restart.addEventListener("mouseover", function () {
    restart.style.backgroundColor = "red"
})
restart.addEventListener("mouseout", function () {
    restart.style.backgroundColor = "green"
})
restart.addEventListener("click", function () {
    for (let i = 0; i < box.length; i++) {
        const element = box[i];
        element.innerHTML = ""
        element.style.backgroundColor = ""
        winner.innerHTML = ""
        element.classList.remove('disabled')

    }
    
})




const winpattern = [
    [0, 1, 2],
    [0, 3, 6],
    [0, 4, 8],
    [1, 4, 7],
    [2, 4, 6],
    [2, 5, 8],
    [3, 4, 5],
    [6, 7, 8]
]

const checkwinner = () => {
    for (let pattern of winpattern) {
        let pav1val = box[pattern[0]].innerHTML
        let pav2val = box[pattern[1]].innerHTML
        let pav3val = box[pattern[2]].innerHTML
        if (pav1val && pav1val === pav2val && pav2val === pav3val) {
            console.log("winner", pav2val);
            dissable();
            show(pav2val);
        }
    }

}

const dissable = () => {
    for (let i = 0; i < box.length; i++) {
        box[i].classList.add('disabled');
    }
}
const show = (user) => {
    winner.innerHTML = `${user} is winner`
    // winner
}
