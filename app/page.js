import Add from "./components/Add"
import Container from "./components/Container"

const App=()=>{
  return(
    <div className="min-h-[76vh]">

      <Add />
      <h1 className="text-3xl font-bold text-center underline underline-offset-4 mt-6"> Your List Items </h1>
      <Container />
    </div>
  )
}

export default App