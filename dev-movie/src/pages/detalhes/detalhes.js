import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;


`;

export const Figure = styled.figure`

    width: 700px;
    height: 500px;
    display: flex;
    align-items: center;
    justify-content: center;
   
    img{
        width: 700px;
        height: 500px;
        border-radius: 10px;
    }


`;


export const Button = styled.button`

    padding: 15px 25px;
    border-radius: 10px;
    background-color: ${props => props.bg};
    border: none;
    color: white;
    margin-right: 10px;

    a{
        text-decoration: none;
        
    }

`;

