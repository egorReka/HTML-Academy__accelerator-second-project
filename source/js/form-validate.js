const ErrorMessages = {
  valueMissing: 'Заполните поле',
  typeMismatch: 'Некорректное значение',
};

const Regex = {
  phone: /^((\+7|7|8)\s?(\(\d{3}\)|\d{3})\s?\d{3}(\s|-)?\d{2}(\s|-)?\d{2})$/,
  email: /[a-zA-Z0-9а-яА-Я]+@[a-zA-Z0-9а-яА-Я]+\.[a-zA-Zа-яА-Я]{2}$/,
};

const form = document.querySelector('.form__wrapper');

const validateCastomRegex = (typeInput, input) => {
  const inputValue = input.value;

  if (!Regex[typeInput].test(inputValue)) {
    input.setCustomValidity(ErrorMessages.typeMismatch);

  } else {
    input.setCustomValidity('');
  }
};

function validateInput(input) {
  input.setCustomValidity('');

  // Общая валидация браузерного API
  if (input.validity.valueMissing) {
    input.setCustomValidity(ErrorMessages.valueMissing);

    return;
  } else {
    input.setCustomValidity('');
  }

  // Кастомная валидация по type input
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
  const inputs = document.querySelectorAll('.form__input');
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
  }
};


const initValidationForm = () => {
  form.addEventListener('input', isValidInput);
  form.addEventListener('submit', isValidForm);
};

export { initValidationForm };
