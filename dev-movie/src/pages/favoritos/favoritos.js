
import styled from "styled-components";


export const Container = styled.div`

    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    padding: 50px;


`;

export const Div = styled.div`

    margin-top: 15px;

    span {
        margin-top: 10px;
    }

    a{
        text-decoration: none;
        margin-right: 20px;
        background-color: darkslategray;
        color: white;
        padding: 15px 10px;
        border-radius: 10px;
    }

    button {
        padding: 15px 10px;
        border-radius: 10px;
        background-color: brown;
        color: white;
        border: none;
        margin-bottom: 10px;

    }


`;