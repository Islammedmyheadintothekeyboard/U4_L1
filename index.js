function encryptMessage () {
    console.log("hawk")
    let message = document.getElementById("messageBox").value;
    let keyword = (document.getElementById("keywordBox").value).toLowerCase();
    var encryptedMessage = "";
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

    var previousInd = 0;
    console.log(keyLetters)

    for (let i = 0; i < keyLetters.length; i++) {
        for (let j = 0; j < message.length; j = j + keyLetters.length) {
            if ((keyword.indexOf(keyLetters[i], previousInd) + j) < message.length) {
                encryptedMessage += message[keyword.indexOf(keyLetters[i], previousInd) + j]
            }
        }

        if (keyLetters[i] == keyLetters[i+1%keyLetters.length]) {
            previousInd = keyword.indexOf(keyLetters[i], previousInd) + 1;
        }
        else {previousInd = 0}
        
    }

    outputBox(encryptedMessage);

    //get index number of where the sorted letter is at

    //encryptedMessage += message[]

}

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

function decryptMessage () {
    
    console.log("decrypting message");
}

function outputBox (output) {
    document.getElementById("output").textContent = output;
}