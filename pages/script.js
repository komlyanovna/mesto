const profileBtnActiveEdit = document.querySelector('.profile__btn_active_edit')
const popup = document.querySelector('.popup')

profileBtnActiveEdit.addEventListener('click', function (e) {
  popup.classList.add('popup_opened');
})

const closeBtnPopupActiveAdd = document.querySelector('.close-btn_active')
closeBtnPopupActiveAdd.addEventListener('click', function (e) {
  popup.classList.remove('popup_opened');
})

const popupSaveActive = document.querySelector('.popup__button');
let profileInfo = document.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__name');
let profileProfession = profileInfo.querySelector('.profile__profession');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form-name');
let jobInput = formElement.querySelector('.popup__form-profession');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  popup.classList.remove('popup_opened');
}
formElement.addEventListener('submit', formSubmitHandler)

nameInput.value = profileName.textContent;
jobInput.value = profileProfession.textContent;