function makeEncryptBox () {
    document.getElementById("word").innerHTML = '<label for="messageBox">Enter Message here --></label><input type="text" id="messageBox"></input>';
    document.getElementById("submit").innerHTML = '<input type="submit" value="Encrypt">';
    document.getElementById("submit").onclick = function() {encryptMessage();};
}

function makeDecryptBox () {
    document.getElementById("word").innerHTML = '<label for="messageBox">Enter Encrypted Message here --></label><input type="text" id="messageBox"></input>';
    document.getElementById("submit").innerHTML = '<input type="submit" value="Decrypt">';
    document.getElementById("submit").onclick = function() {decryptMessage();};
}

function encryptMessage () {
    let message = document.getElementById("messageBox").value.toLowerCase();
    let keyShift = Number(document.getElementById("keyShift").value)%26;
    let output = "";
    for (let i=0; i < message.length; i++) {
        let char = message.charCodeAt(i);
        if (char + keyShift > 122) {char -= 26;}
        output += String.fromCharCode(char + keyShift);
    }
    outputBox(output);
}

function decryptMessage () {
    let message = document.getElementById("messageBox").value.toLowerCase();
    let keyShift = Number(document.getElementById("keyShift").value)%26;
    let output = "";
    for (let i=0; i < message.length; i++) {
        let char = message.charCodeAt(i);
        if (char - keyShift < 97) {char += 26;}
        output += String.fromCharCode(char - keyShift);
    }
    outputBox(output);
}

function outputBox (output) {
    document.getElementById("output").textContent = output;
}