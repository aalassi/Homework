   /*
      
        Google for pictures

        You are creating a search engine for pictures.
        The user should be able to access your webpage and seach for some pictures.
        
        - When the user clicks on a picture, remove it from the page
        - When a new search is done, the previous list should be removed

        [HINT]
        - use fetch to retrieve the pictures
        - create at runtime the elements on your container
        - use bootstrap column system to create a responsive app
        - check the response from the API! It's not giving you back and array, but an object containing an array named "images"!

        API Docs: http://www.splashbase.co/api
        Example: http://www.splashbase.co/api/v1/images/search?query=laptop

        You should change the value after "query="

      */


      async function searchMe (){ // create async function

       
        let userSearch = document.getElementById("search").value //  get user's search word

       let searchImagesAPI = await fetch ( "http://www.splashbase.co/api/v1/images/search?query=" + userSearch) // place user search in api using fetch to retrieve pictures and store them them in a var



        let pictures = await searchImagesAPI.json() // convert search reults array using json method and store it in another var



        let showPicturesPlace = document.getElementById("showPictures") // create a var where to store the converted array and it would be same place where you append child later

        
        console.log(pictures) //console.log(searchImages) for loop to run thro all array then append that in parent html and assign class to it 

  for (let i=0; i < pictures.images.length; i++) {
    let picture = document.createElement("div")
    picture.classList.add("one-picture")
    picture.innerHTML += "<img src='"  + pictures.images[i].url + "'" +"/img>"

         //  - When the user clicks on a picture, remove it from the page
 /*picture.addEventListener("click", removeFunction)
 function removeFunction () {
   currentTarget.classList.add("clear")
 } */


    showPicturesPlace.appendChild(picture)



     
}
      }



    
    
    

 