document.addEventListener('DOMContentLoaded', function() {
    let switchSectionButton = document.getElementById('switch-section');
    let luasSection = document.getElementById('luas-section');
    let kelilingSection = document.getElementById('keliling-section');
    let resultDiv = document.getElementById('result');

    switchSectionButton.addEventListener('click', function() {
        if (luasSection.style.display !== 'none') {
            luasSection.style.display = 'none';
            kelilingSection.style.display = 'block';
        } else {
            luasSection.style.display = 'block';
            kelilingSection.style.display = 'none';
        }
        resultDiv.innerHTML = '';
    });

    document.getElementById('luas-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let alas = parseFloat(document.getElementById('alas').value);
        let tinggi = parseFloat(document.getElementById('tinggi').value);

        if (isNaN(alas) || isNaN(tinggi) || alas <= 0 || tinggi <= 0) {
            alert('Please enter valid positive values.');
            return;
        }

        let luas = 0.5 * alas * tinggi;
        resultDiv.innerHTML = `<p>Luas Segitiga: ${luas.toFixed(2)} cm²</p>`;
    });

    document.getElementById('keliling-form').addEventListener('submit', function(event) {
        event.preventDefault();
        let sisiA = parseFloat(document.getElementById('sisiA').value);
        let sisiB = parseFloat(document.getElementById('sisiB').value);
        let sisiC = parseFloat(document.getElementById('sisiC').value);

        if (isNaN(sisiA) || isNaN(sisiB) || isNaN(sisiC) || sisiA <= 0 || sisiB <= 0 || sisiC <= 0) {
            alert('Please enter valid positive values.');
            return;
        }

        let keliling = sisiA + sisiB + sisiC;
        resultDiv.innerHTML = `<p>Keliling Segitiga: ${keliling.toFixed(2)} cm</p>`;
    });
});
