
/*probando la documetnacion
* @brief Clase para la insercion de video
* @param crazyURL es el link al video
*/
export default class crazyIframe {

    constructor(crazyURL, parentID){

    this.crazyURL = crazyURL;
   
    this.parentID = parentID;
    }

    render() {
        let myApp = document.getElementById(this.parentID);
        const myCrazyIframe = myApp.innerHTML + `
                                                    <iframe src="${this.crazyURL}"></iframe>

                                                `;
        myApp.innerHTML = myCrazyVideo; 
    }
 
}


/* 
<iframe width="560" height="315" src="https://www.youtube.com/embed/SskpYGyEDmU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe> */

{/* <video width="320" height="240" controls>
  <source src="movie.mp4" type="video/mp4">
  <source src="movie.ogg" type="video/ogg">
  Your browser does not support the video tag.
</video> */}