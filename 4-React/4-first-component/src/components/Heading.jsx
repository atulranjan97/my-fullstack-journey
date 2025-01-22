import { Component } from "react";
import './Heading.css';

// (Class Component)

// define a class `Heading` by inheriting class 'Component' from "react"
class Heading extends Component {
    render() {
        return <h1 className='heading'>Class vs Function Component</h1>;
    }
    // this `render` method is already defined in `Component` class by React, we are overriding this method(through inheritance) 
}
// React me already `Component` naam ki class bani hai jisko hum apne is file me pehle import karke apne 'Heading' class me inherit kar rahe hai. `render` naam ka method 'Component' class me defined hai jiski value hum apni `Heading` class me override kar rahein hai, jo bhi file humare is component ko import karne ke baad call karegi tb is render method me define UI code return ho jayega us file me.

export default Heading;

// for this class(Heading) to become a react component, there are two simple steps
    // 1. It should extend the component class from react
    // 2. The class has to implement a render method which will return null or some HTML
    
// We successfully created our class component
// Export the `Heading` class from Heading.jsx, import it in `app.jsx` and then include in the app component.
