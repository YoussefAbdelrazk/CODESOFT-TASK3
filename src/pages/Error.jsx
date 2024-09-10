import { Link, useRouteError } from "react-router-dom"




export default function Error() {
  const error = useRouteError()

  if(error.status === 404) {
    return (
      <main className=" grid place-items-center min-h-[100vh]">
        <div className="text-center">
        <p className='text-9xl font-semibold text-primary'>404</p>
          <h1 className='mt-4 text-3xl font-bold tracking-tight sm:text-5xl'>
            Page not found
          </h1>
          <p className='mt-6 text-lg leading-7 '>
            Sorry, we couldn’t find the page you’re looking for.
          </p>
          <div className="mt-10">
            <Link to='/' className="btn btn-secondary">Back to Home</Link>
          </div>
        </div>
      </main>
    )
  }

  return (
    <main className=" grid place-items-center min-h-[100vh]">

      <h4 className="font-bold text-4xl text-center">there was an error...</h4>

    </main>
  )
}