import React from "react"
import type { NextPage } from 'next'
import { NextRouter, useRouter } from 'next/router'
import * as S from '../../styles/Automation/twitter'
import ComeBack from '../../assets/comeback.svg'
import BotLogo from '../../assets/bot-logo.svg'

const TwitterAutomation : NextPage = () => {
    const router: NextRouter = useRouter();

    function handleNavigateToLandingPage() {
        router.push('/')
    }

    function createPostAutomatized() {

    }

    return (
        <S.Container className="container-twitter">
            <div className="division">
                <div className="come-back">
                    <button className="come-back-button" onClick={() => handleNavigateToLandingPage()}>
                        <ComeBack />
                    </button>
                </div>
            </div>

            <div className="form">
                <div className="header-form">
                    <h1>{router.query.name}</h1>
                    <hr />

                    <span>
                        Here you can automate your comments and gain likes. Enjoy it, buddy.
                    </span>
                </div>

                <main className="form-main">
                    <div className="logo">
                        <BotLogo />
                        <span>Make a post: </span>
                    </div>

                    <div className="inputs">
                        <S.Input placeholder="User Name:"/>
                        <S.Input placeholder="Password:"/>
                        <S.TextArea placeholder="Text:"/>

                        <S.Button>Create</S.Button>
                    </div>
                </main>
            </div>
        </S.Container>
    )
}

export default TwitterAutomation;
