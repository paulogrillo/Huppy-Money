import { useEffect } from 'react';
import { api } from '../../services/apis';
import {Container} from './styles'

export function TransactionsTable(){

    useEffect(() => {
        api.get('/transactions')
        .then(response => console.log(response.data))
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
            <tr>
                <td>Salário</td>
                <td className="deposit">R$ 12.700</td>
                <td>20/02/21</td>
            </tr>

            <tr>
                <td>Aluguel</td>
                <td className="widthdraw">-R$ 2.850</td>
                <td>18/03/21</td>
            </tr>

            <tr>
                <td>Freela</td>
                <td className="deposit">R$ 1.500</td>
                <td>20/02/21</td>
            </tr>


            <tr>
                <td>Compras</td>
                <td className="widthdraw">-R$ 300.00</td>
                <td>20/02/21</td>
            </tr>

            <tr>
                <td>Plano de Telefone</td>
                <td className="widthdraw">-R$ 50.00</td>
                <td>18/03/21</td>
            </tr>


            </tbody>

          </table>
      </Container>
    );
}