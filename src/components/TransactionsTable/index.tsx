import { useEffect } from 'react';
import {Container} from './styles'

export function TransactionsTable(){

    useEffect(() => {
        fetch('http://locahost:3000/api/transactions')
    }, []);
    
    return(
    <Container>
        <table>
        <thead>
        <tr>
            <th>Tútulo da transação</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>

        </tr>
        </thead>

        <tbody>
            <tr>
                <td>Salário</td>
                <td className="deposit">R$ 12.700</td>
                <td>Trabalho</td>
                <td>20/02/21</td>
            </tr>

            <tr>
                <td>Aluguel</td>
                <td className="widthdraw">-R$ 2.850</td>
                <td>Casa</td>
                <td>18/03/21</td>
            </tr>

            <tr>
                <td>Freela</td>
                <td className="deposit">R$ 1.500</td>
                <td>Marketing</td>
                <td>20/02/21</td>
            </tr>


            <tr>
                <td>Compras</td>
                <td className="widthdraw">-R$ 300.00</td>
                <td>Mercado</td>
                <td>20/02/21</td>
            </tr>

            <tr>
                <td>Plano de Telefone</td>
                <td className="widthdraw">-R$ 50.00</td>
                <td>Outros</td>
                <td>18/03/21</td>
            </tr>


            </tbody>

          </table>
      </Container>
    );
}