import { useState } from "react";
import './SubmitButton.css';

function SubmitButton({isSubmitted}) {
  const [buttonText, setButtonText]= useState("Submit")

  const handleButtonText = () => {
    setButtonText("Message Sent !");
  };

  return (
    <>
      <button onClick={handleButtonText}>
        {isSubmitted ? "Message Sent !" : `${buttonText}`}
      </button >
    </>
  )
}

export default SubmitButton;
