import imgSacola from "../../assets/sacola.svg";
import imgLixeira from "../../assets/lixeira.svg";
import { v4 as uuid } from "uuid";
import { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

import {
  Container,
  Image,
  H1,
  ContainerItems,
  Button,
  OrderDetail,
} from "./styles.js";

function Orders() {
  const [orders, setOrders] = useState([]);
  const navigate = useNavigate()

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

  function goBackPage(){
    navigate('/')
  }


  return (
    <Container>
      <Image src={imgSacola} alt="imagem-codeburger" />
      <H1> Pedidos</H1>

      <ContainerItems>
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
      <Button onClick={goBackPage}>Voltar</Button>
      </ContainerItems>
    </Container>
  );
}

export default Orders;
