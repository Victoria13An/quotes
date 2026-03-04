import './src/style.css';

const quotes = [
    { text: 'Никогда не отказывайся от своего пути, даже если никто не верит в тебя. Стань тем, кем хочешь стать.', author: 'Узумаки Наруто' },
    { text: 'Люди живут, чтобы узнать, что значит жить. Они живут, чтобы защищать тех, кто им дорог.', author: 'Джирайя' },
    { text: 'Если ты не нравишься себе самому, ты не сможешь полюбить и других.', author: 'Учиха Саске' },
    { text: 'Тот, кто нарушает правила, — мусор. Но тот, кто бросает друзей, — хуже мусора.', author: 'Хатаке Какаши' },
    { text: 'Слабые не могут защитить никого. Сильные защищают то, что им дорого.', author: 'Хьюга Хината' },
    { text: 'В этом мире побеждают только те, кто всегда продолжает двигаться вперёд.', author: 'Рок Ли' },
    { text: 'Когда человек умирает, он оставляет после себя только то, что значил для других.', author: 'Четвёртый Хокаге' },
    { text: 'Боль делает нас сильнее. Она заставляет нас расти.', author: 'Орочимару' },
    { text: 'Не рисуй свою жизнь, не написав сценария. Ты должен верить в себя.', author: 'Нагато (Пейн)' },
    { text: 'Я хочу защитить их, даже ценой своей жизни. Потому что они — моя семья.', author: 'Узумаки Наруто' },
    { text: 'Мечты сбываются не у тех, кто просто мечтает, а у тех, кто работает ради них.', author: 'Майто Гай' },
    { text: 'Связи между людьми — это то, что делает нас сильнее.', author: 'Узумаки Наруто' }
];

let lastQuoteIndex = -1;

function getRandomQuote() {
    let randomIndex;
    do {
        randomIndex = Math.floor(Math.random() * quotes.length);
    } while (randomIndex === lastQuoteIndex);
    lastQuoteIndex = randomIndex;
    return quotes[randomIndex];
}

function render() {
    const app = document.getElementById('app');
    const quote = getRandomQuote();
    
    app.innerHTML = `
        <div class="app">
            <div class="quote-container">
                <div class="quote-text">${quote.text}</div>
                <div class="quote-author">— ${quote.author}</div>
            </div>
            <button id="newQuoteBtn" class="btn-new-quote">Новая цитата</button>
        </div>
    `;
    
    // Обработчик кнопки
    document.getElementById('newQuoteBtn').addEventListener('click', render);
}

// Инициализация
render();
