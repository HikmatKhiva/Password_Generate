const passwordText = document.querySelector(".display p");
const copyBtn = document.querySelector(".display svg");
const elements = document.querySelectorAll("ul li input");
const passwordLength = document.querySelector("#password-length");
const passwordLengthValue = document.querySelector(".password p");
const generateBtn = document.querySelector(".generate-btn");
const [LOWERCASE, NUMBERS, SYMBOLS] = ["abcdefghijklmnopqrstuvxyzw", "0123456789", "!@#$%^&*()_-={}[];:<>?/"]
const UPPERCASE = LOWERCASE.toUpperCase()
const check = {
    uppercase: false,
    lowercase: false,
    symbols: false,
    numbers: false
}
generateBtn.addEventListener("click",()=>{
    generatePassword(checkScanner())
})
copyBtn.addEventListener("click", () => navigator.clipboard.writeText(passwordText.textContent))
document.addEventListener("DOMContentLoaded", () => elements.forEach(item => check[item.id] = item.checked));
passwordLength.addEventListener("input", (event) => passwordLengthValue.textContent = event.target.value);

elements.forEach(item => item.addEventListener("input", () => check[item.id] = item.checked))

function generatePassword(event) {
    let result = ""
    if (event.length > 0) {
        for (let i = 0; i < passwordLength.value; i++) {
            result += event.charAt(Math.floor(Math.random() * event.length))
        }
        passwordText.textContent = result
    }
    else {
        alert("Tanlanmagan")
    }
}
function checkScanner() {
    let [u, l, n, s] = [UPPERCASE, LOWERCASE, NUMBERS, SYMBOLS]
    return (check.uppercase ? u : "") + (check.lowercase ? l : "") + (check.numbers ? n : "") + (check.symbols ? s : "")
}


