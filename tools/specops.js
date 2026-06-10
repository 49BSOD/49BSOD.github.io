// tools/specops.js
const arrays = [
    [5, 10, 11, 16, 17, 22, 28, 30, 32, 40, 44, 46, 47, 48],
    [4, 9, 14, 15, 20, 21, 23, 27, 29, 37, 38, 45, 51],
    [1, 2, 3, 6, 7, 8, 12, 13, 18, 19, 25, 26, 33, 34, 35, 39, 41, 42, 43, 50, 52, 53]
];

const START_DATE = new Date(2026, 5, 4);

function getArrayIndex() {
    const today = new Date();
    today.setHours(0, 0, 0, 0);
    const start = new Date(START_DATE);
    start.setHours(0, 0, 0, 0);
    const diffDays = Math.floor((today - start) / (1000 * 60 * 60 * 24));
    let idx = diffDays % 3;
    if (idx < 0) idx += 3;
    return idx;
}

function formatNumber(num) {
    return num.toString().padStart(2, '0');
}

function makeLink(num) {
    const formatted = formatNumber(num);
    return `<link=500&500&${formatted}><u>${formatted}</u></link>`;
}

function getSpecopsNumbers(arr) {
    const maxLen = Math.floor(arr.length / 5) * 5;
    return arr.slice(0, maxLen);
}

function buildMessage(numbers) {
    if (!numbers.length) return 'Ошибка: нет спецопераций для вывода';

    let message = '<#ffа>Ищем и делимся спецоперациями<br>';
    message += '<#ffа>только <#0f0>4-х, 5-х уровней <#ffа>и только с<br>';
    message += '<#0f0>3-мя ящиками<#ffа>, с <#f00>2-мя не трогаем<#ffа>.<br>';
    message += '<#FFC800><SIZE=50>';

    for (let i = 0; i < numbers.length; i += 5) {
        const chunk = numbers.slice(i, i + 5);
        const links = chunk.map(num => makeLink(num)).join('&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;'); // 5 неразрывных пробелов
        message += links;
        if (i + 5 < numbers.length) message += '<br>';
    }

    message += `<br><size=35><#ffа>Пример спецопераций на картинке.`;
    return message;
}

export async function run(ui) {
    const idx = getArrayIndex();
    const fullArray = arrays[idx];
    const numbers = getSpecopsNumbers(fullArray);
    const resultString = buildMessage(numbers);
    const escaped = resultString.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    ui.displayResult(escaped);
    await ui.copyToClipboard(resultString);
}