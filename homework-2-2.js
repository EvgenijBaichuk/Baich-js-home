var surname = prompt('Ваша фамилия?','' );
var name = prompt('Ваше имя?','' );
var fathersName = prompt('Ваше отчество?','' );
var age = prompt('Ваш возраст?', '');
var days = age * 365;
var postage = (+age + 5);
var sex = confirm('Ваш пол мужской?', 'женский');
if (sex === true) {gender = 'мужской'} else {
  gender = 'женский'
}
function pension (age) {val} {
  if (age > 60) {val = 'Да'} else {
    val = 'Нет'}
};
alert ('Ваше ФИО: ' + surname + ' ' + name + ' ' + fathersName +
'\nВаш возраст в годах: ' + age + '\nВаш возраст в днях: ' + days +
'\nЧерез 5 лет вам будет: ' + postage +
'\nВаш пол: ' + sex + '\nВы на пенсии: ' + val));
