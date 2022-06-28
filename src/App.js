import React, { useCallback, useEffect, useState } from "react";
import { Container, Nav } from "react-bootstrap";
import "./App.css";
import Wallet from "./components/Wallet";
import { Notification } from "./components/utils/Notifications";
import Products from "./components/marketplace/Products";
import { login, logout as destroy, accountBalance } from "./components/utils/near";
import Cover from "./components/utils/Cover";
import coverImg from "./assets/img/shroomessa.png";

const App = function AppWrapper() {
  const account = window.walletConnection.account();
  const [balance, setBalance] = useState("0");
  const getBalance = useCallback(async () => {
    if (account.accountId) {
      setBalance(await accountBalance());
    }
  });

  useEffect(() => {
    getBalance();
  }, [getBalance]);
  return (
    <>
      {<Notification /> }
      {account.accountId ? (
        <Container fluid="md">
          <Nav className="justify-content-end pt-3 pb-5">
            <Nav.Item>
              <Wallet
                address={account.accountId}
                amount={balance}
                symbol="NEAR"
                destroy={destroy}
              />
            </Nav.Item>
          </Nav>
          <main>{ <Products /> }</main>
        </Container>
      ) : (
        <Cover name="Beautiful Shroomessa" login={login} coverImg={coverImg} />
      )}
    </>
  );
};

export default App;