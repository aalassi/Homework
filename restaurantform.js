 /*
      
       You are creating a presentation page for a restaurant.
       The restaurant website will include a carousel with some pictures, a jumbotron with a catchy slogan and a reservation form.

       In the reservation form, the user can select:

       - Name
       - Phone number
       - Number of persons
       - Smoking (true / false)
       - Date and Time
       - Special Requests

        name: {
            type: String,
            required: true,
        },
        phone: {
            type: String,
            required: true
        },
        numberOfPersons: {
            type: Number,
            required: false
        },
        smoking: {
            type: Boolean,
            required: false
        },
        dateTime: {
            type: Date,
            required: true
        },
        specialRequests: {
            type: String,
            required: false
        }

       These reservation will be sent to the owner of the restaurant trough a REST API.

       https://striveschool-api.herokuapp.com/api/reservation/

       The API accepts JSON as content payload and provides the usual REST features:

       - GET https://striveschool-api.herokuapp.com/api/reservation/ ==> Fetch all the reservations
       - GET https://striveschool-api.herokuapp.com/api/reservation/{id} ==> Fetch a single reservation
       - POST https://striveschool-api.herokuapp.com/api/reservation/ ==> Submit a new reservation
       - PUT https://striveschool-api.herokuapp.com/api/reservation/{id} ==> Edit a single reservation
       - DELETE https://striveschool-api.herokuapp.com/api/reservation/{id} ==> Delete a single reservation

       [EXTRA]
       Create a "back office" page where the restaurants' manager can edit / delete / check reservations.

      */



//method 1 
//create a new reservation (post)
let submitReservation = document.getElementById("submitButton") 
submitReservation.addEventListener("click", async (bookNow) => {

    
    let newReservation = { 
        name: document.getElementById("name").value,
        phone: document.getElementById("phone").value,
        numberOfPersons: document.getElementById("numberOfPersons").value,
        smoking: document.getElementById("smoking").checked,
        dateTime: document.getElementById("dateTime").value,
        specialRequests: document.getElementById("specialRequests").value,


    }
    console.log(newReservation)


    let push = await fetch(
        "https://striveschool-api.herokuapp.com/api/reservation/",
        {
            method: "post",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newReservation),
        })
    
    console.log("new reservation pushed")



    });



// -------------------------------- back office -------------
// fetch/read all reservations 
let showReservationsButton = document.getElementById("showReservations")
showReservationsButton.addEventListener("click", async (retrieveReservations) =>{
    let get = await fetch (
        "https://striveschool-api.herokuapp.com/api/reservation/",

    )
    console.log(get)

    let allReservations = await get.json()
    let placeToShowReservations = document.getElementById("ReservationsHere")

    let convertAllReservationsArray = allReservations.map(
        (convert)=>
        `<h2>${convert.name}</h2>
        <h4>ID: ${convert._id}</h4>
        <h4>Phone number: ${convert.phone}</h4>
        <h4>number of persons: ${convert.numberOfPersons}</h4>
        <h4>Smoking: ${convert.smoking}</h4>
        <h4>date & time: ${convert.dateTime}</h4>
        <h4>special requests: ${convert.specialRequests}</h4>`


    )



    placeToShowReservations.innerHTML = "All reservations:" + convertAllReservationsArray

    


} 




)    


// delete reservation by id 
let deleteButton = document.getElementById("deleteReservation")

deleteButton.addEventListener("click", async(event) =>{
    const id = document.getElementById("idField").value

    let remove = await fetch (
        `https://striveschool-api.herokuapp.com/api/reservation/${id}`, {
            method: "DELETE"
        }
    )
    let placeToShowReservations = document.getElementById("ReservationsHere")

    placeToShowReservations.innerHTML = `reservation ${id} has been deleted`
   
    

})




//retrieve reservation by id 

let getButton = document.getElementById("getReservation")

getButton.addEventListener("click", async(event) =>{
    const id = document.getElementById("idField").value

    let search = await fetch (
        `https://striveschool-api.herokuapp.com/api/reservation/${id}`, {
            method: "GET"
        }
    )
console.log(search)

let thisReservation =  await search.json()
console.log(thisReservation)

let placeToShowReservations = document.getElementById("ReservationsHere")
let singleReservation = 
`<h2>${thisReservation.name}</h2>
<h4>ID: ${thisReservation._id}</h4>
<h4>Phone number: ${thisReservation.phone}</h4>
<h4>number of persons: ${thisReservation.numberOfPersons}</h4>
<h4>Smoking: ${thisReservation.smoking}</h4>
<h4>date & time: ${thisReservation.dateTime}</h4>
<h4>special requests: ${thisReservation.specialRequests}</h4>`
   

    placeToShowReservations.innerHTML= singleReservation
 

 })

 // retrieve reservation by id ends 


 // edit a reservation startrs 

 let editButton = document.getElementById("editReservation")

 




 editButton.addEventListener("click", async(event) =>{

    const id = document.getElementById("idField").value

    let newReservation2 = { 
        name: document.getElementById("name2").value,
        phone: document.getElementById("phone2").value,
        numberOfPersons: document.getElementById("numberOfPersons2").value,
        smoking: document.getElementById("smoking2").checked,
        dateTime: document.getElementById("dateTime2").value,
        specialRequests: document.getElementById("specialRequests2").value,}
 

    let search = await fetch (
        `https://striveschool-api.herokuapp.com/api/reservation/${id}`, {
            method: "PUT",
            headers: {
                "content-type": "application/json",
            },
            body: JSON.stringify(newReservation2),
        }
    )
console.log(search)



}
 )

