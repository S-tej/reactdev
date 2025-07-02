
import './App.css'
import Card from './components/Card'

function App() {

  // let myObj = {
  //   username : "swaran",
  //   age : 19
  // }

  return (
    <>
      <h1 class="text-3xl font-bold bg-green-400 text-black p-4 rounded-xl mb-4 flex"> Tailwind Test </h1>
       <Card username ="swaran" price={20}/>
       <Card username ="srujan" price={16}/>
    </>
  )
}

export default App
