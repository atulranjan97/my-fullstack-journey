import './Button.css'

// `props` accessible in the child component as an object (props or destructured).
// You can destructure props for cleaner code:
const Button = ({btnType, btnText, handler}) => {
    if (btnType === 'success') {
        return <button className="green-button" onClick={handler}>{btnText}</button>
    } else if (btnType === 'danger') {
        return <button className="red-button" onClick={handler}>{btnText}</button>
    } else {
        return <button className="blue-button" onClick={handler}>{btnText}</button>
    }
}

export default Button;