import React from 'react';

const Form = () => {
    const handleSubmit = e => {
        e.preventDefault();
        console.log(e.target.name.value)
        console.log(e.target.email.value)
        console.log(e.target.number.value)

    }
    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input type="text" name="name" id="" /><br /><br />
                <input type="text" name="email" id="" /><br /><br />
                <input type="number" name="number" id="" /><br /><br />
                <input type="submit" name="submit" id="" />
            </form>
        </div>
    );
};

export default Form;