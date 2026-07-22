let name = prompt("Введите имя");
let age = +prompt("Введите возраст");
let subscription = prompt("Выберите подписку");
let lastLogin = +prompt("Время последнего входа");

function validateAge(age) {
  if (typeof age === "number" && !isNaN(age) && age > 0) {
    if (age >= 18) {
      console.log("Вход разрешен");
    } else {
      console.log("Вы несовершеннолетний");
    }
  } else {
    console.log("Недопустимый возраст");
  }
}

const validateName = (name) => typeof name === "string" && name.trim() !== "";

const validateSubscription = function (subscription) {
  switch (subscription) {
    case "free":
      console.log("Доступ только к бесплатному контенту");
      break;
    case "basic":
      console.log("Ограниченный доступ");
      break;
    case "premium":
      console.log("Полный доступ");
      break;
    default:
      console.log("Недопустимый тип подписки");
  }
};

function getTimeOfDay(lastLogin) {
  if (lastLogin >= 5 && lastLogin <= 11) return "утро";
  if (lastLogin >= 12 && lastLogin <= 17) return "день";
  if (lastLogin >= 18 && lastLogin <= 21) return "вечер";

  return (lastLogin >= 22 && lastLogin <= 23) ||
    (lastLogin >= 0 && lastLogin <= 4)
    ? "ночь"
    : "некорректное время";
}

function getAccessLevel(subscription) {
  if (subscription === "premium") {
    return "полный доступ";
  }
  if (subscription === "basic") {
    return "Ограниченный доступ";
  }
  if (subscription === "free") {
    return "Доступ только к бесплатному контенту доступ";
  }
  if (subscription === "basic") {
    return "Ограниченный доступ";
  }
  if (
    subscription !== "free" &&
    subscription !== "basic" &&
    subscription !== "premium"
  ) {
    return "Неизвестный тип подписки";
  }
}

let timeOfDay = getTimeOfDay(lastLogin);
let accessLevel = getAccessLevel(subscription);

function displayUserInfo(name, age, timeOfDay, accessLevel) {
  console.log(
    `Привет ${name}! Вам ${age} лет. Сейчас ${timeOfDay}. Уровень доступа: ${accessLevel}.`,
  );
}

displayUserInfo(name, age, timeOfDay, accessLevel);