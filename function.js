//languages
const lang = [
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

const content = (place, nameClass) => {
    const videoContainer = document.createElement('section');
    videoContainer.className = nameClass;
    place.appendChild(videoContainer);
}
const createOverlay = (place, nameClass) => {
    const overlay = document.createElement('div');
    overlay.className = nameClass;
    const target = document.querySelector(`.${place}`);
    target.appendChild(overlay);
}
const createVideoBackground = (target, nameClass, posterFile, videoFile) => {
    const videoBackground = document.createElement('video');
    videoBackground.className = nameClass
    videoBackground.setAttribute('poster', posterFile);
    videoBackground.setAttribute('muted', 'true');
    videoBackground.setAttribute('autoplay', 'true');
    videoBackground.setAttribute('loop', 'true');
    const srcMP4 = document.createElement('source');
    srcMP4.setAttribute('src', videoFile);
    srcMP4.setAttribute('type', 'video/mp4');
    videoBackground.appendChild(srcMP4);
    const place = document.querySelector(`.${target}`);
    place.appendChild(videoBackground);
}
const container = (target, nameClass) => {
    const videoContContent = document.createElement('div');
    videoContContent.className = 'video-container__content';
    const place = document.querySelector(`.${target}`);
    place.appendChild(videoContContent);
}
const createDiv = (where, nameClass) => {
    const div = document.createElement('div');
    div.className = nameClass;
    const target = document.querySelector(`.${where}`);
    target.appendChild(div);
}
const createHeader = (where, nameClass, text) => {
    const headerInput = document.createElement('h1');
    headerInput.className = nameClass;
    headerInput.textContent = text;
    const target = document.querySelector(`.${where}`);
    target.appendChild(headerInput);
}
const createDateInputWithErrorDiv = (where, nameClass, id, value, nameErrorClass) => {
    const input = document.createElement('input');
    input.setAttribute('id', id);
    input.setAttribute('type', 'datetime-local');
    input.setAttribute('value', value);
    input.setAttribute('min', '2000-01-01T00:00');
    input.setAttribute('max', '2030-12-31T23:59');
    input.className = nameClass;
    const errorParagraph = document.createElement('p');
    errorParagraph.className = nameErrorClass;
    const target = document.querySelector(`.${where}`);
    target.appendChild(input);
    target.appendChild(errorParagraph);
}
const createButton = (where, nameClass, text) => {
    const addBtn = document.createElement('button');
    addBtn.className = nameClass;
    addBtn.textContent = text;
    const target = document.querySelector(`.${where}`);
    target.appendChild(addBtn);
}
const createDivWithText = (where, nameClass, text, id) => {
    const div = document.createElement('div');
    div.className = nameClass;
    div.id = id;
    const target = document.querySelector(`.${where}`);
    target.appendChild(div);
    const element = document.querySelector(`#${id}`);
    element.textContent = text;
}
const createParagraphsCountTime = (where) => {
    const counterContainer = document.querySelector(`.${where}`);
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

// defaultValue
const defaultInputValue = (from) => {
    const inputDate = document.getElementById(`${from}`);
    let inputDateValue = inputDate.value;
    return inputValueInString = inputDateValue.toLocaleString();
}
const convertDefaultInputValue = (value) => {
    if (is_safari) {
        return dateString = value.substr(0, 10) + "T" + value.substr(11, 5) + ":00.000";
    } else {
        return dateString = value.substr(0, 10) + " " + value.substr(11, 5) + ":00";
    }
}


const convertDateTime = () => {
    if (is_safari) {
        dateString = inputValueInString.substr(0, 10) + "T" + inputValueInString.substr(11, 5) + ":00.000";
    } else {
        dateString = inputValueInString.substr(0, 10) + " " + inputValueInString.substr(11, 5) + ":00";
    }
    return dateString;

}
const currentInputValue = (input, errDiv) => {
    const checkInput = document.getElementById(`${input}`);
    checkInput.addEventListener("change", () => {
        inputDateValue = checkInput.value;
        inputValueInString = inputDateValue.toLocaleString();
        validateInputDate(inputDateValue, input, lang[6][j], errDiv);
        convertDateTime();
    });
}

const validateInputDate = (from, checkedInput, errorText, errorDiv) => {
    let dateToValidate = new Date(from);
    const target = document.getElementById(`${checkedInput}`);
    const errDiv = document.querySelector(`.${errorDiv}`);
    if (isNaN(dateToValidate.getTime())) {
        errDiv.textContent = errorText;
        target.classList.add('destination-time__input--error');
    } else {
        errDiv.textContent = ``;
        target.classList.remove('destination-time__input--error');
    }
}

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