// don't forget if you need to use any state modifiers or browser capabilities like 'alert' to designate the file "use client"
"use client"

// import useState, useEffect for hooks
import { useState, useEffect} from 'react'
import Image from 'next/image'

export default function Home() {

  {/* create a hook for the data coming from the backend  */}

  const [data, setData] = useState(null);
  
  {/* any functionality needs to be inside of the export, can't be outside */}

  {/* useEffect code block determines what happens on page load/refresh 
      going to use a fetch request from the front end to the backend 
      fetch requests require a try/catch block and need to be async/await 
      we make our fetch request to the endpoint and asign the value to response 
      we convert the response into a json object and assign the value to result
      we change the state of data by assigning it the value of result which lets use it inside of our jsx rendering
      don't forget that after defining the fetch function to call it
      useEffect ends with , [] to signal this to happen on first page load */}

  const fetchData = async () => {
    try {
      const response = await fetch('/api/jokeresponse')
      const result = await response.json();
      console.log(result)
      setData(result);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <div>
      <button className='bg-white rounded-md p-4'
        onClick={fetchData}
      >
        Click Me
      </button>
      </div>
    </main>
  )
}
