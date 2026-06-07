// tools/specops.js
// Генератор спецопераций

// Массивы чисел (циклически: 4 июня → первый, 5 июня → второй, 6 июня → третий)
const arrays = [
    [5, 10, 11, 16, 17, 22, 24, 28, 30, 31, 32, 40, 44, 46, 47, 48],
    [4, 9, 14, 15, 20, 21, 23, 27, 29, 37, 38, 45, 51],
    [1, 2, 3, 6, 7, 8, 12, 13, 18, 19, 25, 26, 33, 34, 35, 39, 41, 42, 43, 50]
];

//1-0  2-36,49  3-00

// Новая точка отсчёта: 4 июня 2026 года (месяц 5 = июнь)
const START_DATE = new Date(2026, 5, 4);

// Определяет индекс массива (0,1,2) по текущей дате
function getArrayIndex() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(START_DATE);
    start.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    let idx = diffDays % 3;
    if (idx < 0) idx += 3; // Корректировка для отрицательных дней (если дата раньше 4 июня 2026)
    return idx;
}

// Перемешивает массив и возвращает первые 6 элементов
function getRandomSix(arr) {
    const shuffled = [...arr];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled.slice(0, 6);
}

// Формирует строку с тегами
function buildString(numbers) {
    if (!numbers || numbers.length !== 6) return 'Ошибка: не удалось получить 6 чисел';
    return `<#ffc800>Спецоперации ⭐  <size=70><link=500&500&${numbers[0]}><u>${numbers[0]}</u></link>      <link=500&500&${numbers[1]}><u>${numbers[1]}</u></link>      <link=500&500&${numbers[2]}><u>${numbers[2]}</u></link>      <link=500&500&${numbers[3]}><u>${numbers[3]}</u></link>      <link=500&500&${numbers[4]}><u>${numbers[4]}</u></link>      <link=500&500&${numbers[5]}><u>${numbers[5]}</u></link>`;
}

// Основная функция, которую вызовет index.html
export async function run(ui) {
    const idx = getArrayIndex();
    const numbers = getRandomSix(arrays[idx]);
    const resultString = buildString(numbers);
    const escaped = resultString.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    ui.displayResult(escaped);
    await ui.copyToClipboard(resultString);
}