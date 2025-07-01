// -----------dom ------------------


// -------------player 1------------
let main1 = document.querySelector('.main1')
let error1 = document.querySelector('.error1')
let input1 = document.querySelector('.input1')
let button1 = document.querySelector('.button1')



// ------------player 2 dom---------

let main2 = document.querySelector('.main2')
let chance = document.querySelector('.chance')
let input2 = document.querySelector('.input2')
let error2 = document.querySelector('.error2')
let button2 = document.querySelector('.button2')


// ----Winner dom--------

let winner = document.querySelector('.winner')
let winnerimg = document.querySelector('.winnerimg')
let winer_name = document.querySelector('.winer_name')



let buttonOne = () => {
    if (input1.value == '') {
        error1.innerHTML = "kono number likhen"
    } else if (input1.value > 10 || input1.value < 0) {
        error1.innerHTML = " 0--10 er moddhe number likhen"

    }
    else{

main1.style="display:none"

main2.style="display:block"


    }

}

let buttonTWO = () => {
    if (input2.value == '') {
        error2.innerHTML = "kono number likhen"
    } else if (input2.value > 10 || input2.value < 0) {
        error2.innerHTML = " 0--10 er moddhe number likhen"

    }
    else{



    }

}