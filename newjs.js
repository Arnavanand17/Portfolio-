const scriptURL = 'https://script.google.com/macros/s/AKfycbwL6QI2kamz6OPlee9RFSa2EGmjkhX3AqE08tlY8niOoXJiZWb7UeLuAlzoOn9x4oM0EQ/exec';

const form = document.forms['contact__form'];

form.addEventListener('submit', e => {
    e.preventDefault();
    const formData = new FormData(form);

    fetch(scriptURL, { 
        method: 'POST', // Corrected the method to 'POST'
        body: formData 
    })
    .then(response => {
        if (response.ok) {
            alert("Thank you! Your form is submitted successfully.");
            window.location.reload();
        } else {
            throw new Error('Network response was not ok.');
        }
    })
    .catch(error => console.error('Error!', error.message));
});
