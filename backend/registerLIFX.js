document.getElementById('lifxTokenForm').addEventListener('submit', function(e) {
    e.preventDefault();
    const lifxToken = document.getElementById('lifxToken').value;
    // Now you can use lifxToken to make a request to your server
    fetch('/LIFXDeviceRegistration', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({ lifxToken }),
    })
    .then(response => response.json())
    .then(data => {
        console.log('Success:', data);
        // Handle success response
    })
    .catch((error) => {
        console.error('Error:', error);
        // Handle error
    });
});
