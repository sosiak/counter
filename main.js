//languages
const plLang = [
    ['dni', 'days'],
    ['dzień', 'day'],
    ['godz', 'h'],
    ['min.', 'min.'],
    ['sek.', 'sec.'],
    ['Data', 'Date'],
    ['Błędna data', 'Incorrect date'],
    ['Oglądaj', 'Play'],
    ['Powrót', 'Back']
];

let j = 0;
// createBody
const videoContainer = document.createElement('header');
videoContainer.className = 'video-container';
document.body.appendChild(videoContainer);
//
const overlay = document.createElement('div');
overlay.className = 'overlay';
videoContainer.appendChild(overlay);
//
const videoContainerBackground = document.createElement('video');
videoContainerBackground.className = 'video-container__background';
overlay.appendChild(videoContainerBackground);
const videoBackground = document.querySelector('.video-container__background');
videoBackground.setAttribute('poster', 'background-video.jpg');
videoBackground.setAttribute('muted', 'true');
videoBackground.setAttribute('autoplay', 'true');
videoBackground.setAttribute('loop', 'true');
//
const srcMP4 = document.createElement('source');
srcMP4.setAttribute('src', 'background-video.mp4');
srcMP4.setAttribute('type', 'video/mp4');
const srcWebm = document.createElement('source');
srcWebm.setAttribute('src', 'background-video.webm');
srcWebm.setAttribute('type', 'video/webm');
videoBackground.appendChild(srcMP4);
videoBackground.appendChild(srcWebm);
//
const videoContContent = document.createElement('div');
videoContContent.className = 'video-container__content';
videoContainer.appendChild(videoContContent);
//
const counterDiv = document.createElement('div');
counterDiv.className = 'counter';
videoContContent.appendChild(counterDiv);
const destinationTimeDiv = document.createElement('div');
destinationTimeDiv.className = 'destination-time';
videoContContent.appendChild(destinationTimeDiv);
//  
const headerInput = document.createElement('h1');
headerInput.className = 'destination-time__title';
setInterval(() => {
    headerInput.textContent = plLang[5][j];
}, 1000);
destinationTimeDiv.appendChild(headerInput);
const input = document.createElement('input');
input.setAttribute('id', 'time-input');
input.setAttribute('type', 'datetime-local');
input.setAttribute('value', '2019-12-15T20:00:00');
input.setAttribute('min', '2000-01-01T00:00');
input.setAttribute('max', '2030-12-31T23:59');
input.className = 'destination-time__input';
destinationTimeDiv.appendChild(input);
const errorParagraph = document.createElement('p');
errorParagraph.className = 'destination-time__error';
destinationTimeDiv.appendChild(errorParagraph);
const addBtn = document.createElement('button');
addBtn.className = 'counter__button btn-add';
addBtn.textContent = '+';
destinationTimeDiv.appendChild(addBtn);
//
const listWatches = document.createElement('div');
listWatches.className = 'list-watches';
videoContContent.appendChild(listWatches);
//
const config = document.createElement('div');
config.className = 'config';
videoContContent.appendChild(config);
//
const openClose = document.createElement('div');
openClose.className = 'config__open-close';
openClose.innerHTML = '<i class="fas fa-chevron-left"></i>';
config.appendChild(openClose);
const redDiv = document.createElement('div');
redDiv.className = 'config__red';
config.appendChild(redDiv);
const greenDiv = document.createElement('div');
greenDiv.className = 'config__green';
config.appendChild(greenDiv);
const blueDiv = document.createElement('div');
blueDiv.className = 'config__blue';
config.appendChild(blueDiv);
const pl = document.createElement('div');
pl.className = 'config__language';
pl.textContent = 'PL';
config.appendChild(pl);
const en = document.createElement('div');
en.className = 'config__language';
en.textContent = 'EN';
config.appendChild(en);

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
    if (navigator.userAgent.includes('Safari') &&
        !navigator.userAgent.includes('Chrome')) {
        is_safari = true;
    } else {
        is_safari = false;
    }
    return is_safari;
}
IsSafari();
// defaultValue
let inputValueInString = inputDateValue.toLocaleString();
let dateString;
if (is_safari) {
    dateString = inputValueInString.substr(0, 10) + "T" + inputValueInString.substr(11, 5) + ":00.000";
} else {
    dateString = inputValueInString.substr(0, 10) + " " + inputValueInString.substr(11, 5) + ":00";
}



