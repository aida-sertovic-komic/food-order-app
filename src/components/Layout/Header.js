import classes from './Header.module.css';
import { Fragment } from 'react';
import mealsImage from '../../assets/meals.jpg';
const Header = (props) => {
    return (
    <Fragment>
        <header className={classes.header}>
            <h1>Meals</h1>
            <buttton>Cart</buttton>
        </header>
        <div>
            <img className={classes['main-image']} src={mealsImage} alt='A table full of delicious food!'/>
        </div>
    </Fragment>
)
}

export default Header;