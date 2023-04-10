
import crazyVideo from "./componenets/video.js"
import crazyIframe from "./componenets/iframe.js"



function printVideo (crazyURL, ancho, alto, parentID){


    let myCrazyVideo = new crazyVideo (crazyURL,ancho,alto,parentID);

    myCrazyVideo.render();
}

printVideo("https://samplelib.com/lib/preview/mp4/sample-5s.mp4","400","300","myApp");

function printIframe (crazyURL, parentID){


    let myCrazyIframe = new crazyIframe (crazyURL, parentID);

    myCrazyIframe.render();
}


printIframe("https://www.youtube.com/embed/ffj-xwA55Ao","myApp");