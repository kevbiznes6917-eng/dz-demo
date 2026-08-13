// **Описание**: Программа-переводчик приветствий чат-бота.
// В зависимости от языкового кода пользователя выводится приветствие
// на соответствующем языке с помощью конструкции switch.
//
// **Входные данные**: Переменная userLanguage типа string со значением
// одного из языковых кодов: 'EN', 'RU', 'DE', 'FR', 'ES'.
//
// **Выходные данные**: Приветствие на языке пользователя, выведенное в консоль:
// - 'EN' → 'Hello!'
// - 'RU' → 'Привет!'
// - 'DE' → 'Hallo!'
// - 'FR' → 'Bonjour!'
// - 'ES' → '¡Hola!'
// - любое другое значение → приветствие по умолчанию на английском

// В реальном приложении язык пользователя можно было бы получить
// из настроек браузера, например: navigator.language
const userLanguage = 'RU';

let greeting;

switch (userLanguage) {
    case 'EN':
        greeting = 'Hello!';
        break;
    case 'RU':
        greeting = 'Привет!';
        break;
    case 'DE':
        greeting = 'Hallo!';
        break;
    case 'FR':
        greeting = 'Bonjour!';
        break;
    case 'ES':
        greeting = '¡Hola!';
        break;
    default:
        greeting = 'Hello! (default language)';
}
console.log(greeting);