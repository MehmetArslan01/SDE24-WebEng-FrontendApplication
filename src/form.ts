// Function to validate the form
function validateForm(): void {
    const textInput = document.getElementById('text-input') as HTMLInputElement;
    const numberInput = document.getElementById('number-input') as HTMLInputElement;
    const passwordInput = document.getElementById('password-input') as HTMLInputElement;
    const emailInput = document.getElementById('email-input') as HTMLInputElement;

    const isValid = textInput.checkValidity() && numberInput.checkValidity() && 
                    passwordInput.checkValidity() && emailInput.checkValidity();

    if (isValid) {
        alert('Form submitted successfully!');
        // Add code to submit the form data to a server here.
        
    } else {
        alert('Form contains validation errors. Please check your inputs.');
    }

    
}


const form = document.getElementById('my-form');
if (form) {
    form.addEventListener('submit', (event) => {
        event.preventDefault(); 
        validateForm();
    });
}
