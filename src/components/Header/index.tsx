import logoImg from '../../assets/huppy-money.png'
import { Container, Content } from './styles'

export function Header(){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="at money"/>
                <button type="button">
                Nova transação
                </button>
            </Content>
        </Container>
    )
}