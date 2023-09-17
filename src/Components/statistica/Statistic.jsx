import React from 'react';
import AllStatistica from './AllStatistica';
import Preloader from '../home/Preloader';
import { Helmet } from 'react-helmet';

export default function Statistic() {

    return (
        <>
            <Helmet>
                <meta charSet="utf-8" />
                <title>MPLiga Statistika</title>
                <meta name='title' content='Mahalliy Premier Liga statistika' />
                <meta name="description" content="MPLiga so'ngi statistikasi to'p urarlar sariq va qizil kartochkalar statistikasi" />
            </Helmet>
            <div className="statistica">
                <div className="tp">
                    <div className="container">
                        <AllStatistica
                            allTitle="to'purarlar"
                            firstTitle="O'yinchi"
                            lastTitle='Gollar'
                            item="goals"
                        />
                        <AllStatistica
                            allTitle="Sariq kartochkalar"
                            firstTitle="O'yinchi"
                            lastTitle='Kartockalar'
                            item="yellow_cards"
                        />
                        <AllStatistica
                            allTitle="Qizil kartochkalar"
                            firstTitle="O'yinchi"
                            lastTitle='Kartockalar'
                            item="red_cards"
                        />
                    </div>
                </div>
            </div>
        </>
    )
}
