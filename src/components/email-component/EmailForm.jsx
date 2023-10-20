import "./EmailForm.css";
import { useState } from 'react';

function EmailForm() {
    const [errorMessage, setErrorMessage] = useState("");
    const [successMessage, setSuccessMessage] = useState("");

    function evaluateEmail(event) {
        const enteredEmail = event.target.value;
        if (enteredEmail.trim() === "" || !enteredEmail.includes('@')) {
            setErrorMessage('The entered email address is invalid!');
        }

        else {
            setErrorMessage("");
            setSuccessMessage("Valid Email✅ ");
        }
    };

    return (
        <div className="form-container">
            <input placeholder="Your Email ..." type="email" className="email-input" onBlur={evaluateEmail} />
            <p className={errorMessage ? 'error': ''}> {errorMessage ? errorMessage : successMessage}</p> 
        </div>
    )
}
export default EmailForm
