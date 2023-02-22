import { useState } from 'react';
import classes from './SimpleInput.module.css';

const SimpleInput = () => {
    const [enteredName, setEnteredName] = useState('');
    const [enteredNameIsValid, setEnteredNameIsValid] = useState(true);

    const changeNameHandler = (event) => {
        setEnteredName(event.target.value);
    }

    const formSubmissionHandler = (event) => {
        event.preventDefault();
        if(enteredName == ''){
            setEnteredNameIsValid(false);
            return;
        }

        console.log(enteredName)
        setEnteredName('');
        setEnteredNameIsValid(true);
    }

    return (
        <form className={classes.wrapper} onSubmit={formSubmissionHandler}>
            <div className={classes['form-control']}>
                <label htmlFor='name'>Your Name</label>
                <input type='text' id='name' onChange={changeNameHandler} value={enteredName}/>
                {!enteredNameIsValid && <p>Input must not be empty.</p>}
            </div>
            <div className={classes['form-actions']}>
                <button className={classes.button} type='submit'>Submit</button>
            </div>
        </form>
    )
}

export default SimpleInput;