const convertDateTime = () => {
    if (is_safari) {
        dateString = inputValueInString.substr(0, 10) + "T" + inputValueInString.substr(11, 5) + ":00.000";
    } else {
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
        error.textContent = plLang[6][j];
        inputDate.classList.add('destination-time__input--error');
    } else {
        error.textContent = ``;
        inputDate.classList.remove('destination-time__input--error');
    }
}

let daysParagraph, hoursParagraph, minutesParagraph, secondsParagraph;
let days, hours, minutes, seconds;


const calculateTime = () => {
    if (error.textContent === ``) {
        let start = new Date().getTime();
        let end;
        if (is_safari) {
            end = new Date(dateString).getTime() - 3600000;
        } else {
            end = new Date(dateString).getTime();
        }
        counter = end - start;

        // add values to htmlElements
        if (days < 10 && days !== 1 && days >= 0) {
            daysParagraph.textContent = `0${days}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = plLang[0][j];
            daysParagraph.appendChild(createUnitParagraph);
        } else if (days < 10 && days === 1 && days >= 0) {
            daysParagraph.textContent = `0${days}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = plLang[1][j];
            daysParagraph.appendChild(createUnitParagraph);
        } else if (days >= 10) {
            daysParagraph.textContent = `${days}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = plLang[0][j];
            daysParagraph.appendChild(createUnitParagraph);
        }
        if (hours < 10 && days >= 0) {
            hoursParagraph.textContent = `0${hours}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = plLang[2][j];
            hoursParagraph.appendChild(createUnitParagraph);
        } else if (days >= 0) {
            hoursParagraph.textContent = `${hours}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = plLang[2][j];
            hoursParagraph.appendChild(createUnitParagraph);
        }
        if (minutes < 10 && days >= 0) {
            minutesParagraph.textContent = `0${minutes}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = plLang[3][j];
            minutesParagraph.appendChild(createUnitParagraph);
        } else if (days >= 0) {
            minutesParagraph.textContent = `${minutes}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = plLang[3][j];
            minutesParagraph.appendChild(createUnitParagraph);
        }
        if (seconds < 10 && days >= 0) {
            secondsParagraph.textContent = `0${seconds}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = plLang[4][j];
            secondsParagraph.appendChild(createUnitParagraph);
        } else if (days >= 0) {
            secondsParagraph.textContent = `${seconds}`;
            const createUnitParagraph = document.createElement('p');
            createUnitParagraph.className = 'unit';
            createUnitParagraph.textContent = plLang[4][j];
            secondsParagraph.appendChild(createUnitParagraph);
        }
    } else {
        daysParagraph.textContent = `--`;
        hoursParagraph.textContent = `--`;
        minutesParagraph.textContent = `--`;
        secondsParagraph.textContent = `--`;
    }
}

