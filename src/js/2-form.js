const formData = { email: '', message: '' };
const LC_KEY = 'feedback-form-state';

const formEl = document.querySelector('.feedback-form');
const feedbackEmail = document.querySelector('.feedback-form input[name="email"]');
const feedbackMessage = document.querySelector('.feedback-form textarea[name="message"]');

// Заполнение формы данными из локального хранилища при загрузке страницы
document.addEventListener('DOMContentLoaded', () => {
  const savedFormData = JSON.parse(localStorage.getItem(LC_KEY));
  if (savedFormData) {
    feedbackEmail.value = savedFormData.email || '';
    feedbackMessage.value = savedFormData.message || '';
    formData.email = savedFormData.email || '';
    formData.message = savedFormData.message || '';
  }
});

// Обработчик ввода данных в поля формы
formEl.addEventListener('input', (evt) => {
  const { name, value } = evt.target;
  formData[name] = value;
  localStorage.setItem(LC_KEY, JSON.stringify(formData));
});

// Обработчик отправки формы
formEl.addEventListener('submit', (evt) => {
  evt.preventDefault();

  const { email, message } = formData;
  if (email === '' || message === '') {
    alert('Fill please all fields');
    return;
  }

  console.log('Form Data:', formData);

  localStorage.removeItem(LC_KEY);
  formEl.reset();
  formData.email = '';
  formData.message = '';
});
