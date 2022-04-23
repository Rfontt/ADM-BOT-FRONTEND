import styled from "styled-components"

export const Container = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: row;
`

export const ContentDiv = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Main = styled.main`
    background-color: white;
    width: 50rem;
    height: 40rem;
    box-shadow: #080A12 0px 0px 10px 0px;
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
`

export const Header = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
`

export const Title = styled.h3`
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
`

export const Input = styled.input`
    border-color: white;
    width: 30rem;
    height: 3rem;
    background: -webkit-linear-gradient(180deg, #080A12 0%, rgba(20, 20, 20, 20) 100%);
    margin: 1rem;
    color: white;
    padding: 8px;
    border-radius: 4px;
`

export const TextArea = styled.textarea`
    border-color: white;
    width: 30rem;
    height: 8rem;
    background: -webkit-linear-gradient(180deg, #080A12 0%, rgba(20, 20, 20, 20) 100%);
    margin: 1rem;
    resize: none;
    color: white;
    padding: 8px;
    border-radius: 4px;
`

export const Button = styled.button`
    width: 30rem;
    height: 3rem;
    background: black;
    margin: 1rem;
    border: none;
    color: white;
    font-size: 18px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
    border-radius: 4px;
    box-shadow: #080A12 0px 0px 2px 2px;
    cursor: pointer;
`

