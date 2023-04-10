
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
        myApp.innerHTML = myCrazyIframe; 
    }
 
}


