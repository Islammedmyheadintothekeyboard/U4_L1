function makeEncryptBox () {
    document.getElementById("word").innerHTML = '<label for="messageBox">Enter Message here --></label><input type="text" id="messageBox" value="Message"></input>';
    document.getElementById("submit").innerHTML = '<input type="submit" value="Encrypt">';
}

function makeDecryptBox () {
    document.getElementById("word").innerHTML = '<label for="messageBox">Enter Encrypted Message here --></label><input type="text" id="messageBox" value="Encrypted Message"></input>';
    document.getElementById("submit").innerHTML = '<input type="submit" value="Decrypt">';
}