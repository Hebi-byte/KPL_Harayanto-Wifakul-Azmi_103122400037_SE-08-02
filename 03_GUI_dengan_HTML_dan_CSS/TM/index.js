const editorElement = document.getElementById("editor-kecil");
const charCountElement = document.getElementById("hf");
const charCountUppercase = document.getElementById("hb");
const charCountLowercase = document.getElementById("hk");
const uppercaseButton = document.getElementById("huruf-besar");
const lowercaseButton = document.getElementById("huruf-kecil");

editorElement.addEventListener("input", updateCaseCounts);

function updateCaseCounts() {
    const text = editorElement.value;

    let uppercaseCount = 0;
    let lowercaseCount = 0;

    for (let i = 0; i < text.length; i++) {
        if (text[i] >= 'A' && text[i] <= 'Z') {
            uppercaseCount++;
        } else if (text[i] >= 'a' && text[i] <= 'z') {
            lowercaseCount++;
        }
    }

    charCountElement.textContent = text.length;
    charCountUppercase.textContent = uppercaseCount;
    charCountLowercase.textContent = lowercaseCount;
}

uppercaseButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toUpperCase();
    updateCaseCounts();
});

lowercaseButton.addEventListener("click", () => {
    editorElement.value = editorElement.value.toLowerCase();
    updateCaseCounts();
});


