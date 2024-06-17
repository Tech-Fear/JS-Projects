let imgBox=document.getElementById('imgBox');
let img=document.getElementById('img');
function generateQr(){
    let qrText=document.getElementById('text').value;
    if(qrText.trim()!==''){
    let qr=new QRious({
        value:qrText,
        size:300
    });
    img.src=qr.toDataURL();
    imgBox.style.display='block';
  }
    else{
      alert('Please enter some text to generate QR code')
      return;
    }
    
}

function handleKeyPress(event) {
  if (event.key === 'Enter') {
      generateQr();
  }
}