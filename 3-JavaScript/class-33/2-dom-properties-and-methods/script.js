// DOM and element properties 

    // Returns the URL of the current document as a Location object
    document.location;

    // Returns or sets the title of the current document
    document.title;

    // Returns or sets the complete URL (as a string) of the current document
    document.location.href;

    // Returns the domain name of the current document
    document.domain;
// open google.com -> console tab-> (copy paste the above code in google.com console tab and see the behaviour of above properties )


    // Gets or sets the HTML content of an element, including tags
    document.querySelector().innerHTML;

    // Gets or sets the visible text content of an element, ignoring HTML tags
    document.querySelector().innerText;

    // Provides methods to add, remove, or toggle classes on an element
    document.querySelector().classList;


    // classList:add(), remove()
    // createElement()
    // appendChild()
    // removeChild()
    // replaceChild()


    // In browsers, `window` is the global object; 
    // In Node.js, `global` is the global object. 
    // Both provide access to environment-specific APIs, but Node does not have DOM/browser-related objects.