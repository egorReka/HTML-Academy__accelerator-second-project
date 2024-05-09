const ErrorMessages = {
  valueMissing: 'Заполните поле',
  phone: 'Пожалуйста, введите корректный номер телефона.',
  email: 'Пожалуйста, введите корректный адрес электронной почты',
};

const Regex = {
  phone: /^((\+7|7|8)\s?(\(\d{3}\)|\d{3})\s?\d{3}(\s|-)?\d{2}(\s|-)?\d{2})$/,
  email: /[a-zA-Z0-9а-яА-Я]+@[a-zA-Z0-9а-яА-Я]+\.[a-zA-Zа-яА-Я]{2}$/,
};

const form = document.querySelector('.form__wrapper');
const inputs = document.querySelectorAll('.form__input');

const validateCastomRegex = (typeInput, input) => {
  const inputValue = input.value;

  if (!Regex[typeInput].test(inputValue)) {
    input.setCustomValidity(ErrorMessages[typeInput]);

  } else {
    input.setCustomValidity('');
  }
};

function validateInput(input) {
  input.setCustomValidity('');

  if (input.validity.valueMissing) {
    input.setCustomValidity(ErrorMessages.valueMissing);

    return;
  } else {
    input.setCustomValidity('');
  }

  switch (input.name) {
    case 'phone':
      validateCastomRegex('phone', input);

      break;
    case 'email':
      validateCastomRegex('email', input);

      break;
  }
}

const isValidInput = (evt) => {
  evt.preventDefault();
  const targetInput = evt.target;

  validateInput(targetInput);
};

const isValidForm = (evt) => {
  evt.preventDefault();
  let valid = false;

  inputs.forEach((input) => {
    if (input.validity.valid) {
      valid = true;
    } else {
      valid = false;
    }
  });

  if (valid) {
    form.submit();

    inputs.forEach((input) => {
      input.value = '';
    });
  }
};

const initValidationForm = () => {
  inputs.forEach((input) => {
    validateInput(input);
  });

  form.addEventListener('input', isValidInput);
  form.addEventListener('submit', isValidForm);
};

export { initValidationForm };
