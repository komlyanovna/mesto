const profileBtnActiveEdit = document.querySelector('.profile__button-edit')
const popupContentProfile = document.querySelector('.popup__content_profile')
const popup = document.querySelector('.popup')

// открытие попап редактировать

function popupForm() {
  popupContentProfile.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}
profileBtnActiveEdit.addEventListener('click', popupForm);

const closeBtnPopupActiveAdd = document.querySelector('.popup__close-btn')

//закрытие попап редактировать

function closePopupForm() {
  popupContentProfile.classList.remove('popup_opened');
}
closeBtnPopupActiveAdd.addEventListener('click', closePopupForm)

//отправка формы
let profileInfo = document.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__name');
let profileProfession = profileInfo.querySelector('.profile__profession');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form-input_user_name');
let jobInput = formElement.querySelector('.popup__form-input_user_profession');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopupForm();
}
formElement.addEventListener('submit', formSubmitHandler);

//открытие попап добавить
const profileButtonAdd = document.querySelector('.profile__button-add');
const popupContentCard = document.querySelector('.popup__content_card');

function popupPlaceForm() {
  popupContentCard.classList.add('popup_opened');
}
profileButtonAdd.addEventListener('click', popupPlaceForm);



//закрытие попап добавить
const popupCloseBtnPlace = document.querySelector('.popup__close-btn_place');

function closeBtnForm() {
  popupContentCard.classList.remove('popup_opened');
}
popupCloseBtnPlace.addEventListener('click', closeBtnForm);

//массив карточек 
const initialCards = [{
    name: 'Архыз',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
  },
  {
    name: 'Челябинская область',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
  },
  {
    name: 'Иваново',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
  },
  {
    name: 'Камчатка',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
  },
  {
    name: 'Холмогорский район',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
  },
  {
    name: 'Байкал',
    link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
  }
];


const template = document.querySelector('.template').content;
const elementsCard = document.querySelector('.elements');
const templateElement = template.cloneNode(true);
const popupImg = document.querySelector('.popup__img');
const popupElementTemplate = document.querySelector('.popup__element-template');
const popupContainerElement = document.querySelector('.popup__container-element');
const popupCloseBtnElement = document.querySelector('.popup__close-btn_element');


const renderItems = () => {
  for (let index = 0; index < initialCards.length; index++) {
    const text = initialCards[index];
  }
};

initialCards.forEach(function renderItem(item) {
  const templateElement = template.cloneNode(true);
  const elementImg = templateElement.querySelector('.element__image').src = item.link;
  const popupText = templateElement.querySelector('.element__city').textContent = item.name;
  function popupImgTemplate() {
    popupElementTemplate.classList.add('popup_opened');
    document.querySelector('.popup__img').setAttribute('src', elementImg);
    document.querySelector('.popup__title').textContent = popupText;
  }
  templateElement.querySelector('.element__image').addEventListener('click', popupImgTemplate);

  templateElement.querySelector('.element__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-active');
  });
  elementsCard.append(templateElement);
  const elemTrash = document.querySelector('.element__trash').addEventListener('click', function () {
    elementDiv.remove();
  });

});

// Добавляем новые карточки в начало массива

const popupFormInputPlaceLink = document.querySelector('.popup__form-input_place_link');
const popupFormInputPlaceTitle = document.querySelector('.popup__form-input_place_title');
const popupFormPlace = document.querySelector('.popup__form_place');

function formSubmit(evt) {
  evt.preventDefault();
  const templateElement = template.cloneNode(true);
  templateElement.querySelector('.element__image').src = popupFormInputPlaceLink.value;
  templateElement.querySelector('.element__city').textContent = popupFormInputPlaceTitle.value;
  //лайк
  const elementLike = templateElement.querySelector('.element__like').addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-active')
  });
  
  elementsCard.prepend(templateElement);
  closeBtnForm();
};
popupFormPlace.addEventListener('submit', formSubmit);


//Удаление карточки

const elementDiv = document.querySelector('.element');
const elemTrash = document.querySelector('.element__trash').addEventListener('click', function () {
  const elemDelete = templateElement.querySelector('.element').remove();
});

function popupCloseBtnImage() {
  popupElementTemplate.classList.remove('popup_opened');
}
popupCloseBtnElement.addEventListener('click', popupCloseBtnImage);