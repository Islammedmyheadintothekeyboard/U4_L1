function encryptMessage () {
    let message = document.getElementById("messageBox").value;
    let keyword = (document.getElementById("keywordBox").value).toLowerCase();
    var encryptedMessage = "";
    const keyLetters = keyword.split("").sort();

    var previousInd = 0;

    for (let i = 0; i < keyLetters.length; i++) {
        for (let j = 0; j < message.length; j = j + keyLetters.length) {
            if ((keyword.indexOf(keyLetters[i], previousInd) + j) < message.length) {
                if (message[keyword.indexOf(keyLetters[i], previousInd) + j] === " ") {
                    encryptedMessage += "_";
                }
                else {
                    encryptedMessage += message[keyword.indexOf(keyLetters[i], previousInd) + j]
                }
            }
        }

        if (keyLetters[i] == keyLetters[i+1%keyLetters.length]) {
            previousInd = keyword.indexOf(keyLetters[i], previousInd) + 1;
        }
        else {previousInd = 0}
        
    }

    outputBox(encryptedMessage);
}

function decryptMessage () {
    let message = document.getElementById("messageBox").value;
    let keyword = (document.getElementById("keywordBox").value).toLowerCase();
    let decryptedMessage = "";
    const message2D = [];
    const keyLetters = keyword.split("").sort();

    for (let i = 0; i < Math.ceil(message.length / keyword.length); i++) {
        message2D.push([]);
        for (let j = 0; j < keyword.length; j++) {
            message2D[i].push(null);
        }
    }

    const hangOver = message.length % keyword.length;
    let previousInd = 0;
    let tracker = 0;
    let indexOfKeyLetter;
    let lengthOfSeg;

    for (let i = 0; i < keyword.length; i++) {
        indexOfKeyLetter = keyword.indexOf(keyLetters[i], previousInd);

        if (indexOfKeyLetter < hangOver) {lengthOfSeg = Math.ceil(message.length / keyword.length);} 
        else {lengthOfSeg = Math.floor(message.length / keyword.length);}

        for (let j = 0; j < lengthOfSeg; j++) {
            message2D[j][indexOfKeyLetter] = message[tracker];
            tracker++;
        }

        //I don't know what this is for, yet I know what its for.
        if (keyLetters[i] == keyLetters[i+1%keyLetters.length]) {
            previousInd = keyword.indexOf(keyLetters[i], previousInd) + 1;
        }
        else {previousInd = 0}
    }
    
    for (let i = 0; i < message2D.length; i++) {
        for (let j = 0; j < message2D[i].length; j++) {
            if (message2D[i][j] !== null) {
                decryptedMessage += message2D[i][j];
            }
        }
    }

    outputBox(decryptedMessage);
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

function outputBox (output) {
    document.getElementById("output").textContent = output;
}