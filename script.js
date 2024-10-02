document.getElementById('enterNameButton').addEventListener('click', function() {
    const name = prompt('Please enter your name:');
    if (name) {
        document.getElementById('result').innerText = `${name} tum pagal ho`;
        document.getElementById('result').classList.remove('hidden');
    }
});