let counter;
let flag = true;
let idInterval;
let button;
const bigInterval = ()=> {setInterval(() => {
    if (counter < 0) {
        if (flag === false) {
            const allParagraphs = document.querySelectorAll('.counter__time');
            const buttonWatch = document.createElement('button');
            buttonWatch.className = 'counter__button btn-watch';
            buttonWatch.textContent = plLang[7][j];
            setInterval(() => {
                buttonWatch.textContent = plLang[7][j];
            }, 1000);
            allParagraphs.forEach((e) => {
                counterContainer.removeChild(e);
            })
            counterContainer.appendChild(buttonWatch);
            buttonWatch.addEventListener('click', () => {
                videoContainerContent.removeChild(counterContainer);
                videoContainerContent.removeChild(destinationTime);
                const backAnchor = document.createElement('a');
                // backAnchor.setAttribute('href', 'index.html');
                const backButton = document.createElement('button');
                backButton.className = 'counter__button';
                backButton.textContent = plLang[8][j];
                setInterval(() => {
                    backButton.textContent = plLang[8][j];
                }, 200);
                backAnchor.appendChild(backButton);
                videoContainerContent.appendChild(backAnchor);
                backAnchor.addEventListener('click', ()=> {
                    videoContainerContent.removeChild(backAnchor);
                    videoContContent.appendChild(counterDiv);
                    counterDiv.removeChild(buttonWatch);
                    videoContContent.appendChild(destinationTimeDiv);
                    inputDate.value = "2019-12-15T20:00";
                    dateString = "2019-12-15 20:00:00";
                    currentInputValue();
                    calculateTime();
                    bigInterval();
                })
            });
            destinationTimeDiv.removeChild(addBtn);
        }
        flag = true;
    } else {
        if (flag === true) {
            button = document.querySelector('.btn-watch');
            destinationTimeDiv.appendChild(addBtn);
            if (button === null) {
                createParagraphsCountTime();
            } else {
                counterContainer.removeChild(button);
                createParagraphsCountTime();
            }
            idInterval = setInterval(calculateTime, 1000);
        }
        flag = false;
    }
    days = Math.floor(counter / 86400000);
    hours = Math.floor((counter - (days * 86400000)) / 3600000);
    minutes = Math.floor((counter - (days * 86400000) - (hours * 3600000)) / 60000);
    seconds = Math.floor((counter - (days * 86400000) - (hours * 3600000) - (minutes * 60000)) / 1000);
    daysParagraph = document.querySelector(".days");
    hoursParagraph = document.querySelector(".hours");
    minutesParagraph = document.querySelector(".minutes");
    secondsParagraph = document.querySelector(".seconds");
}, 1000);
}
bigInterval();


//change language
pl.addEventListener("click", () => {
    j = 0;
    return j;
})
en.addEventListener("click", () => {
    j = 1;
    return j;
})


let counters = [];

const calculateToListItem = () => {
    let start = new Date().getTime();
    let end;
    if (is_safari) {
        end = new Date(dateString).getTime() - 3600000;
    } else {
        end = new Date(dateString).getTime();
    }
    return counterElement = end - start;


}
let uniID = 0;
addBtn.addEventListener("click", () => {
    calculateToListItem();
    uniID++;
    console.log(uniID);
    let initialValue = counterElement;
    let countersLen = counters.length;
    let days = Math.floor(initialValue / 86400000);
    let hours = Math.floor((initialValue - (days * 86400000)) / 3600000);
    let minutes = Math.floor((initialValue - (days * 86400000) - (hours * 3600000)) / 60000);
    let seconds = Math.floor((initialValue - (days * 86400000) - (hours * 3600000) - (minutes * 60000)) / 1000);

    let newCounter = {
        valueInMiliseconds: initialValue,
        valueInDays: Math.floor(initialValue / 86400000),
        valueInHours: Math.floor((initialValue - (days * 86400000)) / 3600000),
        valueInMinutes: Math.floor((initialValue - (days * 86400000) - (hours * 3600000)) / 60000),
        valueInSeconds: Math.floor((initialValue - (days * 86400000) - (hours * 3600000) - (minutes * 60000)) / 1000),
        elementID: `counter-${uniID}`,
        IDDays: `counter-${uniID}-days`,
        IDHours: `counter-${uniID}-hours`,
        IDMinutes: `counter-${uniID}-minutes`,
        IDSeconds: `counter-${uniID}-seconds`,
        IDBtn: `counter-${uniID}-button`,
        removeButton: function () {
            const removeItem = document.getElementById(newCounter.elementID);
            listWatches.removeChild(removeItem);
        },
    };
    counters.push(newCounter);


    let listWatches = document.querySelector('.list-watches');
    let newTimer = document.createElement('div');
    newTimer.id = newCounter.elementID;
    newTimer.className = 'list-watches__element';
    listWatches.appendChild(newTimer);
    let newDays = document.createElement('div');
    newDays.className = `list-watches__element__time`;
    newDays.id = newCounter.IDDays;
    let newHours = document.createElement('div');
    newHours.className = `list-watches__element__time`;
    newHours.id = newCounter.IDHours;
    let newMinutes = document.createElement('div');
    newMinutes.className = `list-watches__element__time`;
    newMinutes.id = newCounter.IDMinutes;
    let newSeconds = document.createElement('div');
    newSeconds.className = `list-watches__element__time`;
    newSeconds.id = newCounter.IDSeconds;
    let removeButton = document.createElement('button');
    removeButton.className = 'list-watches__element__remove-button';
    removeButton.id = newCounter.IDBtn;
    removeButton.textContent = 'X';
    newTimer.appendChild(newDays);
    newTimer.appendChild(newHours);
    newTimer.appendChild(newMinutes);
    newTimer.appendChild(newSeconds);
    newTimer.appendChild(removeButton);

    // console.log(counterElement);
    removeButton.addEventListener('click', newCounter.removeButton);
    removeButton.addEventListener('click', (e) => {
        console.log(e.target.id);
        for (let o = 0; o < counters.length; o++) {
            if (counters[o].IDBtn === e.target.id) {
                counters.splice(o, 1);
            }
        }
    })
})

