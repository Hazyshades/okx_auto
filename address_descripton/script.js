//добавялем в модальное окно 19 пустых полей для кошей
let counter = 0;
const interval = setInterval(() => {
  const button = document.querySelector('.add-address-form-btn');
  if (button && counter < 19) {
    button.click();
    counter++;
    console.log('Кнопка нажата:', counter);
  } else {
    clearInterval(interval);
    console.log('Завершено');
  }
}, 100);

//вводим адреса 

const wallets = [
"0x0001",
];
const placeholderStr = "You can also use a .crypto domain";
const usdtInputs = Array.from(document.querySelectorAll(`input[placeholder="${placeholderStr}"]`));

if (usdtInputs.length === wallets.length) {
  usdtInputs.forEach((input, index) => {
    setTimeout(() => {
      input.setAttribute('value', wallets[index]);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }, index * 150); // Задержка 1.5 секунды (1500 миллисекунд)
  });
} else {
  console.error('Количество полей и кошельков не совпадает');
}


//заполняем описание 
const wallets = [
"my wallet",
"cat's wallet"
]; 

const placeholderStr = "e.g. my wallet";
const usdtInputs = Array.from(document.querySelectorAll(`input[placeholder="${placeholderStr}"]`));

if (usdtInputs.length === wallets.length) {
  usdtInputs.forEach((input, index) => {
    setTimeout(() => {
      input.setAttribute('value', wallets[index]);
      input.dispatchEvent(new Event('input', { bubbles: true }));
    }, index * 250); // Задержка 1 секундa (1000 миллисекунд)
  });
} else {
  console.error('Количество полей и кошельков не совпадает');
}
