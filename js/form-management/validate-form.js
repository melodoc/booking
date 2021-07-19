import {
  MAX_PRICE_VALUE,
  MIN_TITLE_LENGTH,
  MAX_TITLE_LENGTH,
  guestNumberRoomMap,
  validationText,
  housesType
} from './prepared-data.js';

const adForm = document.querySelector('.ad-form');
const title = adForm.querySelector('#title');
const price = adForm.querySelector('#price');
const roomNumber = adForm.querySelector('#room_number');
const capacity = adForm.querySelector('#capacity');
const roomType = adForm.querySelector('#type');
const timeIn = adForm.querySelector('#timein');
const timeOut = adForm.querySelector('#timeout');


const validateTitle = () => {
  const valueLength = title.value.length;
  if (valueLength < MIN_TITLE_LENGTH) {
    title.setCustomValidity(`${validationText.minCharacters}${MIN_TITLE_LENGTH - valueLength} `);
  } else if (valueLength > MAX_TITLE_LENGTH) {
    title.setCustomValidity(`${validationText.maxCharacters}${valueLength - MAX_TITLE_LENGTH}`);
  } else {
    title.setCustomValidity('');
  }
  title.reportValidity();
};

const validatePrice = () => {
  if (price.value > MAX_PRICE_VALUE) {
    price.setCustomValidity(`${validationText.maxPrice}${MAX_PRICE_VALUE}`);
  } else {
    price.setCustomValidity('');
  }
  price.reportValidity();
};

const validateRoomsInput = () => {
  capacity.setCustomValidity(guestNumberRoomMap[roomNumber.value].includes(capacity.value) ? '' : `${validationText.roomsCount}`);
  capacity.reportValidity();
};

const processingOfRoomsInputValue = (targetElement) => {
  for (let index = 0; index < housesType.length; index++) {
    if (housesType[index].type === targetElement.value) {
      price.min = housesType[index].price;
      price.placeholder = housesType[index].price;
    }
  }
};

const getSynchronizationTime = (targetElement) => {
  if (timeIn.value !== targetElement.value) {
    timeIn.value = targetElement.value;
  } else {
    timeOut.value = targetElement.value;
  }
};

const onChangeHandlerForm = (evt) => {
  switch (evt.target) {
    case title:
      validateTitle();
      break;
    case price:
      validatePrice();
      break;
    case roomNumber:
    case capacity:
      validateRoomsInput();
      break;
    case roomType:
      processingOfRoomsInputValue(roomType);
      break;
    case timeIn:
      getSynchronizationTime(timeIn);
      break;
    case timeOut:
      getSynchronizationTime(timeOut);
      break;
  }
};

adForm.addEventListener('input', onChangeHandlerForm);
