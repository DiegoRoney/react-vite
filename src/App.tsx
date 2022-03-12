import { useState } from "react"
import { Barra } from "./components/barra"
// import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Msg } from "./components/msg"
//import { HeaderPrincipal } from "./components/headerPrincipal"


function App() {

  const [msg, setMsg] = useState<string[]>([
    'mensagem 1',
    'mensagem 2',
    'mensagem 3',
    'mensagem 4',
  ])

    function createMsg() {
      setMsg([...msg, 'nova mensagem'])
      }
 
  return (
    <div>
      <Barra />
      <Header />
      {/* <HeaderPrincipal/> */}
      {/* <Footer/> */}
      
      {msg.map(msg => {
        return <Msg text={msg} />
      })}


      <button onClick={createMsg} > adicionar mensagem</button>

    </div>
  )  
   
}

export default App
