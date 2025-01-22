import './Buttons.css'

export function DangerButton(params) {
    return (
        <button className="red-button">Delete</button>
    );
}

export function SuccessButton() {
    return (
        <button className="green-button">Save</button>
    );
}

// ideally both button ke liye alag-alag component banane chahiye but to understand `name exporting` we are combining them in single file