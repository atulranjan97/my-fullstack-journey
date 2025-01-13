let GenderInput = () => {
    return <div className="mb-3">

        <label for="gender" className="form-label">Gender</label>
        {/* Male Radio Button */}
        <div className="form-check" id="FormControlInput5">
            <input className="form-check-input" type="radio" name="gender" id="male" />
            <label className="form-check-label" for="male">
                Male
            </label>
        </div>

        {/* Female Radio Button */}
        <div class="form-check" id="FormControlInput5">
            <input className="form-check-input" type="radio" name="gender" id="female" />
            <label className="form-check-label" for="female">
                Female
            </label>
        </div>

        {/* Other Radio Button */}
        <div class="form-check" id="FormControlInput5">
            <input className="form-check-input" type="radio" name="gender" id="other" />
            <label className="form-check-label" for="other">
                Other
            </label>
        </div>
    </div>

}

export default GenderInput;