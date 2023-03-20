
/*probando la documetnacion
* @brief Clase para la insercion de video
* @param crazyURL es el link al video
*/
export default class crazyVideo {

    constructor(crazyURL, ancho, alto, parentID){

    this.crazyURL = crazyURL;
    this.ancho = ancho;
    this.alto = alto;
    this.parentID = parentID;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        const myCrazyVideo = myApp.innerHTML + "<Video controls  width=" + this.ancho + " height=" + this.alto + " controls> <source src=" + this.crazyURL + " type= "video/ogg">" + " Your browser does not support the video tag. </video>";
        myApp.innerHTML = myCrazyVideo; 


        // otra foram de escribir la cadena 
       let algo = ` 
                    <video>
                      <source src=${this.crazyURL}>

                    </video>
       
       
       
       
                  `
    }
 
}


/* 
<iframe width="560" height="315" src="https://www.youtube.com/embed/SskpYGyEDmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */

{/* <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video> */}