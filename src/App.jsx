import imgBurger from "./assets/codeburger.svg";
import imgLixeira from "./assets/lixeira.svg";
import { v4 as uuid } from "uuid";
import { useState } from "react";

import {
  Container,
  Image,
  H1,
  Inputs,
  InputLabel,
  ContainerItems,
  Button,
  Orders,
} from "./styles.js";

function App() {
  const [orders, setOrders] = useState([]);
  const [name, setName] = useState([]);
  const [order, setOrder] = useState([]);

  function addNewOrder() {
    setOrders([{ id: uuid(), order, name }]);
    console.log(orders);
  }

  function changeInputOrder(event) {
    setOrder(event.target.value);
  }

  function changeInputName(event) {
    setName(event.target.value);
  }

  return (
    <Container>
      <Image src={imgBurger} alt="imagem-codeburger" />
      <H1> Faça seu pedido!</H1>

      <ContainerItems>
        <InputLabel>Pedido</InputLabel>
        <Inputs
          onChange={changeInputOrder}
          type="text"
          placeholder="1 Coca-Cola, 1 X-Salada"
        />

        <InputLabel>Nome do Cliente</InputLabel>
        <Inputs onChange={changeInputName} type="text" placeholder="Seu nome" />

        <Button onClick={addNewOrder}>Novo Pedido</Button>
      </ContainerItems>

      <ul>
        {orders.map((order) => (
          <Orders key={order.id}>
            <div>
              <p>{order.order}</p> <p>{order.name}</p>
            </div>
            <button>
              <img src={imgLixeira} alt="excluir" />
            </button>
          </Orders>
        ))}
      </ul>
    </Container>
  );
}

export default App;
