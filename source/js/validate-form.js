// TODO добавить валидацию форм

const PHONE_REGEX = /^((\+7|7|8)\s?(\(\d{3}\)|\d{3})\s?\d{3}(\s|-)?\d{2}(\s|-)?\d{2})$/;
const EMAIL_REGEX = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

const form = document.querySelector('.form__wrapper');
const fields = form.querySelectorAll('.form__input');

const validateForm = () => {
  form.addEventListener('submit', (evt) => {
    evt.preventDefault();
    let isValid = true;

    fields.forEach((field) => {
      field.checkValidity();

      // if(registerForm.username.validity.valueMissing){
      //   registerForm.username.setCustomValidity("Необходимо ввести имя пользователя");
      // }

      switch (field.name) {
        case 'phone':
          if (!PHONE_REGEX.test(field.value)) {
            field.setCustomValidity('Некорректнй номер телефона');
            isValid = false;
          }
          break;
        case 'email':
          if (!EMAIL_REGEX.test(field.value)) {
            field.setCustomValidity('Некорректный адрес электронной почты');
            isValid = false;
          }
          break;
      }

    });

    if (isValid) {
      form.submit();
    }


  });
};

export { validateForm };

///////////////////////////////////////////////////

// const usernameErrors = document.getElementById('usernameErrors');
// const usernameField = document.registerForm.username;
// const submit = registerForm.submit;


// const validate = () => {


//   fields.forEach((field) => {

//     if (!PHONE_REGEX.test(field.value)) {
//       field.setCustomValidity('Некорректнй номер телефона');
//     }

//     if (!EMAIL_REGEX.test(field.value)) {
//       field.setCustomValidity('Некорректный адрес электронной почты');
//     }
//   });
// };

// form.addEventListener('submit', validate);

// export { validate };


// function validate(evt){
//   if(usernameField.value === "admin"){
//     usernameField.setCustomValidity('Поле не должно содержать буквы');
//   }
//   // проверяем на валидацию
//   if(!usernameField.validity.valid){
//     usernameErrors.textContent = usernameField.validationMessage;
//     usernameErrors.style.display = 'block';
//   }
//   else {
//     usernameErrors.textContent = '';
//     usernameErrors.style.display = 'none';
//     evt.preventDefault(); // предупреждаем отправку форму и перезагрузку страницы
//   }
// }


////////////////////////////////////////////////////

// Поле "Телефон" является обязательным.
// Поле "Телефон" не должно содержать буквы.

// Поле "Email" является обязательным.
// Пожалуйста, введите корректный email адрес.

// input.validity = {
//   valid: false // Поле валидно
//   customError: false // Установленно специальное сообщение ошибки
//   patternMismatch: false // Значение не удовлетворяет шаблону, установленному в атрибуте pattern
//   rangeOverflow: false // Значение превосходит атрибут max
//   rangeUnderflow: true // Значение меньше атрибута min
//   stepMismatch: true // Значение не соответствует указаному шагу
//   tooLong: false // Значение слишком длинное
//   tooShort: false // Значение слишком короткое
//   typeMismatch: false // Значение не соответствует указаному атрибуту type
//   valueMissing: false // Отсутствует обязательное значение
// };


// function CustomValidation() { }

// CustomValidation.prototype = {
//   // Установим пустой массив сообщений об ошибках
//   invalidities: [],

//   // Метод, проверяющий валидность
//   checkValidity: function(input) {

//     var validity = input.validity;

//     if (validity.patternMismatch) {
//       this.addInvalidity('This is the wrong pattern for this field');
//     }

//     if (validity.rangeOverflow) {
//       var max = getAttributeValue(input, 'max');
//       this.addInvalidity('The maximum value should be ' + max);
//     }

//     if (validity.rangeUnderflow) {
//       var min = getAttributeValue(input, 'min');
//       this.addInvalidity('The minimum value should be ' + min);
//     }

//     if (validity.stepMismatch) {
//       var step = getAttributeValue(input, 'step');
//       this.addInvalidity('This number needs to be a multiple of ' + step);
//     }

//     // И остальные проверки валидности...
//   },

//   // Добавляем сообщение об ошибке в массив ошибок
//   addInvalidity: function(message) {
//     this.invalidities.push(message);
//   },

//   // Получаем общий текст сообщений об ошибках
//   getInvalidities: function() {
//     return this.invalidities.join('. \n');
//   }
// };

// Добавляем обработчик клика на кнопку отправки формы
// submit.addEventListener('click', function(e) {
//   // Пройдёмся по всем полям
//   for (let i = 0; i < inputs.length; i++) {

//     var input = inputs[i];

//     // Проверим валидность поля, используя встроенную в JavaScript функцию checkValidity()
//     if (input.checkValidity() == false) {

//       var inputCustomValidation = new CustomValidation(); // Создадим объект CustomValidation
//       inputCustomValidation.checkValidity(input); // Выявим ошибки
//       var customValidityMessage = inputCustomValidation.getInvalidities(); // Получим все сообщения об ошибках
//       input.setCustomValidity(customValidityMessage); // Установим специальное сообщение об ошибке

//     }
//   }
// });
