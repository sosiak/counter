content(document.body, 'video-container');
createOverlay('video-container', 'overlay');
createVideoBackground('overlay', 'video-container__background', 'background-video.jpg', 'background-video.mp4');
container('video-container', 'video-container__content');
createDiv('video-container__content', 'config');
createDiv('config', 'config__open-close');
const openCloseIcon = document.querySelector('.config__open-close').innerHTML = '<i class="fas fa-chevron-left"></i>';
createDiv('config', 'config__red color');
createDiv('config', 'config__green color');
createDiv('config', 'config__blue color');
createDivWithText('config', 'config__language', 'PL', 'pl');
createDivWithText('config', 'config__language', 'EN', 'en');
chooseLang();
createDiv('video-container__content', 'counter');
createDiv('video-container__content', 'destination-time');
createHeader('destination-time', 'destination-time__title', lang[5][j]);
createDateInputWithErrorDiv('destination-time', 'destination-time__input', 'time-input', '2019-12-15T20:00:00', 'destination-time__error');
createButton('destination-time', 'counter__button btn-add', '+');
createDiv('video-container__content', 'list-watches');
IsSafari();
openClose();
chooseColor();
const colors = document.querySelectorAll('.color');
for (let i = 0; i < colors.length; i++) {
    let colorK = changeTheme(k);
    colors[i].addEventListener('click', colorK);
}


let inputValueInString = defaultInputValue('time-input');
let currentValueInString = convertDefaultInputValue(inputValueInString); // convert default value
let calculatorValue = calculateToListItem(currentValueInString);

const checkInput = document.getElementById(`time-input`);
let bigCalculate = () => {
    let inputDateValue = checkInput.value;
    let inputValueInStringAfterChange = inputDateValue.toLocaleString();
    let validateStatus = validateInputDate(inputDateValue, 'time-input', lang[6][j], 'destination-time__error');
    if (validateStatus === true) {
        currentValueInString = convertDateTime(inputValueInStringAfterChange);
        calculatorValue = calculateToListItem(currentValueInString);
        return calculatorValue;
    } else {
        let flagValidation = false;
        return flagValidation;
    }
}

intervalBigCalculator(1000);
currentValueInString = checkInput.addEventListener('change', bigCalculate); // modify default value

//smallWatches

let counters = [];
let uniID = 0;

let addBtn = document.querySelector('.btn-add');
addBtn.addEventListener('click', addBtnListener);

smallInterval(2000);


const plDiv = document.getElementById('pl');
const enDiv = document.getElementById('en');


plDiv.addEventListener('click', () => {
    const buttonWatch = document.querySelector('.btn-watch');
    updateTextInDiv('.destination-time__title', lang[5][j]);
    if (buttonWatch !== null) {
        updateTextInDiv('.btn-watch', lang[7][j]);
    }
});
enDiv.addEventListener('click', () => {
    const buttonWatch = document.querySelector('.btn-watch');
    updateTextInDiv('.destination-time__title', lang[5][j]);
    if (buttonWatch !== null) {
        updateTextInDiv('.btn-watch', lang[7][j]);
    }
})




// let counter;
// let flag = true;
// let idInterval;
// let button;
// const bigInterval = () => {
//     setInterval(() => {
//         if (counter < 0) {
//             if (flag === false) {
//                 const allParagraphs = document.querySelectorAll('.counter__time');
//                 const buttonWatch = document.createElement('button');
//                 buttonWatch.className = 'counter__button btn-watch';
//                 buttonWatch.textContent = plLang[7][j];
//                 setInterval(() => {
//                     buttonWatch.textContent = plLang[7][j];
//                 }, 1000);
// allParagraphs.forEach((e) => {
//     counterContainer.removeChild(e);
// })
//                 counterContainer.appendChild(buttonWatch);
//                 buttonWatch.addEventListener('click', () => {
//                     videoContainerContent.removeChild(counterContainer);
//                     videoContainerContent.removeChild(destinationTime);
//                     const backAnchor = document.createElement('a');
//                     // backAnchor.setAttribute('href', 'index.html');
//                     const backButton = document.createElement('button');
//                     backButton.className = 'counter__button';
//                     backButton.textContent = plLang[8][j];
//                     setInterval(() => {
//                         backButton.textContent = plLang[8][j];
//                     }, 200);
//                     backAnchor.appendChild(backButton);
//                     videoContainerContent.appendChild(backAnchor);
//                     backAnchor.addEventListener('click', () => {
//                         videoContainerContent.removeChild(backAnchor);
//                         videoContContent.appendChild(counterDiv);
//                         counterDiv.removeChild(buttonWatch);
//                         videoContContent.appendChild(destinationTimeDiv);
//                         inputDate.value = "2019-12-15T20:00";
//                         dateString = "2019-12-15 20:00:00";
//                         currentInputValue();
//                         calculateTime();
//                         bigInterval();
//                     })
//                 });
//                 destinationTimeDiv.removeChild(addBtn);
//             }
//             flag = true;
//         } else {
//             if (flag === true) {
//                 button = document.querySelector('.btn-watch');
//                 destinationTimeDiv.appendChild(addBtn);
//                 if (button === null) {
//                     createParagraphsCountTime();
//                 } else {
//                     counterContainer.removeChild(button);
//                     createParagraphsCountTime();
//                 }
//                 idInterval = setInterval(calculateTime, 1000);
//             }
//             flag = false;
//         }
//         days = Math.floor(counter / 86400000);
//         hours = Math.floor((counter - (days * 86400000)) / 3600000);
//         minutes = Math.floor((counter - (days * 86400000) - (hours * 3600000)) / 60000);
//         seconds = Math.floor((counter - (days * 86400000) - (hours * 3600000) - (minutes * 60000)) / 1000);
//         daysParagraph = document.querySelector(".days");
//         hoursParagraph = document.querySelector(".hours");
//         minutesParagraph = document.querySelector(".minutes");
//         secondsParagraph = document.querySelector(".seconds");
//     }, 1000);
// }
// bigInterval();





