import type { NextPage } from 'next'
import * as S from '../../styles/LandingPage/styles'
import listOfDetails from '../../utils/listOfDatailsSocialNetwork'

const LandingPage : NextPage = () => {
    return (
        <S.Container className='container'>
            <S.Content>
                <S.Title className='title'>ADMIN-BOT</S.Title>
                <S.Division />

                <S.Subtitle>
                    The world is changing and you need to keep up. Now you can
                    have an automated admin that will take care of your social networks.
                    Choose the time of your posts, shedule them to be posted and wait for:<h3 id='efect'>likes and comments.</h3>
                </S.Subtitle>
            </S.Content>

            <S.SocialNetWorkContainer>
                {
                    listOfDetails.map((item) => {
                        const Image = item.image;

                        return (
                            <S.InfoSocialNetwork className='info-social-network'>
                                <Image className='icon' />

                                <ul className='list'>
                                    <S.ListText>{item.condition01}</S.ListText>
                                    <S.ListText>{item.condition02}</S.ListText>
                                    <S.ListText>{item.condition03}</S.ListText>
                                </ul>

                                <S.ButtonSocialNetwork>Schedule</S.ButtonSocialNetwork>
                            </S.InfoSocialNetwork>
                        )
                    })
                }
            </S.SocialNetWorkContainer>

        </S.Container>
    )
}

export default LandingPage
