import { useEffect, useState } from 'react';
import { api } from '../../services/apis';
import {Container} from './styles'

interface Transactions{
    id: number;
    title: string;
    amount: number;
    type: string;
    createdAt: string;
}

export function TransactionsTable(){
    
    const [transactions, setTransactions] = useState<Transactions[]>([]);
    
    useEffect(() => {
        api.get('/transactions')
        .then(response => setTransactions(response.data.transactions))
    }, []);
    
    return(
    <Container>
        <table>
        <thead>
        <tr>
            <th>Tútulo da transação</th>
            <th>Valor</th>          
            <th>Data</th>

        </tr>
        </thead>

        <tbody>

        {transactions.map(transactions => (
            
            <tr key={transactions.id}>
                <td>{transactions.title}</td>
                
                <td className={transactions.type}> 
                {new Intl.NumberFormat('pr-br', {
                    style: 'currency',
                    currency: 'BRL'
                } ).format(transactions.amount)}
                </td>
                <td>
                {new Intl.DateTimeFormat('pr-br', {
                   
                } ).format(
                    new Date(transactions.createdAt)
                )}
                </td>
            </tr>
         
        ))}
        </tbody>

          </table>
      </Container>
    );
}