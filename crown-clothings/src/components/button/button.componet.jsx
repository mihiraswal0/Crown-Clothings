import './button.styles.scss';
const BUTTON_TYPE={
    google:'google-sign-in',
    inverted:'inverted',
}
const Button=({children,buttonType,...other})=>{
    return (
        <button className={`button-container ${BUTTON_TYPE[buttonType]}`} {...other}>
            {children}
        </button>
    )
}
export default Button;