import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

    *{
        -webkit-box-sizing: border-box;
        -moz-box-sizing: border-box;
        box-sizing: border-box;
       
    }
    body{ 
        background-color: ${({ theme }) => theme.bkColor} ; 
        font-family: ${(props) => props.font};
        color: ${({ theme }) => theme.fontColor} ; 
        -webkit-zoom: 95%;
        -moz-zoom: 95%;
        zoom: 95%;
    }

    ul { 
        padding: 0 ;
        list-style: none ; 
    }

    a {
        text-decoration: none ; 
        color: inherit ;
    }

    p{
        opacity: 0.6 ;
        line-height: 1.5 ; 
    }

    img { 
        max-width: 100% ; 
    }
    button {
        font-family: inhehrit ;
    }
  
`;
export default GlobalStyles;
