import { Dashboard } from "./components/Dashboard";
import {useState} from 'react'
import { Header } from "./components/Header";
import { GlobalStyle } from "./styles/global";

import Modal from 'react-modal'

Modal.setAppElement('#root');

export function App() {
  const [isNewTransactionModalOpen, setIsNewTransactionOpen] = useState(false);

  function handleOpenNewTransactionModal(){
      setIsNewTransactionOpen(true);
  }

  function handleCloseNewTransactionModal(){
      setIsNewTransactionOpen(false);
  }

  return (
    <>
      <Header onOpenNewTransactionModal={handleOpenNewTransactionModal} />
      <Dashboard />

      <Modal 
        isOpen={isNewTransactionModalOpen} 
        onRequestClose={handleCloseNewTransactionModal}
        >
      
            <label>
            <small id="emailHelpId" className="form-text text-muted">Help text</small>
            </label>
           
            
          
            <h2>Cadastrar trasação</h2>
        </Modal>
      <GlobalStyle />
    </>
  );
}