// let counters = [];


// let uniID = 0;
// let activeColor = 0;
// addBtn.addEventListener("click", () => {
//     calculateToListItem();
//     uniID++;
//     let initialValue = counterElement;
//     let countersLen = counters.length;
//     let days = Math.floor(initialValue / 86400000);
//     let hours = Math.floor((initialValue - (days * 86400000)) / 3600000);
//     let minutes = Math.floor((initialValue - (days * 86400000) - (hours * 3600000)) / 60000);
//     let seconds = Math.floor((initialValue - (days * 86400000) - (hours * 3600000) - (minutes * 60000)) / 1000);

//     let newCounter = {
//         valueInMiliseconds: initialValue,
//         valueInDays: Math.floor(initialValue / 86400000),
//         valueInHours: Math.floor((initialValue - (days * 86400000)) / 3600000),
//         valueInMinutes: Math.floor((initialValue - (days * 86400000) - (hours * 3600000)) / 60000),
//         valueInSeconds: Math.floor((initialValue - (days * 86400000) - (hours * 3600000) - (minutes * 60000)) / 1000),
// elementID: `counter-${uniID}`,
//     IDDays: `counter-${uniID}-days`,
//     IDHours: `counter-${uniID}-hours`,
//     IDMinutes: `counter-${uniID}-minutes`,
//     IDSeconds: `counter-${uniID}-seconds`,
//     IDBtn: `counter-${uniID}-button`,
//     removeButton: function () {
//         const removeItem = document.getElementById(newCounter.elementID);
//         listWatches.removeChild(removeItem);
//     },
// };
// counters.push(newCounter);


