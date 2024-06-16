const inputs = document.querySelectorAll('input.inpt'),
read_more_btn = document.querySelectorAll('.read_more_btn'),
crossword_flex = document.querySelectorAll('.crossword_flex');

inputs.forEach(function(item, i) {
    item.addEventListener('input', function(e) {
        if (e.target.value.length > 1) {
            e.target.value = e.target.value[0];
        }
    });
})

for (var i = 0; i < inputs.length; i++) {
    inputs[i].addEventListener("input", function() {
        var allValues = "";
        for (var j = 1; j <= 6; j++) {
        allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
        }
        if (allValues === "CIPHER" || allValues === "cipher") {
        for (var k = 1; k <= 6; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
        }
        } else {
        for (var k = 1; k <= 6; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
        }
        }

        var allValues = "";
        for (var j = 17; j <= 22; j++) {
        allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
        }
        if (allValues === "SECRET" || allValues === "secret") {
        for (var k = 17; k <= 22; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
        }
        } else {
        for (var k = 17; k <= 22; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
        }
        }

        var allValues = "";
        for (var j = 29; j <= 36; j++) {
        allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
        }
        if (allValues === "EXCHANGE" || allValues === "exchange") {
        for (var k = 29; k <= 36; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
        }
        } else {
        for (var k = 29; k <= 36; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
        }
        }

        var allValues = "";
        for (var j = 42; j <= 47; j++) {
        allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
        }
        if (allValues === "SECURE" || allValues === "secure") {
        for (var k = 42; k <= 47; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
        }
        } else {
        for (var k = 42; k <= 47; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
        }
        }

        var allValues = "";
        for (var j = 49; j <= 57; j++) {
        allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
        }
        if (allValues === "ALGORITHM" || allValues === "algorithm") {
        for (var k = 49; k <= 57; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
        }
        } else {
        for (var k = 49; k <= 57; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
        }
        }

        var allValues = "";
        for (var j = 64; j <= 67; j++) {
        allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
        }
        if (allValues === "CODE" || allValues === "code") {
        for (var k = 64; k <= 67; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
        }
        } else {
        for (var k = 64; k <= 67; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
        }
        }

        var allValues = "";
        for (var j = 68; j <= 80; j++) {
        allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
        }
        if (allValues === "STEGANOGRAPHY" || allValues === "steganography") {
        for (var k = 68; k <= 80; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
        }
        } else {
        for (var k = 68; k <= 80; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
        }
        }

        var allValues = "";
        for (var j = 85; j <= 94; j++) {
        allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
        }
        if (allValues === "DECRYPTION" || allValues === "decryption") {
        for (var k = 85; k <= 94; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
        }
        } else {
        for (var k = 85; k <= 94; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
        }
        }

        var allValues = "";
        for (var j = 96; j <= 102; j++) {
        allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
        }
        if (allValues === "DIGITAL" || allValues === "digital") {
        for (var k = 96; k <= 102; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "green";
        }
        } else {
        for (var k = 96; k <= 102; k++) {
            document.getElementById("" + k).getElementsByTagName("input")[0].style.color = "red";
        }
        }
    ///
        var allValues = "";
        for (var j = 1; j <= 105; j++) {
            if (j == 1 || j == 7 || j == 10 || j== 14 || j == 22 || j == 26 || j == 37 || j == 40 || j == 49 || j == 59 || j == 63 || j == 80){
                allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
            
                if (allValues === "CRYPTOGRAPHY" || allValues === "cryptography") {
                    document.getElementById("" + 1).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 7).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 10).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 14).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 22).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 26).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 37).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 40).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 49).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 59).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 63).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 80).getElementsByTagName("input")[0].style.color = "green";
                    } else {
                    document.getElementById("" + 1).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 7).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 10).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 14).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 22).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 26).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 37).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 40).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 49).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 59).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 63).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 80).getElementsByTagName("input")[0].style.color = "red";
                }
            }
        }

        var allValues = "";
        for (var j = 4; j <= 27; j++) {
            if (j == 4 || j == 8 || j == 11 || j == 15 || j == 23 || j == 27){
                allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
            
                if (allValues === "HIDDEN" || allValues === "hidden") {
                    document.getElementById("" + 4).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 8).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 11).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 15).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 23).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 27).getElementsByTagName("input")[0].style.color = "green";
                    } else {
                    document.getElementById("" + 4).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 8).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 11).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 15).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 23).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 27).getElementsByTagName("input")[0].style.color = "red";
                }
            }
        }

        var allValues = "";
        for (var j = 9; j <= 47; j++) {
            if (j == 9 || j == 13 || j == 17 || j == 25 || j == 33 || j == 39 || j == 47){
                allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
            
                if (allValues === "MESSAGE" || allValues === "message") {
                    document.getElementById("" + 9).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 13).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 17).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 25).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 33).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 39).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 47).getElementsByTagName("input")[0].style.color = "green";
                    } else {
                    document.getElementById("" + 9).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 13).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 17).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 25).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 33).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 39).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 47).getElementsByTagName("input")[0].style.color = "red";
                }
            }
        }

        var allValues = "";
        for (var j = 12; j <= 81; j++) {
            if (j == 12 || j == 16 || j == 24 || j == 28 || j == 38 || j == 41 || j == 55 || j == 60 || j == 65 || j == 81){
                allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
            
                if (allValues === "ENCRYPTION" || allValues === "encryption") {
                    document.getElementById("" + 12).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 16).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 24).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 28).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 38).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 41).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 55).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 60).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 65).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 81).getElementsByTagName("input")[0].style.color = "green";
                    } else {
                    document.getElementById("" + 12).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 16).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 24).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 28).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 38).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 41).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 55).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 60).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 65).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 81).getElementsByTagName("input")[0].style.color = "red";
                }
            }
        }

        var allValues = "";
        for (var j = 61; j <= 82; j++) {
            if (j == 61 || j == 70 || j == 82){
                allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
            
                if (allValues === "KEY" || allValues === "key") {
                    document.getElementById("" + 61).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 70).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 82).getElementsByTagName("input")[0].style.color = "green";
                    } else {
                    document.getElementById("" + 61).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 70).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 82).getElementsByTagName("input")[0].style.color = "red";
                }
            }
        }

        var allValues = "";
        for (var j = 48; j <= 105; j++) {
            if (j == 48 || j == 58 || j == 62 || j== 78 || j == 83 || j == 84 || j == 94 || j == 95 || j == 102 || j == 103 || j == 104 || j == 105){
                allValues += document.getElementById("" + j).getElementsByTagName("input")[0].value;
            
                if (allValues === "CRYPTANALYST" || allValues === "cryptanalyst") {
                    document.getElementById("" + 48).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 58).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 62).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 78).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 83).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 84).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 94).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 95).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 102).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 103).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 104).getElementsByTagName("input")[0].style.color = "green";
                    document.getElementById("" + 105).getElementsByTagName("input")[0].style.color = "green";
                    } else {
                    document.getElementById("" + 48).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 58).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 62).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 78).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 83).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 84).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 94).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 95).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 102).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 103).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 104).getElementsByTagName("input")[0].style.color = "red";
                    document.getElementById("" + 105).getElementsByTagName("input")[0].style.color = "red";
                }
            }
        }
    });
}

read_more_btn.forEach(function(item, i) {
    item.addEventListener("click", () => {
        crossword_flex[i].classList.toggle('hidden');
        if (crossword_flex[i].classList.contains('hidden')) {
            read_more_btn[i].innerHTML = "Читать далее";
        } else {
            read_more_btn[i].innerHTML = "Меньше";
        }
    })
})