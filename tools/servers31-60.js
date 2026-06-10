// tools/servers31-60.js
// Генератор списка серверов 31–60

function buildMessage() {
    let message = '<#fff><u><size=55>';
    
    // Строка 1: 31-40
    for (let i = 31; i <= 40; i++) {
        message += `<link=500&500&${i}>${i}</link>`;
        if (i < 40) message += ' ';
    }
    message += '<br>';
    
    // Строка 2: 41-50
    for (let i = 41; i <= 50; i++) {
        message += `<link=500&500&${i}>${i}</link>`;
        if (i < 50) message += ' ';
    }
    message += '<br>';
    
    // Строка 3: 51-60
    for (let i = 51; i <= 60; i++) {
        message += `<link=500&500&${i}>${i}</link>`;
        if (i < 60) message += ' ';
    }
    
    message += '</size></u>';
    return message;
}

export async function run(ui) {
    const resultString = buildMessage();
    const escaped = resultString.replace(/</g, '&lt;').replace(/>/g, '&gt;');
    ui.displayResult(escaped);
    await ui.copyToClipboard(resultString);
}