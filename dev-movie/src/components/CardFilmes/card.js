import styled from "styled-components";

export const Container = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
   
    flex-wrap: wrap;
    padding: 25px 0;
    
   
   

`;


export const Card = styled.div `

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
   
    width: 700px;
    height: 700px;
    margin-bottom: 55px;

    img{
        
    width: 400px;
    height: 700px;

    }

`;


export const Detalhes = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: space-between;

    h2{
        text-transform: uppercase;
        margin-top: 15px;
    }

    a{
        padding: 15px 20px;
        background-color: #4D41C0;
        color: white;
        text-decoration: none;
        border-radius: 10px;
        margin-top: 10px;
    }


`;

