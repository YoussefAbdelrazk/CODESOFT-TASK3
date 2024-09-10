


export default function SubmitBtn({text,isloading}) {


  return (
      <button   type="submit" className=" btn btn-primary btn-block">
        { isloading ? <> <span className=" loading loading-spinner"></span> sending... </>  : text}
         
      </button>
  )
}