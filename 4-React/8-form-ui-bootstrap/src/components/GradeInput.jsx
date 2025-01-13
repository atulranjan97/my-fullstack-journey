let GradeInput = () => {
    return <>
        <label for="grade" className="form-label">Grade</label>
        <select className="form-select mb-3" id="grade" aria-label="Default select example">
          <option selected>Select your grade</option>
          <option value="1">A+</option>
          <option value="2">A</option>
          <option value="3">B+</option>
          <option value="4">B</option>
          <option value="5">C+</option>
          <option value="6">C</option>
          <option value="7">D</option>
          <option value="8">F</option>
        </select>
    </>
}

export default GradeInput;