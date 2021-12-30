import React, {useContext} from 'react';
import incomeImg from '../../assets/income.svg';
import outcomeImg from '../../assets/outcome.svg';
import totalImg from '../../assets/total.svg';
import { TransactionsContext } from '../../TransactionsContexts';



import { Container } from "./styles";

export function Summary(){
    const data = useContext(TransactionsContext)
    console.log(data);
    return (
        
     <Container>
         <div>
             <header>
                 <p>Entradas</p>
                 <img src={incomeImg} alt="Entradas"/>
             </header>
             <strong> R$ 14,200,00</strong>
         </div>

         <div>
             <header>
                 <p>Saídas</p>
                 <img src={outcomeImg} alt="Saídas"/>
             </header>
             <strong>- R$ 3.200,00</strong>
         </div>

         <div className="highlight-background">
             <header>
                 <p>Total</p>
                 <img src={totalImg} alt="total"/>
             </header>
             <strong>R$ 11.000,00</strong>
         </div>
     </Container>
    );
}