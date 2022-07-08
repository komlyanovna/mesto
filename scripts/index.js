//профиль
const profileInfo = document.querySelector('.profile__info');
const profileName = profileInfo.querySelector('.profile__name');
const profileProfession = profileInfo.querySelector('.profile__profession');
//темплейт
const cardsList = document.querySelector('.elements');
//кнопки
const profileEditBtn = document.querySelector('.profile__button-edit');
const popupContentProfileCloseButton = document.querySelector('.popup__close-btn_profile');
const profileButtonAdd = document.querySelector('.profile__button-add');
const popupPlaceCloseBtn = document.querySelector('.popup__close-btn_place');
const popupImageCloseBtn = document.querySelector('.popup__close-btn_element');
const popupButtonCreate = document.querySelector('.popup__button-create');
//формы
const popupPlaceInputPlaceLink = document.querySelector('.popup__form-input_place_link');
const popupPlaceInputPlaceTitle = document.querySelector('.popup__form-input_place_title');
const formProfileEditing = document.querySelector('#form-profile');
const nameInput = formProfileEditing.querySelector('.popup__form-input_user_name');
const jobInput = formProfileEditing.querySelector('.popup__form-input_user_profession');
const popupPlaceCardForm = document.querySelector('.popup__form_place');
//popup
const popupEditProfile = document.querySelector('.popup_content_profile');
const popupContentImage = document.querySelector('.popup_content_image');
const popupContentCard = document.querySelector('.popup_content_card');
const popupContainerCard = document.querySelector('.popup__container_card');
const popupContainerElement = document.querySelector('.popup__container-element');

//отправка формы
function formSubmitHandlerEditProfile(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupEditProfile);
}
formProfileEditing.addEventListener('submit', formSubmitHandlerEditProfile);

//общая функция открытия popup
function openPopup(popup) {
  popup.classList.add('popup_opened')
};

profileEditBtn.addEventListener('click', () => { //
  openPopup(popupEditProfile);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
});

profileButtonAdd.addEventListener('click', () => {
  openPopup(popupContentCard)
});

//общая фнкция закрытия popup

function closePopup(popup) {
  popup.classList.remove('popup_opened');
}
popupContentProfileCloseButton.addEventListener('click', () => {
  closePopup(popupEditProfile)
});
popupPlaceCloseBtn.addEventListener('click', () => {
  closePopup(popupContentCard);
});
popupImageCloseBtn.addEventListener('click', (evt) => {
  closePopup(popupContentImage);
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

//createCard
function createCard(itemLink) {
  const templateCard = document.querySelector('.template_card_image').content
  const templateElement = templateCard.cloneNode(true);
  templateElement.querySelector('.element__image').src = itemLink.link;
  templateElement.querySelector('.element__city').textContent = itemLink.name;
  const deleteButton = templateElement.querySelector('.element__trash');
  const elementCard = templateElement.querySelector('.element');
  deleteButton.addEventListener('click', () => {
    elementCard.remove();
  });

  //открытие попапа с предварительным просмотром картинки
  templateElement.querySelector('.element__image').addEventListener('click', () => {
    openPopup(popupContentImage);
    const cardPopupImg = document.querySelector('.popup__img').src = itemLink.link;
    const descriptionCard = document.querySelector('.popup__title').textContent = itemLink.name;
  });
  setEventListenersCards(templateElement);
  return templateElement;
};

//renderCard
function renderCard(templateElement) {
  cardsList.prepend(createCard(templateElement));
}

//Перебор Массива
initialCards.reverse();
initialCards.forEach(renderCard);

//функция добавления карточки через попап

popupPlaceCardForm.addEventListener('submit', function (evt) {
  evt.preventDefault();
  const link = popupPlaceInputPlaceLink.value;
  const name = popupPlaceInputPlaceTitle.value;

  const itemLink = {};

  itemLink.link = link;
  itemLink.name = name;
  renderCard(itemLink);
  closePopup(popupContentCard);
});

//Функция создания лайков, удаления карточек
function setEventListenersCards(templateElement) {
  const elementLike = templateElement.querySelector('.element__like');
  elementLike.addEventListener('click', (evt) => {
    evt.target.classList.toggle('element__like-active');
  });
};