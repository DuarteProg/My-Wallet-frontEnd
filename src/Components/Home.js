import styled from "styled-components";
import { Link } from "react-router-dom";
import { useState, useContext, useEffect } from "react";
import axios from "axios";

export default function Home() {
  const [transacoes, setTrasacoes] = useState([]);
  const { user } = useContext;
  const URL = "http://localhost:5000/cashIn";

  useEffect(() => {
    async function calma() {
      try {
        const response = await axios.get(URL, {
          headers: {
            Authorization: `Bearer ${user.token}`,
          },
        });
        setTrasacoes(response);
      } catch (error) {}
    }
    calma();
  }, []);

  if (transacoes.length > 0) {
    return transacoes.map((transaction, index) => {
      const { description, value } = transaction;
      return <Transation key={index}
       description={description} 
      value={value} />;
    });
  }

  return (
    <Container>
      <Header>
        <h1>Olá, Fulano!</h1>
        <ion-icon name="log-out-outline"></ion-icon>
      </Header>
      <Main>
        <h4>There is no entry or exit record</h4>
      </Main>
      <Footer>
        <Link to={`/input`}>
          <Right>
            <ion-icon name="add-circle-outline"></ion-icon>
            <h3>New In</h3>
          </Right>
        </Link>
        <Link to={`/output`}>
          <Left>
            <ion-icon name="remove-circle-outline"></ion-icon>
            <h2>New Out</h2>
          </Left>
        </Link>
      </Footer>
    </Container>
  );
}

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background: #8c11be;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

const Header = styled.div`
  display: flex;
`;

const Main = styled.div`
  width: 326px;
  height: 446px;
  background: #ffffff;
  border-radius: 5px;
  h4 {
    margin-top: 200px;
    display: flex;
    justify-content: center;
  }
`;

const Footer = styled.div`
  display: flex;
`;

const Right = styled.div`
  width: 155px;
  height: 114px;

  background: #a328d6;
  border-radius: 5px;
`;

const Left = styled.div`
  width: 155px;
  height: 114px;

  background: #a328d6;
  border-radius: 5px;
`;
