const profileBtnActiveEdit = document.querySelector('.profile__button-edit')
const popup = document.querySelector('.popup')

function popupForm(e) {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}
profileBtnActiveEdit.addEventListener('click', popupForm);

const closeBtnPopupActiveAdd = document.querySelector('.popup__close-btn')

function closePopupForm() {
  popup.classList.remove('popup_opened');
}
closeBtnPopupActiveAdd.addEventListener('click', closePopupForm)

let profileInfo = document.querySelector('.profile__info');
let profileName = profileInfo.querySelector('.profile__name');
let profileProfession = profileInfo.querySelector('.profile__profession');
let formElement = document.querySelector('.popup__form');
let nameInput = formElement.querySelector('.popup__form_text_name');
let jobInput = formElement.querySelector('.popup__form_text_profession');

function formSubmitHandler(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopupForm();
}
formElement.addEventListener('submit', formSubmitHandler)


//let elementLike = document.querySelector('.element__like');
//console.log(elementLike);

//function backgroundLike(e) {
//  elementLike.classList.toggle('element__like_active');
//}
//elementLike.addEventListener('click', backgroundLike);