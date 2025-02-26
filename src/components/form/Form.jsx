import { useState } from "react";

const Form = () => {
    const [name, setName] = useState(null);
    const [email, setEmail] = useState(null);
    const [number, setNumber] = useState(null);

    const handleSubmit = e => {
        e.preventDefault();
      console.log(name , email, number)
    }

    const handleNameChanges = e =>{
        setName(e.target.value);
    }
    const handleEmailChanges = e =>{
        setEmail(e.target.value);
    }
    const handleNumberChanges = e =>{
        setNumber(e.target.value);
    }

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input onChange={handleNameChanges} type="text" name="name" id="" /><br /><br />
                <input onChange={handleEmailChanges} type="text" name="email" id="" /><br /><br />
                <input onChange={handleNumberChanges} type="number" name="number" id="" /><br /><br />
                <input type="submit" name="submit" id="" />
            </form>
        </div>
    );
};

export default Form;