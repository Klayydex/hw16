let score = 0;

let answer1 = prompt("Сколько будте 2+2");
if (answer1 == 4) {
    score += 10;
}

let answer2 = confirm("Солнце встает на востоке?");
if (answer2) {
    score += 10;
}

let answer3 = prompt("Сколько будет 5 / 0?");
if (answer3 == "Infinity") {
    score += 10;
}

let answer4 = prompt("Какого цвета небо?");
if (
    answer4.toLowerCase() === "синего" ||
    answer4.toLowerCase() === "голубуго"
) {
    score += 10;
}

let answer5 = prompt(
    "Какой правильный ответ на главный вопрос жизни, вселенной и всего такого"
);
if (answer5 == 42) {
    score += 10;
}

alert("Ваш результат: " + score + " баллов");
