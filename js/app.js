
import crazyVideo from "./componenets/video.js"




function printVideo (crazyURL, ancho, alto, parentID){


    let myCrazyVideo = new crazyVideo (crazyURL,ancho,alto,parentID);

    myCrazyVideo.render();
}

printVideo("http://www.example.com/waterfall-video.mp4","800","600","myApp");