//     let listWatches = document.querySelector('.list-watches');
//     let newTimer = document.createElement('div');
//     newTimer.id = newCounter.elementID;
//     newTimer.className = 'list-watches__element';
//     listWatches.appendChild(newTimer);
//     let newDays = document.createElement('div');
//     newDays.className = `list-watches__element__time`;
//     newDays.id = newCounter.IDDays;
//     let newHours = document.createElement('div');
//     newHours.className = `list-watches__element__time`;
//     newHours.id = newCounter.IDHours;
//     let newMinutes = document.createElement('div');
//     newMinutes.className = `list-watches__element__time`;
//     newMinutes.id = newCounter.IDMinutes;
//     let newSeconds = document.createElement('div');
//     newSeconds.className = `list-watches__element__time`;
//     newSeconds.id = newCounter.IDSeconds;
//     let removeButton = document.createElement('button');
//     removeButton.className = 'list-watches__element__remove-button';
//     removeButton.id = newCounter.IDBtn;
//     removeButton.textContent = 'X';
//     newTimer.appendChild(newDays);
//     newTimer.appendChild(newHours);
//     newTimer.appendChild(newMinutes);
//     newTimer.appendChild(newSeconds);
//     newTimer.appendChild(removeButton);
//     if (activeColor === 0) {
//         newDays.style.border = 'dotted rgb(255,0,0) 5px';
//         newDays.style.backgroundColor = `rgba(255,0,0,0.4)`;
//         newHours.style.border = 'dotted rgb(255,0,0) 5px';
//         newHours.style.backgroundColor = `rgba(255,0,0,0.4)`;
//         newMinutes.style.border = 'dotted rgb(255,0,0) 5px';
//         newMinutes.style.backgroundColor = `rgba(255,0,0,0.4)`;
//         newSeconds.style.border = 'dotted rgb(255,0,0) 5px';
//         newSeconds.style.backgroundColor = `rgba(255,0,0,0.4)`;
//         removeButton.style.backgroundColor = `rgb(255,0,0)`;
//     } else if (activeColor === 1) {
//         newDays.style.border = 'dotted rgb(0,255,0) 5px';
//         newDays.style.backgroundColor = `rgba(0,255,0,0.4)`;
//         newHours.style.border = 'dotted rgb(0,255,0) 5px';
//         newHours.style.backgroundColor = `rgba(0,255,0,0.4)`;
//         newMinutes.style.border = 'dotted rgb(0,255,0) 5px';
//         newMinutes.style.backgroundColor = `rgba(0,255,0,0.4)`;
//         newSeconds.style.border = 'dotted rgb(0,255,0) 5px';
//         newSeconds.style.backgroundColor = `rgba(0,255,0,0.4)`;
//         removeButton.style.backgroundColor = `rgb(0,255,0)`;
//     } else if (activeColor === 2) {
//         newDays.style.border = 'dotted rgb(0,0,255) 5px';
//         newDays.style.backgroundColor = `rgba(0,0,255,0.4)`;
//         newHours.style.border = 'dotted rgb(0,0,255) 5px';
//         newHours.style.backgroundColor = `rgba(0,0,255,0.4)`;
//         newMinutes.style.border = 'dotted rgb(0,0,255) 5px';
//         newMinutes.style.backgroundColor = `rgba(0,0,255,0.4)`;
//         newSeconds.style.border = 'dotted rgb(0,0,255) 5px';
//         newSeconds.style.backgroundColor = `rgba(0,0,255,0.4)`;
//         removeButton.style.backgroundColor = `rgb(0,0,255)`;
//     }


// removeButton.addEventListener('click', newCounter.removeButton);
// removeButton.addEventListener('click', (e) => {
//     for (let o = 0; o < counters.length; o++) {
//         if (counters[o].IDBtn === e.target.id) {
//             counters.splice(o, 1);
//         }
//     }
// })
// })

// setInterval(function () {
//     for (let p = 0; p < counters.length; p++) {
//         counters[p].valueInMiliseconds -= 1000;

//         counters[p].valueInDays = Math.floor(counters[p].valueInMiliseconds / 86400000);
//         counters[p].valueInHours = Math.floor((counters[p].valueInMiliseconds - (counters[p].valueInDays * 86400000)) / 3600000);
//         counters[p].valueInMinutes = Math.floor((counters[p].valueInMiliseconds - (counters[p].valueInDays * 86400000) - (counters[p].valueInHours * 3600000)) / 60000);
//         counters[p].valueInSeconds = Math.floor((counters[p].valueInMiliseconds - (counters[p].valueInDays * 86400000) - (counters[p].valueInHours * 3600000) - (counters[p].valueInMinutes * 60000)) / 1000);

//         let elId = counters[p].elementID;
//         let elIdDays = counters[p].IDDays;
//         let elIdHours = counters[p].IDHours;
//         let elIdMinutes = counters[p].IDMinutes;
//         let elIdSeconds = counters[p].IDSeconds;
//         let elementDays = document.getElementById(elIdDays);
//         let elementHours = document.getElementById(elIdHours);
//         let elementMinutes = document.getElementById(elIdMinutes);
//         let elementSeconds = document.getElementById(elIdSeconds);
//         if (counters[p].valueInMiliseconds < 0) {
//             const zeroElement = document.getElementById(counters[p].elementID);
//             zeroElement.style.transition = '1.2s';
//             zeroElement.style.transform = 'rotate(720deg)';
//             zeroElement.style.border = `solid orange 1px`;
//             elementDays.textContent = 0;
//             elementHours.textContent = 0;
//             elementMinutes.textContent = 0;
//             elementSeconds.textContent = 0;
//         } else {
//             elementDays.textContent = counters[p].valueInDays;
//             elementHours.textContent = counters[p].valueInHours;
//             elementMinutes.textContent = counters[p].valueInMinutes;
//             elementSeconds.textContent = counters[p].valueInSeconds;
//         }

//     }
// }, 1000);




































































// //themes

