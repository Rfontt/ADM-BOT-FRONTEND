import styled from "styled-components"

export const Container = styled.div`
    width: ${props => props.theme.size.width};
    height: ${props => props.theme.size.height};
    display: flex;
    align-items: center;
    flex-direction: column;

    @media (max-width: 800px) {
        .social-netWork-container {
            flex-direction: column;
            width: 100vw;
            height: 100rem;
            background: -webkit-linear-gradient(180deg, #080A12 0%, rgba(20, 20, 20, 20) 100%);
            margin-top: 0;
        }

        .info-social-network {
            width: 100vw;
            border-radius: 0;
            margin-top: 0;
        }

        .info-social-network:hover {
            transform: none;
        }

        .header {
            width: 100%;
            padding: 20px 20px 5px 20px;
            margin: 0;
        }

        .title {
            font-size: 20px;
        }

        .subtitle {
            font-size: 15px;
            margin-top: 1rem;

            #efect {
                margin: 1rem;
                font-size: 18px;
            }
        }
    }
`

export const Header = styled.div`
    margin-top: 2rem;
    display: flex;
    align-items: center;
    flex-direction: column;
    word-wrap: break-word;
    width: 50rem;
`

export const Division = styled.hr`
    width: 100%;
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
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
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

export const ButtonSocialNetwork = styled.button`
    border-color: ${props => props.theme.colors.background};
    width: 80%;
    height: 2.5rem;
    background-color: #080A12;
    margin: auto;
    border-radius: 4px;
    color: ${props => props.theme.colors.background};
    cursor: pointer;
    font-size: 15px;
    font-weight: bold;
    font-family: 'Montserrat', sans-serif;
`

export const ListText = styled.li`
    margin-top: 1rem;
    color: ${props => props.theme.colors.background};
    font-family: 'Roboto', sans-serif;
`
