import { useState } from "react"
import { Barra } from "./components/barra"
import { Footer } from "./components/footer"
import { Header } from "./components/header"
import { Msg } from "./components/msg"
import { HeaderPrincipal } from "./components/headerPrincipal"
import { AppRoutes } from "./routes"
import './App.css';

function App() {

  const [msg, setMsg] = useState<string[]>([
    'mensagem 1',
    'mensagem 2',
    
  ])

    function createMsg() {
      setMsg([...msg, 'nova mensagem adicionada'])
      }
 
  return (

    <AppRoutes />
 
  );
   
}

export default App



   // <div>
    //   {/* <Barra />
    //   <Header />    
    //   <HeaderPrincipal/>   
        
    //   <Footer/>  */}



    //   {/* {msg.map(msg => {
    //     return <Msg text={msg} />
    //   })}
      
    //   <button
    //    onClick={createMsg}
    //    style={{
    //       marginTop: '20px',
    //       backgroundColor: '#f00',
    //       border: 'none',
    //       padding: '10px 15px',
    //       borderRadius: '4px',
    //       color: '#FFF',
    //    }}
    //   > 
    //   Adicionar mensagem
    //   </button> */}

    // </div>