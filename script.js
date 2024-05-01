function encrypt() {
  var inputText = document.getElementById("inputText").value;
  var password = document.getElementById("passwordInput").value; // Mengambil kunci dari input kotak bawah
  var encryptedText = CryptoJS.AES.encrypt(inputText, password).toString();
  document.getElementById("outputText").value = encryptedText;
}

// Fungsi untuk melakukan dekripsi
function decrypt() {
  var encryptedText = document.getElementById("outputText").value;
  var password = document.getElementById("passwordInput").value; // Mengambil kunci dari input kotak bawah
  var decryptedText = CryptoJS.AES.decrypt(encryptedText, password).toString(
    CryptoJS.enc.Utf8
  );
  document.getElementById("outputText").value = decryptedText;
}

function resetAll() {
  document.getElementById("inputText").value = ""; // Menghapus nilai dari input teks
  document.getElementById("passwordInput").value = ""; // Menghapus nilai dari input kunci
  document.getElementById("outputText").value = ""; // Menghapus nilai dari output teks
}
