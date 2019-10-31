const inputDate = document.querySelector('#time-input');
let inputDateValue = inputDate.value;
let currentDate = Date.now();

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
    });
}
currentInputValue();

const calculateTime = setInterval(()=> {
    let start = new Date().getTime();
    let end = new Date(dateString).getTime();
    let counter = end-start;
    let days = Math.floor(counter/86400000);
    let hours = Math.floor((counter-(days*86400000))/3600000);
    let minutes = Math.floor((counter-(days*86400000)-(hours*3600000))/60000);
    let seconds = Math.floor((counter-(days*86400000)-(hours*3600000)-(minutes*60000))/1000);
    // add values to htmlElements
    const daysParagraph = document.querySelector(".days");
    const hoursParagraph = document.querySelector(".hours");
    const minutesParagraph = document.querySelector(".minutes");
    const secondsParagraph = document.querySelector(".seconds");

    if(days<10) {
        daysParagraph.textContent = `0${days}`;
    }
    else {
        daysParagraph.textContent = days;
    }
    if(hours<10) {
        hoursParagraph.textContent = `0${hours}`;
    }
    else {
        hoursParagraph.textContent = hours;
    }
    if(minutes<10) {
        minutesParagraph.textContent = `0${minutes}`;
    }
    else {
        minutesParagraph.textContent = minutes;
    }
    if(seconds<10) {
        secondsParagraph.textContent = `0${seconds}`;
    }
    else {
        secondsParagraph.textContent = seconds;
    }
}, 1000);



