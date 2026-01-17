import './App.css'
import { Button } from './components/SubmitButton'
import { DangerButton, SuccessButton } from './components/Buttons'
// import Heading from './components/heading'
import Paragraph from './components/Paragraph'
import DynamicComponent from './components/DynamicComponent'
import StudentList from './components/StudentList'
import RandomNumber from './components/RandomNumber'

/* import paragraph1 from './components/Paragraph'         // Wrong, name must start with an uppercase letter

When importing a default export, you can rename it to anything, but the name must follow React's convention for components ie. name must starts with an uppercase letter, or React will treat it as a regular HTML element, which causes an error.

        import Paragraph1 from './components/Paragraph'         // Right
*/

function App() { 

  return (
    <>
      {/* we learn how to create custom class component */}
      {/* <Heading /> */}

      {/* we learn how to create custom functional component */}
      <Paragraph />

      {/* <paragraph1 />    // React thinks `paragraph1` is a standard HTML tag, not a custom component, and will throw an error.*/}
      {/* <Paragraph1 />    // Right approach*/}

      {/* we learn how we can use `named export` */}
      <DangerButton />
      <SuccessButton />
      <Button />

      {/* we learn how we can make a component `dynamic`  */}
      <DynamicComponent />
      <StudentList />

      {/* Reusable component */}
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />
      <RandomNumber />

    </>
  );
}

export default App

/* Basis you should break you page into components:

1. Single Responsibility Principle
  - Each component should have one clear purpose.
  - For example, if you have a form, you might break it into components for the input fields, buttons, and the form itself.
      -Example:
          - Form
          - TextInput
          - SubmitButton

2. Reusability
  - Look for parts of the UI that can be reused elsewhere.
  - Example: A `Card` component can be reused for displaying user profiles, product details, or blog posts.

3. Logical Grouping
  - Group related UI elements together into a single component.
    - Example: A navigation bar might be broken into:
        - Navbar
        - NavItem
        - DropdownMenu

4. Data and State Boundaries
    - Components that manage their own state should encapsulate the related UI logic. If a parent component manages state, break the children down to handle presentation only.
        - Example: A `TodoList` component could contain:
            - `TodoItem` (stateless, purely presentation)
            - `TodoInput` (handles adding new todos)

5. UI Consistency
    - If a piece of UI looks distinct, it can be a separate component.
        - Example:
            - A header for the page can be a `Header` component.
            - The footer can be a `Footer` component.

          
6. Avoid Over-Splitting
    - Don’t make components so small that they become meaningless or hard to manage.
        - Example: Avoid splitting a single paragraph of text into its own component unless it is absolutely necessary.

7. Props-Driven Design
    - If you need to pass data between parent and child components, that might be a good indication to create separate components.
      - Example: A `ProductList` component that renders a list of `ProductCard` components by passing product data as props.

8. UI Layout vs. Logic
    - Separate layout (container components) from logic (presentation components).
        - Example:
            - `UserListContainer` (fetches data and manages state)
            - `UserList` (displays the data)      

*/
