import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
    *{
        margin:0;
        padding: 0;
        box-sizing: border-box;
        list-style: none;
        text-decoration: none;
        font-family: 'IBM Plex Sans', sans-serif;
    }

    html{
        font-size: 62.5%;
        scroll-behavior: smooth;
        min-height: 100%;
        position: relative;
    }

    body{
        position: relative;
        min-height: 100%;
     }
     
    .wrapper{
        padding-top: 12rem;
    }

    .loading{
        /* border: 1px solid red; */
        display: flex;
        justify-content: center;
        align-items: center;
        min-height: 500px;
    }

    .loading_img{
        width: 70px;
        display: block;
        text-align: center;
    }


    @media (max-width : ${({ theme }) => theme.media.mobile}){
        .wrapper{
            padding-top: 8rem;
        }
    }
`;
