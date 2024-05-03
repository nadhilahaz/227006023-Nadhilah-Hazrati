// Fungsi untuk mengenkripsi teks menggunakan Kode Rives 4 dan sebuah kunci
function encrypt() {
  var inputText = document.getElementById("inputText").value;
  var key = parseInt(document.getElementById("key").value); // Mengonversi kunci string menjadi integer
  var outputText = "";
  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);
    outputText += String.fromCharCode(charCode + key); // Geser karakter
  }
  document.getElementById("outputText").value = outputText;
  document.getElementById("outputNote").innerText =
    "Teks telah dienkripsi dengan kunci: " + key;
}

// Fungsi untuk mendekripsi teks yang telah dienkripsi menggunakan Kode Rives 4 dan sebuah kunci
function decrypt() {
  var inputText = document.getElementById("inputText").value;
  var key = parseInt(document.getElementById("key").value); // Mengonversi kunci string menjadi integer
  var outputText = "";
  for (var i = 0; i < inputText.length; i++) {
    var charCode = inputText.charCodeAt(i);
    outputText += String.fromCharCode(charCode - key); // Memutar kembali geseran
  }
  document.getElementById("outputText").value = outputText;
  document.getElementById("outputNote").innerText =
    "Teks telah didekripsi dengan kunci: " + key;
}

// Fungsi untuk mengatur ulang bidang masukan dan keluaran
function resetFields() {
  document.getElementById("inputText").value = "";
  document.getElementById("outputText").value = "";
  document.getElementById("key").value = "";
  document.getElementById("outputNote").innerText = ""; // Hapus keterangan
}

// Pemantau acara untuk tombol reset
document.getElementById("resetButton").addEventListener("click", resetFields);
