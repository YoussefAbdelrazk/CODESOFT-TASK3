import { useLoaderData, useLocation, useNavigate } from "react-router-dom"


export default function PaginionContainer() {
  const {meta} = useLoaderData()
  console.log(meta)
  const { currentPage,numberOfPages,nextPage}=meta
  const pages = Array.from({length:numberOfPages},(_,index)=>{
    return index+1
  })
  const{search,pathname}= useLocation()
  const navigate = useNavigate()
  const handlepageChange = (pageNumber)=>{
      const searchParams = new URLSearchParams(search)
      searchParams.set('page',pageNumber)
      navigate(`${pathname}?${searchParams.toString()}`)
  }
  if(numberOfPages<2)return null

  return (
    <div className="mt-16 flex justify-end">
      <div className="join">
        <button className="btn btn-xs sm:btn-md join-item" onClick={
          ()=>{
            let prevpage = currentPage -1;
            if(prevpage<1)prevpage = numberOfPages
            handlepageChange(prevpage)}} >prev</button>
        {pages.map((pageNumber)=>{
          return <button className={`btn btn-xs sm:btn-md border-none join-item ${pageNumber ===currentPage?'bg-base-300 border-base-300':''}`} key={pageNumber} onClick={()=>handlepageChange(pageNumber)}>{pageNumber}</button>
        })}
        <button className="btn btn-xs sm:btn-md join-item" onClick={()=>{
            let nextpage = currentPage +1;
            if(nextpage>numberOfPages)nextpage = 1
          handlepageChange(nextpage)}} >next</button>
      </div>
    </div>
  )
}