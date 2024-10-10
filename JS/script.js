// Vigenère Cipher Encryption Function
function encrypt() {
    const plaintext = document.getElementById("plaintext").value.toUpperCase();
    const key = document.getElementById("key").value.toUpperCase();
    let output = "";
    let keyIndex = 0;

    for (let i = 0; i < plaintext.length; i++) {
        let charCode = plaintext.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) { // A-Z
            let encryptedCharCode = ((charCode - 65 + (key.charCodeAt(keyIndex % key.length) - 65)) % 26) + 65;
            output += String.fromCharCode(encryptedCharCode);
            keyIndex++;
        } else {
            output += plaintext[i]; // Keep non-alphabet characters as is
        }
    }

    document.getElementById("output").value = output;
}

// Vigenère Cipher Decryption Function
function decrypt() {
    const ciphertext = document.getElementById("plaintext").value.toUpperCase(); // Fix: Correct variable name
    const key = document.getElementById("key").value.toUpperCase();
    let output = "";
    let keyIndex = 0;

    for (let i = 0; i < ciphertext.length; i++) {
        let charCode = ciphertext.charCodeAt(i);

        if (charCode >= 65 && charCode <= 90) { // A-Z
            let decryptedCharCode = ((charCode - 65 - (key.charCodeAt(keyIndex % key.length) - 65) + 26) % 26) + 65;
            output += String.fromCharCode(decryptedCharCode);
            keyIndex++;
        } else {
            output += ciphertext[i]; // Keep non-alphabet characters as is
        }
    }

    document.getElementById("output").value = output;
}
function toggle(isToggled){
    let 
}
// Theme Toggle Function
let isDarkTheme = false;

function toggleTheme() {
    const body = document.body;
    const container = document.querySelector('.container');
  
    // Toggle the theme state
    isDarkTheme = !isDarkTheme;
  
    if (isDarkTheme) {
        body.classList.add('dark');
        container.classList.add('dark');
        document.querySelectorAll('textarea, input').forEach(el => el.classList.add('dark'));
        document.querySelectorAll('button').forEach(el => el.classList.add('dark'));
    } else {
        body.classList.remove('dark');
        container.classList.remove('dark');
        document.querySelectorAll('textarea, input').forEach(el => el.classList.remove('dark'));
        document.querySelectorAll('button').forEach(el => el.classList.remove('dark'));
    }
}
