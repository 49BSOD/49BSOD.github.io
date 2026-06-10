// tools/servers1-30.js
// Генератор списка серверов 01–30

function buildMessage() {
    let message = '<#fff><u><size=55>';
    
    // Строка 1: 01-10
    for (let i = 1; i <= 10; i++) {
        const num = i.toString().padStart(2, '0');
        message += `<link=500&500&${i}>${num}</link>`;
        if (i < 10) message += ' ';
    }
    message += '<br>';
    
    // Строка 2: 11-20
    for (let i = 11; i <= 20; i++) {
        message += `<link=500&500&${i}>${i}</link>`;
        if (i < 20) message += ' ';
    }
    message += '<br>';
    
    // Строка 3: 21-30
    for (let i = 21; i <= 30; i++) {
        message += `<link=500&500&${i}>${i}</link>`;
        if (i < 30) message += ' ';
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