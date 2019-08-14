
function openStream(){
    const config = {audio:false,video:true}
   return navigator.mediaDevices.getUserMedia(config);
}
function playStream(idvideo,stream){
    const video = document.getElementById(idvideo)
    video.srcObject = stream ;
    video.play()
}
openStream()
 .then(stream=>console.log(stream))