import Modal from 'react-modal';
import { Container, TransactionTypeContainer, RadioBox } from './styles';
import closeImg from '../../assets/close.svg'
import incomeImg from '../../assets/income.svg'
import outcomeImg from '../../assets/outcome.svg'
import { useState } from 'react';
import { FormEvent } from 'react';
import { api } from '../../services/apis';

interface NewTransactionModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
}
export function NewTransactionModal({ isOpen, onRequestClose}: NewTransactionModalProps){
    
    const [title, setTitle] = useState('');
    const [value, setValue] = useState(0);

    const [type, setType] = useState('deposit');

    function handleCreateNewTransaction(event: FormEvent){
        event.preventDefault();

        const data = {
            title,
            value,
            type,
        };

        api.post('/transactions', data)
    }


    return(
        <Modal 
            isOpen={isOpen} 
            onRequestClose={onRequestClose}
            overlayClassName="react-modal-overlay"
            className="react-modal-content"
        >
            <button 
            type="button" 
            onClick={onRequestClose}
            className="react-modal-closed"
            >
                <img src={closeImg} alt="Fechar modal"/>
            </button>

        <Container onSubmit={handleCreateNewTransaction}>
            <h2>Cadastrar transação</h2>
            <p className="resumo">Registre uma nova atividade financeira.</p>
            
            <input 
                placeholder="Título"
                className="input-title"
                value={title}
                onChange={event => setTitle(event.target.value)}
            />
            
            <input 
                type="number" 
                placeholder="Valor"
                value={value}
                onChange={event => setValue(+event.target.value)}

            />
    <TransactionTypeContainer>
        <RadioBox 
            type="button"
            onClick={() => { setType('deposit'); }}
            isActive={type === 'deposit'}
            activeColor="green"
            >
                <img 
                    src={incomeImg} 
                    alt="Entradas"
                />
                <span>Entrada</span>
        </RadioBox> 
            
        <RadioBox 
            type="button"
            onClick={() => { setType('withdraw'); }}
            isActive={type === 'withdraw'}
            activeColor="red"
            >
                <img 
                    src={outcomeImg} 
                    alt="Saida"
                />
                <span>Saida</span>
        </RadioBox> 



    </TransactionTypeContainer>

           <button 
            type="submit"
            className="button"
            >
               Cadastrar
           </button>

          

        </Container>   
        </Modal>
    );
}