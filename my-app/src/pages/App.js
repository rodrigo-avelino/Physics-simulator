import { useState } from "react";
import { Container } from "./style";

import InputWithLabel from "../components/inputWithLabel/inedex";

import formulaImg from "../assets/formula.png"

function App() {

  const [massa,setMassa] = useState(10)
  const [periodo,setPeriodo] = useState(1)

  function operacao(massa,periodo){
    console.log(massa)
    let k = (massa/(periodo**2))*4*(Math.PI**2)
    return k
  }

  return (
    <Container>
      <img src={formulaImg} ></img>
      <InputWithLabel label="massa(kg)" placeholder="10" onChange={e => setMassa(e.target.value)}/>
      <InputWithLabel label="periodo(s)" placeholder="1" onChange={e => setPeriodo(e.target.value)}/>
      <p>Constante elastica(K)= {operacao(massa,periodo)}</p>
    </Container>
  );
}

export default App;
