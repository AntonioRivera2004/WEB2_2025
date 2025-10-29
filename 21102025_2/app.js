function generarQR(){
    let input1= document.getElementById('input1').value.trim();
    let input2= document.getElementById('input2').value.trim();
    let input3= document.getElementById('input3').value.trim();
    let input4= document.getElementById('input4').value.trim();

    let textoCompleto = input1+ " " +input2+ " " +input3+" "+input4;

    if(textoCompleto === ""){
        alert("Ingresa al menos un texto para generar el QR");
        return;
    }

    let qrCodeURL='https://api.qrserver.com/v1/create-qr-code/?size=350x200&data='+encodeURIComponent(textoCompleto);

    let qrImg = document.createElement('img');
    qrImg.src = qrCodeURL;
    qrImg.alt='Un código QR';
    qrImg.classList.add('qr-code');

    let contenedor = document.getElementById('qr-code');
    contenedor.innerHTML = ''; // limpiar QR anterior
    contenedor.appendChild(qrImg);

    console.log(qrImg.src);
}
