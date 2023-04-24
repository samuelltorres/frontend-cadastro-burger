import imgBurger from "../assets/codeburger.svg";
import imgLixeira from "../assets/lixeira.svg";
import { v4 as uuid } from "uuid";
import { useState, useRef, useEffect } from "react";
import axios from "axios";

import {
  Container,
  Image,
  H1,
  Inputs,
  InputLabel,
  ContainerItems,
  Button,
  OrderDetail,
} from "./styles.js";

function App() {
  const [orders, setOrders] = useState([]);
  const inputClientName = useRef();
  const inputOrderDetail = useRef();


  async function addNewOrder() {
    // cadastra novos pedidos
    const response = await axios.post("http://localhost:3005/orders", {
      order: inputOrderDetail.current.value,
      name: inputClientName.current.value,
    });

    setOrders([...orders, response.data]);
  }



  useEffect(() => {
    async function fetchOrders() {
      // pega todos os pedidos cadastrados
      const response = await axios.get("http://localhost:3005/orders");
      setOrders(response.data);
    }
    fetchOrders()
  }, []);



  async function deleteOrder(orderId) {
    await axios.delete(`http://localhost:3005/orders/${orderId}`)

    const newOrders = orders.filter((orderUnit) => orderUnit.id !== orderId);
    setOrders(newOrders);
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

      <ul>
        {orders.map((orderUnit) => (
          <OrderDetail key={orderUnit.id}>
            <div className="listOrder">
              <p className="order-client">{orderUnit.order}</p>{" "}
              <p className="clientName">{orderUnit.name}</p>
            </div>
            <button onClick={() => deleteOrder(orderUnit.id)}>
              <img src={imgLixeira} alt="trash-delete" />
            </button>
          </OrderDetail>
        ))}
      </ul>
    </Container>
  );
}

export default App;
