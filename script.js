// Script de Acessibilidade

// 1. Melhorar o foco visível para navegação por teclado
document.addEventListener('focus', function (event) {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        event.target.style.outline = '3px solid #ffbf47'; // Cor do foco
        event.target.style.outlineOffset = '2px';
    }
}, true);

document.addEventListener('blur', function (event) {
    if (event.target.tagName === 'A' || event.target.tagName === 'BUTTON' || event.target.tagName === 'INPUT' || event.target.tagName === 'TEXTAREA') {
        event.target.style.outline = 'none';
    }
}, true);

// 2. Alternância de alto contraste
function toggleHighContrast() {
    const body = document.body;
    body.classList.toggle('high-contrast');

    // Salvar preferência do usuário no localStorage
    if (body.classList.contains('high-contrast')) {
        localStorage.setItem('highContrast', 'enabled');
    } else {
        localStorage.setItem('highContrast', 'disabled');
    }
}

// Aplicar alto contraste se o usuário já tiver escolhido antes
if (localStorage.getItem('highContrast') === 'enabled') {
    document.body.classList.add('high-contrast');
}

// 3. Leitura de texto em voz alta
function readTextAloud() {
    const mainContent = document.querySelector('main') || document.body;
    const text = mainContent.innerText || mainContent.textContent;
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = 'pt-BR'; // Definir idioma para português
    speechSynthesis.speak(utterance);
}

// Adicionar botões de acessibilidade ao DOM
function addAccessibilityButtons() {
    const buttonContainer = document.createElement('div');
    buttonContainer.style.position = 'fixed';
    buttonContainer.style.bottom = '20px';
    buttonContainer.style.right = '20px';
    buttonContainer.style.zIndex = '1000';

    // Botão de alto contraste
    const highContrastButton = document.createElement('button');
    highContrastButton.innerText = 'Alto Contraste';
    highContrastButton.style.padding = '10px';
    highContrastButton.style.margin = '5px';
    highContrastButton.style.backgroundColor = '#333';
    highContrastButton.style.color = '#fff';
    highContrastButton.style.border = 'none';
    highContrastButton.style.borderRadius = '5px';
    highContrastButton.style.cursor = 'pointer';
    highContrastButton.onclick = toggleHighContrast;

    // Botão de leitura em voz alta
    const readAloudButton = document.createElement('button');
    readAloudButton.innerText = 'Ler Texto';
    readAloudButton.style.padding = '10px';
    readAloudButton.style.margin = '5px';
    readAloudButton.style.backgroundColor = '#333';
    readAloudButton.style.color = '#fff';
    readAloudButton.style.border = 'none';
    readAloudButton.style.borderRadius = '5px';
    readAloudButton.style.cursor = 'pointer';
    readAloudButton.onclick = readTextAloud;

    buttonContainer.appendChild(highContrastButton);
    buttonContainer.appendChild(readAloudButton);
    document.body.appendChild(buttonContainer);
}

// Inicializar botões de acessibilidade
addAccessibilityButtons();