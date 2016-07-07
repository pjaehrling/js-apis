"use strict";

(function () {

  /*
   * Basic usage
   */
  document.getElementById('getReq').addEventListener('click', () => {

    console.log('Make basic GET request');
    
    fetch('https://api.mycs.com/elements/101.112.00', { method: 'GET' })
      .then((response) => {
        return response.json(); // ReadableByteStream
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.error(error);
      });
    
  });


  /*
   * Use of Request and Header objects
   */
  document.getElementById('putReq').addEventListener('click', () => {

    console.log('Make PUT request with Authorization');

    // Create a header object with initial values
    let headers = new Headers({
      'Content-Type': 'application/json'
    });

    headers.append('Authorization', 'Bearer TOKEN1'); // Or use "append", "has", "get", "set", and "delete"

    // Create a request object
    let request = new Request('http://localhost:3000/orders/update/status/', {
      method: 'PUT',
      headers: headers,
      body: JSON.stringify({
        data: [
          { transaction_id: 551904089, status: 'shipping'}
        ]
      })
      // Send a Form?
      // body: new FormData(document.getElementById('some-form-element'))
    });

    // Make the call
    fetch(request)
      .then((response) => {
        return response.json(); // ReadableByteStream
      })
      .then((json) => {
        console.log(json);
      })
      .catch((error) => {
        console.log(error)
      });

  });

}());