setInterval(function () {
    for (let p = 0; p < counters.length; p++) {
        counters[p].valueInMiliseconds -= 1000;

        counters[p].valueInDays = Math.floor(counters[p].valueInMiliseconds / 86400000);
        counters[p].valueInHours = Math.floor((counters[p].valueInMiliseconds - (counters[p].valueInDays * 86400000)) / 3600000);
        counters[p].valueInMinutes = Math.floor((counters[p].valueInMiliseconds - (counters[p].valueInDays * 86400000) - (counters[p].valueInHours * 3600000)) / 60000);
        counters[p].valueInSeconds = Math.floor((counters[p].valueInMiliseconds - (counters[p].valueInDays * 86400000) - (counters[p].valueInHours * 3600000) - (counters[p].valueInMinutes * 60000)) / 1000);

        let elId = counters[p].elementID;
        let elIdDays = counters[p].IDDays;
        let elIdHours = counters[p].IDHours;
        let elIdMinutes = counters[p].IDMinutes;
        let elIdSeconds = counters[p].IDSeconds;
        let elementDays = document.getElementById(elIdDays);
        let elementHours = document.getElementById(elIdHours);
        let elementMinutes = document.getElementById(elIdMinutes);
        let elementSeconds = document.getElementById(elIdSeconds);
        if (counters[p].valueInMiliseconds < 0) {
            const zeroElement = document.getElementById(counters[p].elementID);
            zeroElement.style.transition = '1.2s';
            zeroElement.style.transform = 'rotate(720deg)';
            elementDays.textContent = 0;
            elementHours.textContent = 0;
            elementMinutes.textContent = 0;
            elementSeconds.textContent = 0;
        } else {
            elementDays.textContent = counters[p].valueInDays;
            elementHours.textContent = counters[p].valueInHours;
            elementMinutes.textContent = counters[p].valueInMinutes;
            elementSeconds.textContent = counters[p].valueInSeconds;
        }

    }
}, 1000);




































































