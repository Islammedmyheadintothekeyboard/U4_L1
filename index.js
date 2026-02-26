function makeEncryptBox () {
    document.getElementById("word").innerHTML = '<label for="messageBox">Enter Message here --></label><input type="text" id="messageBox" value="Message"></input>';
    document.getElementById("submit").innerHTML = '<input type="submit" value="Encrypt">';
    document.getElementById("submit").onclick = function() {encryptMessage();};
}

function makeDecryptBox () {
    document.getElementById("word").innerHTML = '<label for="messageBox">Enter Encrypted Message here --></label><input type="text" id="messageBox" value="Encrypted Message"></input>';
    document.getElementById("submit").innerHTML = '<input type="submit" value="Decrypt">';
    document.getElementById("submit").onclick = function() {decryptMessage();};
}

function encryptMessage () {
    let message = document.getElementById("messageBox").value;
    let keyword = (document.getElementById("keywordBox").value).toLowerCase();
    let encryptedMessage = "";
    const keyLetters = [];

    for (let keyLetter of keyword) {
        keyLetters.push(keyLetter);
    }

    for (let i = 1; i < keyLetters.length; i++) {
        const letter = keyLetters[i];
        let compareLetInd = i-1;

        while (compareLetInd >= 0 && keyLetters[compareLetInd].charCodeAt(0) > letter.charCodeAt(0)) {
            keyLetters[compareLetInd + 1] = keyLetters[compareLetInd];
            compareLetInd--;
        }
        keyLetters[compareLetInd + 1] = letter;
    }

    if (keyword.length > message.length) {
        for (let i = 0; i < message.length; i++) {
            encryptedMessage += message[keyword.indexOf(keyLetters[i])];
        }
    }
    
    else {
        for (let i = 0; i < keyLetters.length; i++) {

            if (message.length%keyLetters.length >= keyword.indexOf(keyLetters[i], keyword.indexOf(keyLetters[i-1]))+1) {var overflow = 1}
            else {var overflow = 0;}

            for (let j = 0; j < Math.floor(message.length / keyLetters.length) + overflow; j++) {
                console.log(keyword.indexOf(keyLetters[i]));
                encryptedMessage += message[keyword.indexOf(keyLetters[i]) + (keyword.length*j)];
            }
        }
    }

    console.log(encryptedMessage);
}

function decryptMessage () {
    console.log("decrypting message");
}   