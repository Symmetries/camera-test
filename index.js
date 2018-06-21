window.onload = () => {
 if (navigator.mediaDevices.getUserMedia) {
  navigator.mediaDevices.getUserMedia({
    video: {
     facingMode: "environment"
    }
   }).then(stream => document.querySelector('video').srcObject = stream)
   .catch(error => {
    console.error("Error while trying to connect to camera...", error);
   });
 }
};