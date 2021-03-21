import styled from "styled-components";

export const Container = styled.div`
    margin-top: 4rem;

    table {
        width: 100%;
        border-spacing: 0 0.5rem;
        
        th {
            color: var (--text-body);
            font-weight: 400;
            padding: 1rem 2rem;
            text-align: left;
            line-height: 1.5;
        }
        td {
            padding: 1rem 2rem;
            border: 0;
            background: var(--shape-table);
            color: var(--text-body);
            
        
            
            &:first-child {
            color: var(--text-title);
        }
            &.deposit {
                color: var(--green);
            }
            &.widthdraw {
                color: var(--red);
            }
    }
}
`;