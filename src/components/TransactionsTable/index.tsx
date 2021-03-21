import {Container} from './styles'
export function TransactionsTable(){
    return(
    <Container>
        <table>
        <thead>
        <tr>
            <th>Tútulo</th>
            <th>Valor</th>
            <th>Categoria</th>
            <th>Data</th>

        </tr>
        </thead>

        <tbody>
            <tr>
                <td>Desenvolvimento de website</td>
                <td className="deposit">R$ 12.00</td>
                <td>Desenvolvimento</td>
                <td>20/02/21</td>
            </tr>

            <tr>
                <td>Aluguel</td>
                <td className="widthdraw">-R$ 20.00</td>
                <td>Casa</td>
                <td>18/03/21</td>
            </tr>


            </tbody>

          </table>
      </Container>
    );
}