// redDiv.addEventListener("click", () => {
//     activeColor = 0;
//     const mainRed = 'rgb(255,0,0)';
//     const bgRed = 'rgba(255,0,0,0.4)';
//     config.style.backgroundColor = `${bgRed}`;
//     listWatches.style.backgroundColor = `${bgRed}`;
//     leftRightArrow.style.color = `${mainRed}`;
//     const allParagraphs = document.querySelectorAll('.counter__time');
//     allParagraphs.forEach((e) => {
//         e.style.border = `dotted ${mainRed} 5px`;
//         e.style.backgroundColor = `${bgRed}`;
//     })
//     const allListElementsParagraphs = document.querySelectorAll('.list-watches__element__time');
//     allListElementsParagraphs.forEach((e) => {
//         e.style.border = `dotted ${mainRed} 5px`;
//         e.style.backgroundColor = `${bgRed}`;
//     })
//     const allLanguageBtn = document.querySelectorAll('.config__language');
//     allLanguageBtn.forEach((e) => {
//         e.style.border = `solid ${mainRed} 1px`;
//         e.style.backgroundColor = `${bgRed}`;
//     })
//     const button = document.querySelector('.counter__button');
//     if (button !== null) {
//         button.style.backgroundColor = `${mainRed}`;
//     }
//     const btnRemove = document.querySelectorAll('.list-watches__element__remove-button');
//     if (btnRemove !== null) {
//         btnRemove.forEach((e) => {
//             e.style.backgroundColor = `${mainRed}`;
//         })
//     }
// })
// greenDiv.addEventListener("click", () => {
//     activeColor = 1;
//     const mainGreen = 'rgb(0,255,0)';
//     const bgGreen = 'rgba(0,255,0,0.4)';
//     config.style.backgroundColor = `${bgGreen}`;
//     listWatches.style.backgroundColor = `${bgGreen}`;
//     leftRightArrow.style.color = `${mainGreen}`;
//     const allParagraphs = document.querySelectorAll('.counter__time');
//     allParagraphs.forEach((e) => {
//         e.style.border = `dotted ${mainGreen} 5px`;
//         e.style.backgroundColor = `${bgGreen}`;
//     })
//     const allListElementsParagraphs = document.querySelectorAll('.list-watches__element__time');
//     allListElementsParagraphs.forEach((e) => {
//         e.style.border = `dotted ${mainGreen} 5px`;
//         e.style.backgroundColor = `${bgGreen}`;
//     })
//     const allLanguageBtn = document.querySelectorAll('.config__language');
//     allLanguageBtn.forEach((e) => {
//         e.style.border = `solid ${mainGreen} 1px`;
//         e.style.backgroundColor = `${bgGreen}`;
//     })
//     const button = document.querySelector('.counter__button');
//     if (button !== null) {
//         button.style.backgroundColor = `${mainGreen}`;
//     }
//     const btnRemove = document.querySelectorAll('.list-watches__element__remove-button');
//     if (btnRemove !== null) {
//         btnRemove.forEach((e) => {
//             e.style.backgroundColor = `${mainGreen}`;
//         })
//     }
// })
// blueDiv.addEventListener("click", () => {
//     activeColor = 2;
//     const mainBlue = 'rgb(0,0,255)';
//     const bgBlue = 'rgba(0,0,255,0.4)';
//     config.style.backgroundColor = `${bgBlue}`;
//     listWatches.style.backgroundColor = `${bgBlue}`;
//     leftRightArrow.style.color = `${mainBlue}`;
//     const allParagraphs = document.querySelectorAll('.counter__time');
//     allParagraphs.forEach((e) => {
//         e.style.border = `dotted ${mainBlue} 5px`;
//         e.style.backgroundColor = `${bgBlue}`;
//     })
//     const allListElementsParagraphs = document.querySelectorAll('.list-watches__element__time');
//     allListElementsParagraphs.forEach((e) => {
//         e.style.border = `dotted ${mainBlue} 5px`;
//         e.style.backgroundColor = `${bgBlue}`;
//     })
//     const allLanguageBtn = document.querySelectorAll('.config__language');
//     allLanguageBtn.forEach((e) => {
//         e.style.border = `solid ${mainBlue} 1px`;
//         e.style.backgroundColor = `${bgBlue}`;
//     })
//     const button = document.querySelector('.counter__button');
//     if (button !== null) {
//         button.style.backgroundColor = `${mainBlue}`;
//     }
//     const btnRemove = document.querySelectorAll('.list-watches__element__remove-button');
//     if (btnRemove !== null) {
//         btnRemove.forEach((e) => {
//             e.style.backgroundColor = `${mainBlue}`;
//         })
//     }
// })