import "./Register.css"
import { useState } from "react";
import { validateEmail } from "./utils"

const PasswordErrorMessage = () => {
    return (
        <p className="FieldError">Password should have at least 8 characters</p>
    );
};

export default function Register() {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState({
        value: "",
        isTouched: false
    });
    const[role, setRole] = useState("");

    const getIsFormValid = () => {
        return firstName && validateEmail(email) && role;
    }

    const clearForm = () => {
        setFirstName("");
        setLastName("");
        setEmail("");
        setPassword({value: "", isTouched: false});
        setRole("");
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Account Created!");
        clearForm();
    }
    
    return (
        <div className="Register">
            <form onSubmit={handleSubmit}>
                <fieldset>
                    <h2>Sign Up</h2>
                    <div className="Field">
                        <label htmlFor="first-name">
                            First name <sup>*</sup>
                        </label>
                        <input 
                            name="first-name"
                            placeholder="First name"
                            value={firstName}
                            onChange={e => setFirstName(e.target.value)} 
                            required 
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="last-name">
                            Last name
                        </label>
                        <input 
                            name="last-name"
                            placeholder="Last name"
                            value={lastName}
                            onChange={e => setLastName(e.target.value)}
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="email">
                            Email address <sup>*</sup>
                        </label>
                        <input 
                            name="email"
                            placeholder="Email address" 
                            value={email}
                            onChange={e => setEmail(e.target.value)}
                            required 
                        />
                    </div>
                    <div className="Field">
                        <label htmlFor="password">
                            Password <sup>*</sup>
                        </label>
                        <input 
                            name="password"
                            type="password"
                            placeholder="Password"
                            value={password.value}
                            onChange={e => setPassword({...password, value: e.target.value})} 
                            onBlur={() => setPassword({...password, isTouched: true})}
                            required 
                        />
                        {password.value.length < 8 && password.isTouched ? <PasswordErrorMessage /> : null}
                        
                    </div>
                    <div className="Field">
                        <label htmlFor="role">
                            Role <sup>*</sup>
                        </label>
                        <select 
                            name="role" 
                            placeholder="Role" 
                            value={role}
                            onChange={e => setRole(e.target.value)}
                            required 
                        >
                            <option value="" disabled defaultValue>Select your role</option>
                            <option value="individual">Individual</option>
                            <option value="business">Business</option>
                        </select>
                    </div>
                    <button type="submit" disabled={!getIsFormValid()}>
                        Create Account
                    </button>
                </fieldset>
            </form>
        </div>
    )
}