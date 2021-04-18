import logoImg from '../../assets/huppy-money.png'
import { Container, Content } from './styles'
import {FiEdit} from 'react-icons/fi'

interface Headerprops {
    onOpenNewTransactionModal: () => void;
}

export function Header({onOpenNewTransactionModal}: Headerprops){
    return(
        <Container>
            <Content>
                <img src={logoImg} alt="Huppy money"/>

                <button type="button" onClick={onOpenNewTransactionModal}>
                <FiEdit 
                    className="button-icon"
                />
              
                </button>                
                
                
            </Content>
        </Container>
    )
}