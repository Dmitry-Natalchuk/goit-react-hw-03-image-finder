import PropTypes from 'prop-types';
import s from "./Button.module.css"


export const Button = ({children,onLoadClick}) => {

    return(
        <button className={s.button} type='button' onClick={() => onLoadClick}>
            {children}
        </button>
    )
}
Button.propTypes = {
    onLoadClick: PropTypes.func,
    children: PropTypes.string,
  };