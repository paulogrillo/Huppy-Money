import styled from 'styled-components';


export const Container = styled.form`

h2 {
     color: var(--text-title);
     font-size: 2rem;
     margin-bottom: 2rem;
}  

button[type="submit"] {
    width: 100%;
    padding: 0 1.5;
    background: var(--green);
    color: #f1f1f1; 
    border-radius: 0
    .25rem;
    border: 0;
    outline: none;
    font-size: 1.9rem;
    font-weight: 600;
    margin-top: 2.5rem;

    transition: 0.5s;

    &:hover {
        background: #12A630;
        
        
    }

}


input {
     color: #aaaaaa;
     width: 100%;
     padding: 0 1.5rem;
     height: 4rem;
     border-radius: 0.25rem;

     border: 1px solid #d7d7d7;
     background: #eff9;

     font-weight: 400;
     font-size: 1.2rem;
     & + input{
         margin-top: 1rem;
        
      
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



`;

export const TransactionTypeContainer = styled.div`

`;