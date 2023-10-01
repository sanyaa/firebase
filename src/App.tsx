import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'



import Ms from './my-component/Message.tsx'
import TW from './my-component/TW.tsx'
import {ListG} from "./my-component/ListG.tsx";
import WithChild from "./my-component/WithChild.tsx";
import Movies from "./my-component/Movies.tsx";

function App() {
  const [count, setCount] = useState(0)
  const [count2, setCount2] = useState("0")


  const sayHello = () => {
      console.log("hello")
  }

  const List : number[] = [1,2,3,4]

  const fn1 = (item: string) => {
    setCount2(item)
    console.log(item)
  }


  return (
    <div className="divide-y divide-slate-50">



      <div className="flex items-start space-x-6 p-6">
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>


        <div>
            <TW/>
        </div>

        <Movies movies={[{
            title: "movie1",
            year: 2021,
            id: 1,
            image:"image",
            genre: "action",
            starRating: 5,
            runtime: 120,
            cast: "cast",
            rating: 6
        },{
            title: "movie2",
            year: 2022,
            id: 2,
            image:"image",
            genre: "action",
            starRating: 5,
            runtime: 120,
            cast: "cast",
            rating: 5
        },{
            title: "movie3",
            year: 2023,
            id: 3,
            image:"image",
            genre: "action",
            starRating: 5,
            runtime: 120,
            cast: "cast",
            rating: 5
        },]} />


        <div>

          <button onClick={sayHello}>click</button>
      </div>

        <div>count2-item {count2}</div>


        <h1>MS below</h1>
      <Ms />
      <ListG List={List} fn={sayHello} fn1={fn1}/>

      <hr/>

        <ListG List={List} fn={sayHello} fn1={fn1} option={'a'}/>
      <WithChild>
          hello Child Element
      </WithChild>
    </div>
  )
}

export default App
