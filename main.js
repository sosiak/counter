//
const counterContainer = document.querySelector('.counter');
const videoContainerContent = document.querySelector('.video-container__content');
const destinationTime = document.querySelector('.destination-time');
const inputDate = document.querySelector('#time-input');
const error = document.querySelector('.destination-time__error');
let inputDateValue = inputDate.value;

//create Paragraphs
const createParagraphsCountTime = () => {
    for (let i = 1; i <= 4; i++) {
        const createParagraph = document.createElement('p');
        createParagraph.textContent = ``;
        switch (i) {
            case 1:
                createParagraph.className = `counter__time days`;
                break;
            case 2:
                createParagraph.className = `counter__time hours`;
                break;
            case 3:
                createParagraph.className = `counter__time minutes`;
                break;
            case 4:
                createParagraph.className = `counter__time seconds`;
                break;
        }
        counterContainer.appendChild(createParagraph);
    }
}
// detect Safari
let is_safari;
const IsSafari = () => {
    if (navigator.userAgent.includes('Safari')
    && !navigator.userAgent.includes('Chrome')) {
        is_safari=true;
    } else {
        is_safari=false;
    }
    return is_safari;
}
IsSafari();
// defaultValue
let inputValueInString = inputDateValue.toLocaleString();
let dateString;
if(is_safari) {
    dateString = inputValueInString.substr(0, 10) + "T" + inputValueInString.substr(11, 5) + ":00.000";
}
else {
    dateString = inputValueInString.substr(0, 10) + " " + inputValueInString.substr(11, 5) + ":00";
}



const convertDateTime = () => {
    if(is_safari) {
        dateString = inputValueInString.substr(0, 10) + "T" + inputValueInString.substr(11, 5) + ":00.000";
    }
    else {
        dateString = inputValueInString.substr(0, 10) + " " + inputValueInString.substr(11, 5) + ":00";
    }
    return dateString;
}
const currentInputValue = () => {
    inputDate.addEventListener("change", () => {
        inputDateValue = inputDate.value;
        inputValueInString = inputDateValue.toLocaleString();
        convertDateTime();
        validateInputDate();
    });
}
currentInputValue();

const validateInputDate = () => {
    let dateToValidate = new Date(inputDateValue);
    if (isNaN(dateToValidate.getTime())) {
        error.textContent = `Błędna data`;
        inputDate.classList.add('destination-time__input--error');
    } else {
        error.textContent = ``;
        inputDate.classList.remove('destination-time__input--error');
    }
}



const calculateTime = () => {
    if (error.textContent === ``) {
        let start = new Date().getTime();
        let end = new Date(dateString).getTime();
        counter = end - start;
        let days = Math.floor(counter / 86400000);
        let hours = Math.floor((counter - (days * 86400000)) / 3600000);
        let minutes = Math.floor((counter - (days * 86400000) - (hours * 3600000)) / 60000);
        let seconds = Math.floor((counter - (days * 86400000) - (hours * 3600000) - (minutes * 60000)) / 1000);

        const daysParagraph = document.querySelector(".days");
        const hoursParagraph = document.querySelector(".hours");
        const minutesParagraph = document.querySelector(".minutes");
        const secondsParagraph = document.querySelector(".seconds");

        // add values to htmlElements
        if (days < 10 && days !== 1) {
            daysParagraph.textContent = `0${days}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = 'dni';
            daysParagraph.appendChild(createUnitParagraph);
        } else if (days < 10 && days === 1) {
            daysParagraph.textContent = `0${days}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = 'dzień';
            daysParagraph.appendChild(createUnitParagraph);
        } else {
            daysParagraph.textContent = `${days}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = 'dni';
            daysParagraph.appendChild(createUnitParagraph);
        }
        if (hours < 10) {
            hoursParagraph.textContent = `0${hours}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = 'godz.';
            hoursParagraph.appendChild(createUnitParagraph);
        } else {
            hoursParagraph.textContent = `${hours}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = 'godz.';
            hoursParagraph.appendChild(createUnitParagraph);
        }
        if (minutes < 10) {
            minutesParagraph.textContent = `0${minutes}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = 'min.';
            minutesParagraph.appendChild(createUnitParagraph);
        } else {
            minutesParagraph.textContent = `${minutes}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = 'min.';
            minutesParagraph.appendChild(createUnitParagraph);
        }
        if (seconds < 10) {
            secondsParagraph.textContent = `0${seconds}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = 'sek.';
            secondsParagraph.appendChild(createUnitParagraph);
        } else {
            secondsParagraph.textContent = `${seconds}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = 'sek.';
            secondsParagraph.appendChild(createUnitParagraph);
        }
    } else {
        daysParagraph.textContent = `--`;
        hoursParagraph.textContent = `--`;
        minutesParagraph.textContent = `--`;
        secondsParagraph.textContent = `--`;
    }
}

// let idInterval = setInterval(calculateTime, 1000);
let counter = 1;
let flag = true;
let idInterval;
setInterval(() => {
    if (counter < 0) {
        if (flag === false) {
            const allParagraphs = document.querySelectorAll('.counter__time');
            const buttonWatch = document.createElement('button');
            buttonWatch.className = 'counter__button';
            buttonWatch.textContent = 'Oglądaj';
            allParagraphs.forEach((e) => {
                counterContainer.removeChild(e);
            })
            counterContainer.appendChild(buttonWatch);
            buttonWatch.addEventListener('click', () => {
                videoContainerContent.removeChild(counterContainer);
                videoContainerContent.removeChild(destinationTime);
                videoContainerContent.textContent = 'Za chwilę zaczynamy...';
            });
            flag = true;
            clearInterval(idInterval);
        }
    } else {
        if (flag === true) {
            createParagraphsCountTime();
            idInterval = setInterval(calculateTime, 1000);
        }
        flag = false;
    }
}, 1000);

const button = document.querySelector('button');