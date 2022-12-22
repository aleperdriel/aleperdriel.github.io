import {React, useState} from 'react';

export default function Form() {

    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    const [firstNameError, setFirstNameError] = useState('');
    const [lastNameError, setLastNameError] = useState('');
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');

    const handleEmailChange = e => {
        var email = e.target.value;
        setEmail(email);

        checkEmail(email)

    }
    function checkName(n) {
        const validName = new RegExp(
            "^[a-zA-Z ,.'-]+$"
        );

        if(n.length>= 3 && validName.test(n)) {
            return true;
        }
        
    }

    function checkFirstName(e) {
        const name = e.target.value;
        setFirstName(name);

        if(checkName(name)) {
            setFirstNameError(false);
        }
        else {
            setFirstNameError(true);
        }

    }

    function checkLastName(e) {
        const name = e.target.value;
        setLastName(name);

        if(checkName(name)) {
            setLastNameError(false);
        }

        else {
            setLastNameError(true);
        }

    }
    
    function checkEmail(e) {
        var email = e.target.value;
        setEmail(email);


        if(/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/.test(email)) {
            setEmailError(false);
        }
        else {
            setEmailError(true);
        }
        
    }

    function checkPassword(p) {
        setPassword(p.target.value);

        if(p.target.value.length > 7 ) {
            setPasswordError(false);
            console.log(passwordError)
        }

        else {
            setPasswordError(true);
        }

    }

    function handleSubmit(e) {
        checkForm(e)
    }

    function checkForm(e) {
        if(firstNameError===true || lastNameError===true || emailError===true || passwordError===true || firstName === '' || lastName==='' || email==='' || password==='' ) {
            e.preventDefault();
        }
    }


    return (
        <div className='form-main'>
            <h1>User registration form</h1>
            <form onSubmit={handleSubmit}>
                <div className='form-line'>
                    <label>First name</label>
                    <input value={firstName} onChange={checkFirstName} type="text" required/>
                    <div className='error' style={{display: firstNameError ? '' : 'none'}}>
                        <p>Invalid name, please check the spelling !</p>
                    </div>
                </div>

                <div className='form-line'>
                    <label>Last name</label>
                    <input value={lastName} onChange={checkLastName} type="text" required/>
                    <div className='error' style={{display: lastNameError ? '' : 'none'}}>
                        <p>Invalid name, please check the spelling !</p>
                    </div>
                </div>
                
        

                <div className='form-line'>
                    <label>Email</label>
                    <input value={email} onChange={handleEmailChange} type="email" required/>
                    <div className='error' style={{display: emailError ? '' : 'none'}}>
                        <p>Invalid email address, please check the spelling !</p>
                    </div>
                </div>
        

                <div className='form-line'>
                    <label>Password</label>
                    <input value={password} onChange={checkPassword} type="password" required/>
                    <div className='error' style={{display: passwordError ? '' : 'none'}}>
                        <p>Weak password !</p>
                    </div>
                </div>
        
                <button type="submit">
                    Submit
                </button>
            </form>
            
        </div>
    )
}