//themes
const leftRightArrow = document.querySelector('i');
let flagRotation = true;
leftRightArrow.addEventListener("click", () => {
    if (flagRotation === true) {
        leftRightArrow.style.transform = 'rotate(180deg) translate(-20px, 0)';
        flagRotation = false;
        config.style.transform = 'translate(-250px, 0)';
    } else {
        leftRightArrow.style.transform = 'rotate(0deg) translate(0, 0)';
        config.style.transform = 'translate(0, 0)';
        flagRotation = true;
    }
});
redDiv.addEventListener("click", () => {
    const mainRed = 'rgb(255,0,0)';
    const bgRed = 'rgba(255,0,0,0.4)';
    config.style.backgroundColor = `${bgRed}`;
    listWatches.style.backgroundColor = `${bgRed}`;
    leftRightArrow.style.color = `${mainRed}`;
    const allParagraphs = document.querySelectorAll('.counter__time');
    allParagraphs.forEach((e) => {
        e.style.border = `dotted ${mainRed} 5px`;
        e.style.backgroundColor = `${bgRed}`;
    })
    const allListElementsParagraphs = document.querySelectorAll('.list-watches__element__time');
    allListElementsParagraphs.forEach((e) => {
        e.style.border = `dotted ${mainRed} 5px`;
        e.style.backgroundColor = `${bgRed}`;
    })
    const allLanguageBtn = document.querySelectorAll('.config__language');
    allLanguageBtn.forEach((e) => {
        e.style.border = `solid ${mainRed} 1px`;
        e.style.backgroundColor = `${bgRed}`;
    })
    const button = document.querySelector('.counter__button');
    if (button !== null) {
        button.style.backgroundColor = `${mainRed}`;
    }
    const btnRemove = document.querySelectorAll('.list-watches__element__remove-button');
    if (btnRemove !== null) {
        btnRemove.forEach((e) => {
            e.style.backgroundColor = `${mainRed}`;
        })
    }
})
greenDiv.addEventListener("click", () => {
    const mainGreen = 'rgb(0,255,0)';
    const bgGreen = 'rgba(0,255,0,0.4)';
    config.style.backgroundColor = `${bgGreen}`;
    listWatches.style.backgroundColor = `${bgGreen}`;
    leftRightArrow.style.color = `${mainGreen}`;
    const allParagraphs = document.querySelectorAll('.counter__time');
    allParagraphs.forEach((e) => {
        e.style.border = `dotted ${mainGreen} 5px`;
        e.style.backgroundColor = `${bgGreen}`;
    })
    const allListElementsParagraphs = document.querySelectorAll('.list-watches__element__time');
    allListElementsParagraphs.forEach((e) => {
        e.style.border = `dotted ${mainGreen} 5px`;
        e.style.backgroundColor = `${bgGreen}`;
    })
    const allLanguageBtn = document.querySelectorAll('.config__language');
    allLanguageBtn.forEach((e) => {
        e.style.border = `solid ${mainGreen} 1px`;
        e.style.backgroundColor = `${bgGreen}`;
    })
    const button = document.querySelector('.counter__button');
    if (button !== null) {
        button.style.backgroundColor = `${mainGreen}`;
    }
    const btnRemove = document.querySelectorAll('.list-watches__element__remove-button');
    if (btnRemove !== null) {
        btnRemove.forEach((e) => {
            e.style.backgroundColor = `${mainGreen}`;
        })
    }
})
blueDiv.addEventListener("click", () => {
    const mainBlue = 'rgb(0,0,255)';
    const bgBlue = 'rgba(0,0,255,0.4)';
    config.style.backgroundColor = `${bgBlue}`;
    listWatches.style.backgroundColor = `${bgBlue}`;
    leftRightArrow.style.color = `${mainBlue}`;
    const allParagraphs = document.querySelectorAll('.counter__time');
    allParagraphs.forEach((e) => {
        e.style.border = `dotted ${mainBlue} 5px`;
        e.style.backgroundColor = `${bgBlue}`;
    })
    const allListElementsParagraphs = document.querySelectorAll('.list-watches__element__time');
    allListElementsParagraphs.forEach((e) => {
        e.style.border = `dotted ${mainBlue} 5px`;
        e.style.backgroundColor = `${bgBlue}`;
    })
    const allLanguageBtn = document.querySelectorAll('.config__language');
    allLanguageBtn.forEach((e) => {
        e.style.border = `solid ${mainBlue} 1px`;
        e.style.backgroundColor = `${bgBlue}`;
    })
    const button = document.querySelector('.counter__button');
    if (button !== null) {
        button.style.backgroundColor = `${mainBlue}`;
    }
    const btnRemove = document.querySelectorAll('.list-watches__element__remove-button');
    if (btnRemove !== null) {
        btnRemove.forEach((e) => {
            e.style.backgroundColor = `${mainBlue}`;
        })
    }
})