const imageBox = document.getElementById("imgBox");
const qrCodeImage = document.getElementById("qrImage");
const qrCodeInput = document.getElementById("qrText");
const generateQrCode = document.getElementById("generateBtn");
const qrContainer = document.querySelector(".container");




const link = `https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=`;



generateQrCode.addEventListener("click", generateQR);


function generateQR(){
    if(qrCodeInput.value.length > 0){
        qrCodeImage.setAttribute("src", link+ qrCodeInput.value );
        imageBox.classList.add("show-img");
    }else {
        qrContainer.classList.add("error");
        setTimeout(()=>{
            qrContainer.classList.remove("error"); 
        },2000)
    }
}
