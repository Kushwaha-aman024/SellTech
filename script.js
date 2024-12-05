const paragraph = document.getElementById('paragraph');
const inputBox = document.getElementById('inputBox');
const errorsElement = document.getElementById('errors');
const timeTaken = document.getElementById('timeTaken');
const accuracy = document.getElementById('accuracy');

let timer, startTime;

inputBox.addEventListener('click', () => {
    paragraph.style.display = 'block'; // Ensure the paragraph is visible
    inputBox.disabled = false;
    inputBox.focus();
    startTime = Date.now();

    inputBox.addEventListener('input', updateResults);

    timer = setTimeout(() => {
        finishTest();
    }, 60000); // 60 seconds
});

function updateResults() {
    const typedText = inputBox.value;
    const originalText = paragraph.textContent;

    let errors = 0;
    let correctChars = 0;

    for (let i = 0; i < typedText.length; i++) {
        if (typedText[i] === originalText[i]) {
            correctChars++;
        } else {
            errors++;
        }
    }

    const accuracyValue = ((correctChars / originalText.length) * 100).toFixed(2);
    const timeElapsed = ((Date.now() - startTime) / 1000).toFixed(1);

    errorsElement.textContent = `${errors}`;
    timeTaken.textContent = `${timeElapsed}`;
    accuracy.textContent = `${accuracyValue}`;
}

function finishTest() {
    inputBox.disabled = true;
    clearTimeout(timer);
    updateResults();
}
