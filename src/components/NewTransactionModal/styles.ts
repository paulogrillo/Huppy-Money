import styled from 'styled-components';


export const Container = styled.form`

h2 {
     color: var(--text-title);
     font-size: 2rem;
     margin-bottom: 2rem;
}  

.button {
   
    width: 100%;
    padding: 0 1.5rem;
    height: 2rem;
    margin-top: 1.5rem;
}

input {
     color: #f1f1f1;
     width: 100%;
     padding: 0 1.5rem;
     height: 4rem;
     border-radius: 0.25rem;

     border: 1px solid #d7d7d7;
     background: #2D90A6;

     font-weight: 400;
     font-size: 1rem;
     & + input{
         margin-top: 1rem;
     }
 }

    textarea:focus, input:focus {
    color: #f1f1f1;
}

    input::placeholder{
  color: #f1f1f1;
}
    textarea:focus, input:focus{
    outline: none;
}

`;