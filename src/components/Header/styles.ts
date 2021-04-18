import styled from 'styled-components'

export const Container = styled.header `
    background-color: var(--myheader);
`;

export const Content = styled.div `
    max-width: 1120px;
    margin: 0 auto;

    padding: 2rem 1rem 12rem;
    display: flex;
    align-items: center;
    justify-content: space-between;

img {
     

 }
 button {
    font-size: 1.5rem;
    color: #fff;
    background: var(--blue-ligth);
    border: 0;
    padding: 0 1rem;
    border-radius: 0.25rem;
    height: 3rem;
transition: filter 0.2s;
outline: none;
&:hover {
    filter: brightness(0.9)
}

}

.button-icon {
    width: 1.6rem;
    height: 1.6rem;

    @media (max-width: 700px){
            width: 2rem;
            height: 2rem;

        }

}



`;