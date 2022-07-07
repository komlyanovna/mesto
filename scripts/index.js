//профиль
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__name');
const profileProfession = profileInfo.querySelector('.profile__profession');
//темплейт
const templateCard = document.querySelector('.template_card_image').content;
const cardsList = document.querySelector('.elements');
const elementTrash = templateCard.querySelector('.element__trash');
//кнопки
const profileEditBtn = document.querySelector('.profile__button-edit');
const popupContentProfileCloseButton = document.querySelector('.popup__close-btn_profile');
const profileButtonAdd = document.querySelector('.profile__button-add');
const popupCloseBtnPlace = document.querySelector('.popup__close-btn_place');
const popupImageCloseBtn = document.querySelector('.popup__close-btn_element');
const popupButtonCreate = document.querySelector('.popup__button-create');
//формы
const popupPlaceInputPlaceLink = document.querySelector('.popup__form-input_place_link');
const popupPlaceInputPlaceTitle = document.querySelector('.popup__form-input_place_title');
const popupPlaceForm = document.querySelector('.popup__form_place');
const formElement = document.querySelector('.popup__form');
const nameInput = formElement.querySelector('.popup__form-input_user_name');
const jobInput = formElement.querySelector('.popup__form-input_user_profession');
const popupPlaceCardForm = document.querySelector('.popup__form_place');
//popup
const popupEditProfile = document.querySelector('.popup_content_profile');
const popup = document.getElementById('#popup');
const popupContentImage = document.querySelector('.popup_content_image');
const popupContentCard = document.querySelector('.popup_content_card');
const popupContainerCard = document.querySelector('.popup__container_card');
const popupContainerElement = document.querySelector('.popup__container-element');

const itemLink = {};

// отправка формы
function popupOpenForm() {
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}
profileEditBtn.addEventListener('click', popupOpenForm);

function formSubmitHandlerEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  popupClose(popupEditProfile);
}
formElement.addEventListener('submit', formSubmitHandlerEditProfile);


//общая функция открытия popup
function popupOpen(popup) {
  popup.classList.add('popup_opened')
};

profileEditBtn.addEventListener('click', () => {
  popupOpen(popupEditProfile);
});

profileButtonAdd.addEventListener('click', () => {
  popupOpen(popupContentCard)
});

//общая фнкция закрытия popup

function popupClose(popup) {
  popup.classList.remove('popup_opened');
}
popupContentProfileCloseButton.addEventListener('click', () => {
  popupClose(popupEditProfile)
});
popupCloseBtnPlace.addEventListener('click', () => {
  popupClose(popupContentCard);
});
popupImageCloseBtn.addEventListener('click', (evt) => {
  popupClose(popupContentImage);
});

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

//Перебор Массива
initialCards.reverse();
initialCards.forEach(addCard);

//Функция создания карточки

function addCard(itemLink) {
  const templateCard = document.querySelector('.template_card_image').content
  const templateElement = templateCard.cloneNode(true);
  templateElement.querySelector('.element__image').src = itemLink.link;
  templateElement.querySelector('.element__city').textContent = itemLink.name;

  //открытие попапа с предварительным просмотром картинки
  templateElement.querySelector('.element__image').addEventListener('click', () => {
    popupOpen(popupContentImage);
    const cardPopupImg = document.querySelector('.popup__img').src = itemLink.link;
    const descriptionCard = document.querySelector('.popup__title').textContent = itemLink.name;
  });
  setEventListeners(templateElement);
  createCard(templateElement);
};

//Функция добавления карточек в разметку
function createCard(templateElement) {
  cardsList.prepend(templateElement);
};

//функция добавления карточки через попап

popupPlaceCardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const link = document.querySelector('.popup__form-input_place_link').value;
  const name = document.querySelector('.popup__form-input_place_title').value;

  itemLink.link = link;
  itemLink.name = name;

  addCard(itemLink);
  popupClose(popupContentCard);;
});

//Функция создания лайков, удаления карточек
function setEventListeners(templateElement) {
  const elementLike = templateElement.querySelector('.element__like');
  elementLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-active');
  });

  const deleteButton = templateElement.querySelector('.element__trash');

  function deleteCard() {
    const elementCard = document.querySelector('.element')
    elementCard.remove();
  }
  deleteButton.addEventListener('click', deleteCard);
};