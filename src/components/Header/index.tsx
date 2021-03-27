import logoImg from '../../assets/huppy-money.png'
import { Container, Content } from './styles'


interface Headerprops {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: Headerprops){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="at money"/>
                <button type="button" onClick={onOpenNewTransactionModal}>
                Nova transação
                </button>


            </Content>
        </Container>
    )
}