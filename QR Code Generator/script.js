const qrinput = document.querySelector(".input-link");
const qrbtn = document.querySelector(".btn");
const qrimg = document.querySelector(".qr-img");

function generateQRCode() {
  const inputValue = qrinput.value;

  if (!inputValue) {
    alert("Please enter a valid URL");
    return;
  } else {
    qrimg.src = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${inputValue}`;
    qrimg.alt = `QR code for ${inputValue}`;
  }
}

// Generate QR Code on button click
qrbtn.addEventListener("click", generateQRCode);

// Generate QR Code on pressing Enter
qrinput.addEventListener("keydown", (e) => {
  if (e.key === "Enter") {
    generateQRCode();
  }
});
