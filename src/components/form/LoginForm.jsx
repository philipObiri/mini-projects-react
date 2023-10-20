import { useState } from "react";
import './LoginForm.css';

function LoginForm() {

    const [enteredEmail, setEnteredEmail] = useState('');
    const [enteredPassword, setEnteredPassword] = useState('');

    // const [userData, setUserData]=useState({
    //     email:"",
    //     password:""
    // })

    function emailEnteredHandler(event) {
       setEnteredEmail(event.target.value);
    };

    // function emailEnteredHandler(event) {
    //     setUserData(prevData =>({
    //         email: event.target.value,
    //         password: prevData.password
    //     }));
    // };


    function passwordEnteredHandler(event) {
        setEnteredPassword(event.target.value)
    };

    // function passwordEnteredHandler(event) {
    //     setUserData((prevData)=>{
    //         email: prevData.email,
    //         password: event.target.value
    //     });
    // };


    return (
        <form>
            <input
                type="email"
                placeholder="Your email"
                onBlur={emailEnteredHandler} />
            <input
                type="password"
                placeholder="Your password"
                onBlur={passwordEnteredHandler} />

    
        </form>
    )
}

export default LoginForm;
