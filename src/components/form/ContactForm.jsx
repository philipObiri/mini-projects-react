import "./ContactForm.css";
import SubmitButton from '../submit-button/SubmitButton';
import { useState } from "react";


function AuthForm() {
    const [textContent, setTextContent] = useState('');
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleFormSubmit=(event)=>{
        event.preventDefault();
        if (textContent === "") {
          return;
        }
        else {
          setIsSubmitted(true);
          setTextContent("");
          // console.log(textContent);
        };
    };

    return (
       <>
        <form onSubmit={handleFormSubmit}>
            <input type="text" 
            placeholder="Send me a message ...."
            value={textContent} 
            onChange={(event) => setTextContent(event.target.value)} />
            <SubmitButton isSubmitted={isSubmitted}/>
        </form>
       </>
    )
}

export default AuthForm;
