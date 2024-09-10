

export default function FormInput({label ,type,name , value,size ,handleChange,handleBlur }) {
  return (
    <label className="form-control ">
  <div className="label">
    <span className="label-text">{label}</span>

  </div>
  <input onChange={handleChange} onBlur={handleBlur} value={value} name={name} type={type} placeholder="Type here" className={`input input-bordered ${size}`} />
  
</label>
  )
}