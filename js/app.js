
import crazyVideo from "./componenets/video.js"




function printVideo (crazyURL, ancho, alto, parentID){


    let myCrazyVideo = new crazyVideo (crazyURL,ancho,alto,parentID);

    myCrazyVideo.render();
}

printVideo("https://samplelib.com/lib/preview/mp4/sample-5s.mp4","800","600","myApp");
