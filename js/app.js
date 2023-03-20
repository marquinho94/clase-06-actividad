
import crazyVideo from "./componenets/video.js"




function printVideo (crazyURL, ancho, alto, parentID){


    let myCrazyVideo = new crazyVideo (crazyURL,ancho,alto,parentID);

    myCrazyVideo.render();
}

printVideo("https://www.youtube.com/watch?v=SskpYGyEDmU","800","600","myApp");
