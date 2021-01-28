

const reservationForm = document.getElementById("my-reservation-form")


reservationForm.addEventListener("submit", function(e) {

    e.preventDefault();

    const formData = new FormData(this)


    fetch('https://striveschool-api.herokuapp.com/api/reservation/', {
        method: 'post',
        body: formData
    }).then(function (respone) {
        return respone.text();
    }).then(function(text) {
        console.log(text)
    })
});









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



 


/*
async function handleFormSubmit(event) {
    
    const form = event.currentTarget;
    const url = form.action;
    try {
        const formData = new FormData(form);
        const responseData = await postFormDataAsJson({ url, formData });
        console.log({ responseData });
    } catch (error) {
		console.error(error);
	}
}

async function postFormDataAsJson({ url, formData }) {
    const plainFormData = Object.fromEntries(formData.entries());
	const formDataJsonString = JSON.stringify(plainFormData);

	const fetchOptions = {
        method: "POST",
        headers: {
			"Content-Type": "application/json",
            "Accept": "application/json"},
            body: formDataJsonString,
        };

        const response = await fetch(url, fetchOptions);
        if (!response.ok) {
            const errorMessage = await response.text();
            throw new Error(errorMessage);
        }
    
        return response.json();
    }



/*
[
     
   let reservation = [{
       id: 1,
       name: document.getElementById("name").value,
       phone: document.getElementById("phone").value,
       nnumberOfPersons: document.getElementById("numberOfPersons").value,
       smoking:document.getElementById("smoking").value,
       datetime: document.getElementById("dateTime").value,
       specialReq : document.getElementById("specialRequests").value
   }











] */