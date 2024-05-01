function encrypt() {
  var inputText = document.getElementById("inputText").value;
  var password = prompt("Masukkan kata sandi untuk enkripsi:");
  var encryptedText = CryptoJS.AES.encrypt(inputText, password).toString();
  document.getElementById("outputText").value = encryptedText;
}

// Fungsi untuk melakukan dekripsi
function decrypt() {
  var encryptedText = document.getElementById("outputText").value;
  var password = prompt("Masukkan kata sandi untuk dekripsi:");
  var decryptedText = CryptoJS.AES.decrypt(encryptedText, password).toString(
    CryptoJS.enc.Utf8
  );
  document.getElementById("outputText").value = decryptedText;
}
