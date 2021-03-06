import type { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import * as S from '../../styles/LandingPage/styles'
import listOfDetails from '../../utils/listOfDatailsSocialNetwork'

const LandingPage : NextPage = () => {
    const router: NextRouter = useRouter();

    function handleNavigate(query: string): void {
        router.push({
            pathname: '/Automation',
            query: { name: query }
        });
    }

    return (
        <S.Container className='container'>
            <S.Header className='header'>
                <S.Title className='title'>ADMIN-BOT</S.Title>
                <S.Division />

                <S.Subtitle className='subtitle'>
                    The world is changing and you need to keep up. Now you can
                    have an automated admin that will take care of your social networks.
                    Choose the time of your posts, shedule them to be posted and wait for:<h3 id='efect'>likes and comments.</h3>
                </S.Subtitle>
            </S.Header>

            <S.SocialNetWorkContainer className='social-netWork-container'>
                {
                    listOfDetails.map((item) => {
                        const Image = item.image;

                        return (
                            <S.InfoSocialNetwork className='info-social-network' key={item.id}>
                                <Image className='icon' />

                                <ul className='list'>
                                    <S.ListText>{item.condition01}</S.ListText>
                                    <S.Division />
                                    <S.ListText>{item.condition02}</S.ListText>
                                    <S.Division />
                                    <S.ListText>{item.condition03}</S.ListText>
                                    <S.Division />
                                </ul>

                                <S.ButtonSocialNetwork onClick={() => handleNavigate(item.name)}>
                                    Schedule
                                </S.ButtonSocialNetwork>
                            </S.InfoSocialNetwork>
                        )
                    })
                }
            </S.SocialNetWorkContainer>
        </S.Container>
    )
}

export default LandingPage
