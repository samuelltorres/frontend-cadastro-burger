import imgBurger from "../../assets/codeburger.svg";
import { useState, useRef, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";


import {
  Container,
  Image,
  H1,
  Inputs,
  InputLabel,
  ContainerItems,
  Button,
} from "./styles.js";

function App() {
  const [orders, setOrders] = useState([]);
  const inputClientName = useRef();
  const inputOrderDetail = useRef();

  const navigate = useNavigate()


  async function addNewOrder() {
    // cadastra novos pedidos
    const response = await axios.post("http://localhost:3005/orders", {
      order: inputOrderDetail.current.value,
      name: inputClientName.current.value,
    });

    setOrders([...orders, response.data]);

    navigate("/orders")
  }



  return (
    <Container>
      <Image src={imgBurger} alt="imagem-codeburger" />
      <H1> Faça seu pedido!</H1>

      <ContainerItems>
        <InputLabel>Pedido</InputLabel>
        <Inputs
          ref={inputOrderDetail}
          type="text"
          placeholder="1 Coca-Cola, 1 X-Salada"
        />

        <InputLabel>Nome do Cliente</InputLabel>
        <Inputs ref={inputClientName} type="text" placeholder="Seu nome" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItems>
    </Container>
  );
}

export default App;
