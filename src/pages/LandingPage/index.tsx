import type { NextPage } from 'next'
import * as S from '../../styles/LandingPage/styles'
import InstagramIcon from '../../assets/instagram.svg'
import TwitterIcon from '../../assets/twitter.svg'
import LinkedinIcon from '../../assets/linkedin.svg'

const LandingPage : NextPage = () => {
    return (
        <S.Container className='container'>
            <S.Content>
                <S.Title className='title'>ADM-BOT</S.Title>
                <S.Division />

                <S.Subtitle>
                    The world is changing and you need to keep up. Now you can
                    have an automated admin that will take care of your social networks.
                    Choose the time of your posts, shedule them to be posted and wait for:<h3 id='efect'>likes and comments.</h3>
                </S.Subtitle>
            </S.Content>

            <S.SocialNetWorkContainer>
                <S.InfoSocialNetwork>
                    <InstagramIcon className='icon' />
                </S.InfoSocialNetwork>

                <S.InfoSocialNetwork>
                    <TwitterIcon className='icon' />
                </S.InfoSocialNetwork>

                <S.InfoSocialNetwork>
                    <LinkedinIcon className='icon' />
                </S.InfoSocialNetwork>
            </S.SocialNetWorkContainer>

        </S.Container>
    )
}

export default LandingPage
