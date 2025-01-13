const DynamicComponent = () => {
    const studentName = 'Atul';
    const marks = [23, 45, 67, 98, 54];

    const calPercentage = () => {
        let sum = 0;
        for (let i = 0; i < marks.length; i++) {
            sum += marks[i];
        }
        return sum / marks.length;
    }

    return <p>{studentName} scored {calPercentage()}% marks.</p>
}

export default DynamicComponent

// jsx can be written any where in the component  
// we generally write jsx code in return statement of the component
// if we want to make our component dynamic, we can achieve it by writing js code within jsx.
// we can include js code (like variables, expressions, functions etc) within jsx by enclosing it in curly brackets, elsewhere js code can be written directly without having it enclosed.