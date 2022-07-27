import '../submit-form/form.styles.scss';
const FormInput=({label,...other})=>{
    return (
        <div className="group">
            <input className="form-input" {...other}/>

            {label && (
                  <label 
                  className="form-input-label" >{label}</label>
            )}
          
            {/* <input className="form-input" {...other}/> */}
        </div>
        
    )
};
export default FormInput;