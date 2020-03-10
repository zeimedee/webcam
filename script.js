const video = document.getElementById("video");


const startVideo = () =>{
    navigator.getUserMedia(
        {video: {}},
        stream => video.srcObject = stream,
        err => console.error(err)
    )

    
}

video.className = 'anime'
startVideo();