import './App.css'
import AgeInput from './components/AgeInput'
import CheckTermsAndConditions from './components/CheckTermsAndConditions'
import EmailInput from './components/EmailInput'
import FormName from './components/FormName'
import GenderInput from './components/GenderInput'
import GradeInput from './components/GradeInput'
import NameInput from './components/NameInput'
import SubmitButton from './components/SubmitButton'

function App() {

  return (
      <>
        <div className="w-50 p-3">
          <FormName />
          <NameInput />
          <EmailInput />
          <AgeInput />
          <GradeInput />
          <GenderInput />
          <CheckTermsAndConditions />
          <SubmitButton />
        </div>      

      </>
  )
}

export default App;
