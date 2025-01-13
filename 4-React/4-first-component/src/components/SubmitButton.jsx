const Button = () => {
    return <button>Submit</button>;
}


// When using a named export, you must wrap the export with curly braces {} to indicate that it’s a named export.
export { Button };

/* Alternatively, you could declare the export inline:

    export const Button = () => {
        return <button>Click Me</button>;
    }
*/


// When importing a named export, you must use curly braces:    
    // import { Button } from './components/Button';
