import { useState } from "react";
import "./NewsLetterForm.css";


function NewsLetterSignUp() {
    const [email, setEmail] = useState("");
    const [agreed, setAgreed] = useState(false);

    function updateEmailHandler(event) {
        // I can add email validation here
        setEmail(event.target.value);
    }

    function updateAgreementHandler(event) {
        // the checked is a default prop from JS for checkboxes
        setAgreed(event.target.checked);
    }

    function signUpHandler(event) {
        // prevent the browser default of sending HTTP requests 
        event.preventDefault();

        const userData = { userEmail: email, userAgree: agreed };

        // do whatever I want with the user data
    }


    return (
        <form onSubmit={signUpHandler}> 
            <div>
                <label htmlFor="email">Your Email</label>
                <input type="email" id="email" onChange={updateEmailHandler} />
            </div>

            <div className="cta">
                <input type="checkbox" id="checkbox" onChange={updateAgreementHandler} />
                <label htmlFor="checkbox">Agree to terms and Conditions</label>
            </div>
        </form>
    )
}

export default NewsLetterSignUp;
