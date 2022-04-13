import styled from "styled-components";
import ImageBackground from '../../assets/background.jpg'

export const Container = styled.div`
    width: ${props => props.theme.size.width};
    height: ${props => props.theme.size.height};
    display: flex;
    align-items: center;
    flex-direction: column ;
`

export const Content = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    word-wrap: break-word;
    width: 50rem;
`

export const Division = styled.hr`
    width: 90%;
    color: white;
`

export const Title = styled.h1`
    color: ${props => props.theme.colors.primary};
    font-size: 45px;
    font-family: 'Montserrat', sans-serif;
    font-weight: bold;
`

export const Subtitle = styled.span`
    margin-top: 2.5rem;
    color: ${props => props.theme.colors.background};
    font-size: 20px;
    font-family: 'Montserrat', sans-serif;
`

export const SocialNetWorkContainer = styled.div`
    display: flex;
    align-items: center;
    margin-top: 2rem;
`

export const InfoSocialNetwork = styled.div`
    width: 17rem;
    height: 25rem;
    margin: 1rem;
    background: -webkit-linear-gradient(180deg, #080A12 0%, rgba(20, 20, 20, 20) 100%);
    border-radius: 8px;
    display: flex;
    flex-direction: column;
    align-items: center;
 `
