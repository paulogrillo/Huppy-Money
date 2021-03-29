import styled from 'styled-components';

import {darken, transparentize} from 'polished';



export const Container = styled.form`

h2 {
     color: var(--text-title);
     font-size: 2rem;
     margin-bottom: 2rem;
    
}  

button[type="submit"] {
    width: 100%;
    height: 5rem;
    padding: 0 2.5;
    background: var(--green);
    color: #f1f1f1; 
    border-radius: 0
    .25rem;
   
    border: 1px solid #d7d7d7;
    outline: none;
    font-size: 1.9rem;
    font-weight: 600;
    margin-top: 2.5rem;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    transition: 0.5s;

    &:hover {
        background: transparent;
        color: var(--myheader);
        border: 0.25rem solid #75DBB9;
       
        
    }
    

}

.input-title {
    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};        
    }
}

.resumo {
    margin-bottom: 1.8rem;
    color: var(--myheader);
}

input {
     color: #aaaaaa;
     width: 100%;
     padding: 0 1.5rem;
     height: 4rem;
     border-radius: 0.25rem;

     border: 1px solid #d7d7d7;
     background: #eff9;
     outline: none;
     font-weight: 400;
     font-size: 1.2rem;
     & + input{
         margin-top: 1rem;

    &:hover{
    border-color: ${darken(0.1, '#d7d7d7')};
    
        
      
     }
     & + input::placeholder{
    color: #aaaaaa;
    font-size: 1.2rem;
}
 }

    textarea:focus, input:focus {
    color: #aaaaaa;
    font-size: 1.2rem;
}

    input::placeholder{
    color: #aaaaaa;
    font-size: 1.2rem;
}
    textarea:focus, input:focus{
    outline: none;
}

}

`;

export const TransactionTypeContainer = styled.div`
    margin: 1rem 0;
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.5rem;
`;

interface RadioBoxProps {
    isActive: boolean;
    activeColor: 'green' | 'red';
};

const colors = {
    green: '#33CC95',
    red: '#E52E4D'
};

export const RadioBox = styled.button<RadioBoxProps> `
    
    height: 4rem;
    border: 1px solid #d7d7d7;
    border-radius: 0.25rem;

    background: ${(props) => props.isActive 
    ? transparentize(0.8, colors[props.activeColor])
    : 'transparent'
    
    };

    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;

    &:hover{
        border-color: ${darken(0.1, '#d7d7d7')};
    &:active{
        border-color: var(--myheader);
    }
    }

    img{
        width: 26px;
        height: 20px;
    }
    span{
        display: inline-block;
        margin-left: 1rem;

        font-size: 1rem;
        color: var(--text-title);

    }

`;