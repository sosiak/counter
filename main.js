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
    colors[i].addEventListener('click', () => {
        changeTheme(colorsValues[k][0], colorsValues[k][1]);
    });
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
//lang
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