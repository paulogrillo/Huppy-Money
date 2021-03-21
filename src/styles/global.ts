import {createGlobalStyle} from 'styled-components'

export const GlobalStyle = createGlobalStyle `

:root {
    --backgound: #eff;
    --red: #e52e4d;
    --blue: #F2DDB6;
    --shape-table: #29D2;
    --myheader: #2D90A6;
    --blue-ligth: #D95E52;
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
    background: var(--backgound);
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

`