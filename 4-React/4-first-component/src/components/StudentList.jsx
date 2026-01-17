const StudentList = () => {

    const students = ['Ethan', 'Sophia', 'Olivia', 'Noah', 'Ava', 'Lucas', 'Mia', 'Elijah', 'Isabella '];

  return <ol>
    {
        students.map((student, index) => <li key={student}>{student}</li>)
        // here `map` function returns an array of modified elements, React processes this array and renders the individual elements into the DOM
        
        /*
            students.map(student => <li>{student}</li>)          // `map` function returns an array of modified elements

            [ <li>Jin Kazama</li>, <li>Paul Phoenix</li>, <li>Hwoarang</li>, <li>Kazuya Mishima</li>, <li>Eddy Gordo</li>, <li>Yoshimitsu</li>, <li>King</li>, <li>Law</li>, <li>Brayan Fury</li> ]

            once execution of the above statement finished, the statement will be replaced by below line 

            <li>Jin Kazama</li><li>Paul Phoenix</li><li>Hwoarang</li><li>Kazuya Mishima</li><li>Eddy Gordo</li><li>Yoshimitsu</li><li>King</li><li>Law</li><li>Brayan Fury</li>
        */

    }
  </ol>
}


export default StudentList
// ab agar student array me koi element add ya delete hota hai to UI me apne aap adjust ho jayega, so component dynamic banane ka yeh advantage hai 



// hum JS ke ander kahi par bhi jsx likh sakte hai, not just in return statements, hum chahe to kisi variable me bhi jsx bana ke daal sakte hai
// jsx finally js me hi convert hone wali hai.
// JSX dikhta hai html ki tarah but vo JS hi hai     
// so hum poore js me kahi pr bhi jsx likh sakte hai, but agar hume jsx ke ander js likhna hai toh uske liye hume curly brackets ka use karna padta hai, curly brackets lagate hi JS ka scope shuru ho jata hai, fir hum is JS scope ke ander again jsx likh sakte hai

// Summary: js ke ander jsx use karna hai toh directly use karna start kar do but agar jsx ke ander js likhna hai toh curly bracket ke ander likhna padega.