


function generate() {
    
    var length = document.getElementById("length").value;
  
    var uppercase = document.getElementById("uppercase").checked;
    var lowercase = document.getElementById("lowercase").checked;
    var numbers = document.getElementById("numbers").checked;
    var symbols = document.getElementById("symbols").checked;

    if (!uppercase && !lowercase && !numbers && !symbols) {
        alert("Selecione ao menos uma opção");
        return;
    }

    var uppercaseChars = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    var lowercaseChars = "abcdefghijklmnopqrstuvwxyz";
    var numberChars = "0123456789";
    var symbolChars = "!@#$%^&*()_+-=[]{}|;':\"<>,.?/";

    var password = "";

    for (var i = 0; i < length; i++) {
        var random = Math.floor(Math.random() * 4);
        if (random === 0 && uppercase) {
            password += uppercaseChars.charAt(Math.floor(Math.random() * uppercaseChars.length));
        } else if (random === 1 && lowercase) {
            password += lowercaseChars.charAt(Math.floor(Math.random() * lowercaseChars.length));
        } else if (random === 2 && numbers) {
            password += numberChars.charAt(Math.floor(Math.random() * numberChars.length));
        } else if (random === 3 && symbols) {
            password += symbolChars.charAt(Math.floor(Math.random() * symbolChars.length));
        } else {
            i--;
        }
    }
    document.getElementById("password").value = password;
}
