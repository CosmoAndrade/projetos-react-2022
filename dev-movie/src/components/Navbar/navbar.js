import styled from "styled-components";


export const Header = styled.header`

   display: flex;
    align-items: center;
    justify-content: space-between;
    background-color:#4D41C0;
    color: white;
    height: 70px;
    padding: 0 2%;

   


`;

export const Nav = styled.nav`

    display: flex;
    align-items: center;
   

  

    h1{
        font-size: 24px;
        font-weight: 700;
    }

    a {
        font-size: 12px;
        font-weight: 400;
        color: white;
        text-decoration: none;
    }

    a:hover {
        
        color: gold;
    }



`;


export const Container = styled.div`

    display: flex;
    align-items: center;

    a {
        font-size: 20px;
        font-weight: 700;
        color: #4D41C0;
        text-decoration: none;
        background-color: white;
        padding: 10px 20px;
        border-radius: 10px;
    }

    a:hover {
        
        color: red;
    }


`;