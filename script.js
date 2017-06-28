function DecimalGenerate() {
    var min = 1.03,
        max = 5.99,
        NumberResult = Math.random() * (max - min) + min;

    var rand = document.getElementById('rand');
     rand.textContent = NumberResult.toFixed( 2 );

};

DecimalGenerate();