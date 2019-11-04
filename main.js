// create paragraphs
const createDaysParagraph = document.createElement("p")
//
const counterContainer = document.querySelector('.counter');
const inputDate = document.querySelector('#time-input');
const error = document.querySelector('.destination-time__error');
let inputDateValue = inputDate.value;

// defaultValue
let inputValueInString = inputDateValue.toLocaleString();
let dateString = inputValueInString.substr(0,10) + " " + inputValueInString.substr(11,5) + ":00"


const convertDateTime = () => {
    dateString = inputValueInString.substr(0,10) + " " + inputValueInString.substr(11,5) + ":00";
    return dateString;
}
const currentInputValue = ()=> {
    inputDate.addEventListener("change", ()=>{
        inputDateValue = inputDate.value;
        inputValueInString = inputDateValue.toLocaleString();
        convertDateTime();
        validateInputDate();
    });
}
currentInputValue();

const validateInputDate = () => {
    let dateToValidate = new Date(inputDateValue);
    if(isNaN(dateToValidate.getTime())) {
        error.textContent = `Błędna data`;
        inputDate.classList.add('destination-time__input--error');
    }
    else {
        error.textContent = ``;
        inputDate.classList.remove('destination-time__input--error');
    }
}

const daysParagraph = document.querySelector(".days");
const hoursParagraph = document.querySelector(".hours");
const minutesParagraph = document.querySelector(".minutes");
const secondsParagraph = document.querySelector(".seconds");

const calculateTime = () => {
    if(error.textContent===``) {
        let start = new Date().getTime();
        let end = new Date(dateString).getTime();
        counter = end-start;
        let days = Math.floor(counter/86400000);
        let hours = Math.floor((counter-(days*86400000))/3600000);
        let minutes = Math.floor((counter-(days*86400000)-(hours*3600000))/60000);
        let seconds = Math.floor((counter-(days*86400000)-(hours*3600000)-(minutes*60000))/1000);
        
        // add values to htmlElements
        if(days<10 && days!== 1) {
            daysParagraph.innerHTML = `0${days} <br> <span class="unit">dni</span>`;
        }
        else if(days<10 && days===1) {
            daysParagraph.innerHTML = `0${days} <br> <span class="unit">dzień</span>`;
        }
        else {
            daysParagraph.innerHTML = `${days} <br> <span class="unit">dni</span>`;
        }
        if(hours<10) {
            hoursParagraph.innerHTML = `0${hours} <br> <span class="unit">godz.</span>`;
        }
        else {
            hoursParagraph.innerHTML = `${hours} <br> <span class="unit">godz.</span>`;
        }
        if(minutes<10) {
            minutesParagraph.innerHTML = `0${minutes} <br> <span class="unit">min.</span>`;
        }
        else {
            minutesParagraph.innerHTML = `${minutes} <br> <span class="unit">min.</span>`;
        }
        if(seconds<10) {
            secondsParagraph.innerHTML = `0${seconds} <br> <span class="unit">sek.</span>`;
        }
        else {
            secondsParagraph.innerHTML = `${seconds} <br> <span class="unit">sek.</span>`;
        }
    }
    else {
        daysParagraph.textContent = `--`;
        hoursParagraph.textContent = `--`;
        minutesParagraph.textContent = `--`;
        secondsParagraph.textContent = `--`;
    } 
}

// let idInterval = setInterval(calculateTime, 1000);
let counter = 1;
setInterval(()=>{
    if(counter<0) {
        const allParagraphs = document.querySelectorAll('.counter__time');
        const buttonWatch = document.createElement('button');
        buttonWatch.className = 'counter__button';
        buttonWatch.textContent = 'Oglądaj';
        allParagraphs.forEach((e)=> {
            counterContainer.removeChild(e);
        })
        counterContainer.appendChild(buttonWatch);
        clearInterval(idInterval);
    }
    else {
        idInterval = setInterval(calculateTime,1000);
    }
},1000); 
    