//scroll up button function starts 


//Get the button:
let mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function () {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  }
  else if ($(window).width() <= 767)  {    mybutton.style.display = "none";
} 
  
  else {
    mybutton.style.display = "none";
  }
 
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

// scroll up button function ends 



 // highlight menu items when scroll starts 

 var sections = document.querySelectorAll("section");

 onscroll = function () {
   var scrollPosition = document.documentElement.scrollTop;
 
   sections.forEach((section) => {
     if (
       scrollPosition >= section.offsetTop - section.offsetHeight * 0.25 &&
       scrollPosition <
         section.offsetTop + section.offsetHeight - section.offsetHeight * 0.25
     ) {
       var currentId = section.attributes.id.value;
       removeAllActiveClasses();
       addActiveClass(currentId);
     }
   });
 };
 
 var removeAllActiveClasses = function () {
   document.querySelectorAll(".w3-top a").forEach((el) => {
     el.classList.remove("active2");
   });
 };
 
 var addActiveClass = function (id) {
   // console.log(id);
   var selector = `.w3-top a[href="#${id}"]`;
   document.querySelector(selector).classList.add("active2");
 };
 
 var navLinks = document.querySelectorAll(".w3-top a");
 
 navLinks.forEach((link) => {
   link.addEventListener("click", (e) => {
     e.preventDefault();
     var currentId = e.target.attributes.href.value;
     var section = document.querySelector(currentId);
     var sectionPos = section.offsetTop;
     // section.scrollIntoView({
     //   behavior: "smooth",
     // });
 
     window.scroll({
       top: sectionPos,
       behavior: "smooth",
     });
   });
 });
 

//highlight ends 











/* method two of creating body post 
const reservationForm = document.getElementById("my-reservation-form")


reservationForm.addEventListener("submit", async function(e) {

    e.preventDefault();

    const formData =  new FormData  (this)


    await fetch('https://striveschool-api.herokuapp.com/api/reservation/', {
        method: 'post',
        body: formData
    }).then(function (respone) {
        return respone.text();
    }).then(function(text) {
        console.log(text)
    })
});

mthods n2 ends 
*/ 








// let postButton = document.getElementById("submitButton")

// postButton.addEventListener("submit", async (event) => {
//     console.log("click")
    
//         let newBooking = {
//             name: document.getElementById("name").value,
//             phone: document.getElementById("phone").value,
//             nnumberOfPersons: document.getElementById("numberOfPersons").value,
//             smoking:document.getElementById("smoking").value,
//             datetime: document.getElementById("dateTime").value,
//             specialReq : document.getElementById("specialRequests").value
//       }

//     let response = await fetch(
//         'https://striveschool-api.herokuapp.com/api/reservation/', {
//             method: "POST",
//             headers: {
//                 "Content-Type": "application/json"
//             },
//             body: JSON.stringify(
//                 newBooking) // the object newEvent needs to be sent as a string
//         })
// })



 


// async function handleFormSubmit(event) {
    
//     const form = event.currentTarget;
//     const url = form.action;
//     try {
//         const formData = new FormData(form);
//         const responseData = await postFormDataAsJson({ url, formData });
//         console.log({ responseData });
//     } catch (error) {
// 		console.error(error);
// 	}
// }

// async function postFormDataAsJson({ url, formData }) {
//     const plainFormData = Object.fromEntries(formData.entries());
// 	const formDataJsonString = JSON.stringify(plainFormData);

// 	const fetchOptions = {
//         method: "POST",
//         headers: {
// 			"Content-Type": "application/json",
//             "Accept": "application/json"},
//             body: formDataJsonString,
//         };

//         const response = await fetch(url, fetchOptions);
//         if (!response.ok) {
//             const errorMessage = await response.text();
//             throw new Error(errorMessage);
//         }
    
//         return response.json();
//     }



// [
     
//    let reservation = [{
//        id: 1,
//        name: document.getElementById("name").value,
//        phone: document.getElementById("phone").value,
//        nnumberOfPersons: document.getElementById("numberOfPersons").value,
//        smoking:document.getElementById("smoking").value,
//        datetime: document.getElementById("dateTime").value,
//        specialReq : document.getElementById("specialRequests").value
//     } 

