// let age = prompt('Сколько вам лет?', '');
// const accessAllowed = age <= 18
//   ? "Ты прав!"
//   : age >= 60
//     ? "Ты стар слишком, бро"
//     : "Ты подходишь!"

// alert(accessAllowed);

// let age = prompt('Возраст?', 18);

// let message = (age < 3)
//   ? 'Здравствуй, малыш!' 
//   : (age < 18) 
//     ? 'Привет!' 
//       : (age < 100) 
//         ? 'Здравствуйте!' 
//         : 'Какой необычный возраст!';

// alert( message );

// let login = prompt("Кто вы?", "Сотрудник");

// let message = (login == "Сотрудник")
//   ? "Привет"
//   : (login == "Директор")
//     ? "Здравствуйте"
//     : (login == "")
//       ? "Нет логина"
//       : ""

// alert(message)

// const name = "Покер"
// const age = 20
// const hasMuchMoney = false // true
// const hasGoodJob = false // true
// const hasMotivation = true
// const hasFreeTime = true

// if (name !== "Покер") {
//   console.log("Вы не Покер, позовите Покера")
// } else if (age < 16) {
//   console.log("Ещё рано думать о взрослой жизни")
// } else if (
//   !hasMuchMoney ||
//   !hasGoodJob || 
//   hasMotivation && hasFreeTime // true
// ) {
//   console.log("Покеру нужно учить фронт")
// } else {
//   console.log(`
//     Ты либо безумно богат, что можешь не работать до конца жизни,
//     либо у тебя и так хорошая работа,
//     либо тебе просто это не нужно :(
//   `)
// }

// let johnHasCar = null;

// johnHasCar ||= "У Джона нет машины!"; // то же самое, что false || (johnHasCar = "...")

// alert( johnHasCar ); // "У Джона нет машины!"

// let userName = prompt("Кто там?", "")

// if (userName === "Админ") {
//   let pass = prompt("Пароль?", "")
  
  
//   if (pass === "Я главный") {
//     alert("Здравствуйте!")
//   } else if (pass === null || pass === "") {
//     alert("Отменено")
//   } else {
//     alert("Неверный пароль")
//   } 
  
// } else if (userName === null || userName === "") {
//   alert("Отменено")
// } else {
//   alert("Я вас не знаю")
// }

let value = +prompt("Какую конфетку выберешь? 1 или 2", [2])

if (value === 2 || value === 1) {
  let choose = confirm("Ты точно уверен в этом?")

  if (choose === false) {
    alert("Ты ещё никогда так не ошибался!")
  } else if (choose === true) {
    alert("Какой хороший день!, пойти на C...")
    let i = 0

    while (i <= 100000) {
      console.log(i)
    }
  }
}