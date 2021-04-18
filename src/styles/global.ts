import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `

:root {
    --background: #eff;
    --red: #e52e4d;
    --blue: #F2DDB6;
    --shape-table: #29D2;
    --myheader: #2D90A6;
    --blue-ligth: #2CDB78;
    --blue-total: #33b564;
    --green: #33b564;

    --text-title: #2A678C;
    --text-body: #91Aeb9;
    --shape: #ffff;
}

* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}

// font-size: 16px (desktop)

html {
    @media (max-width: 1080px) {
        font-size: 93.75%; // 15px
    }
    @media (max-width: 720px) {
        font-size: 87.5%; // 14px
    }
}

body {
    background: var(--background);
    --webkit-font-smoothing: antialiased;
}

body, input, textarea, button {
    font-family: 'Poppins', sans-serif;
    font-weight: 400;

}

h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
}

button {
    cursor: pointer;
}

[disabled] {
    opacity: 0.6;
    cursor: not-allowed;
}

.react-modal-overlay {
    background: rgba(0, 0, 0, 0.5);

    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;

    display: flex;
    align-items: center;
    justify-content: center;
    outline: none;
}

.react-modal-content {
    width: 100%;
    max-width: 576px;
    background: var(--background);
    padding: 3rem;
    position: relative;
    border-radius: 0.24rem;
    outline: none;
}

.react-modal-closed {
    position: absolute;
    right: 2.5rem;
    border: 0;
    background: transparent;
    outline: none;
    transition: filter 0.2s;

    &:hover {
        filter: brightness(0.8);
    }
}



`