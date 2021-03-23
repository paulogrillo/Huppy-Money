import styled from "styled-components";

export const Container = styled.div `
@media(max-width: 800px) {
    display: grid;
    grid-template-columns: repeat(1, 1fr);
    gap: 1rem;
    margin-top: -10rem;
  }
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    gap: 2rem;
    margin-top: -10rem;

    div {
        background: var(--shape);
        padding: 1.5rem 2rem;  
        border-radius: 0.25rem;
        color: var(--text-title);
    header {
        display: flex;
        align-items: center;
        justify-content: space-between;
        
    }

    strong {
        display: block;
        margin-top: 1rem;
        font-size: 2rem;
        font-weight: 500;
        line-height: 3rem;
    }
    &.highlight-background {
        background: var(--blue-total);
        color: #fff;
    }
    }
`;
