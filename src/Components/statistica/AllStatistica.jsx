import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import Preloader from '../home/Preloader';
import starPng from '../../img/star.png';


const URL = 'https://ligaeuropa.pythonanywhere.com/api/v1/';

export default function AllStatistica(props) {

    const [data, setData] = useState([]);
    const [dataCopy, setDataCopy] = useState([]);
    async function getData(https) {
        await axios.get(`${URL}${https}`)
            .then(data => {
                setData(data.data);

            })
    };

    useEffect(() => {
        getData('aboutplayer/');
    }, []);
    let i = 1;
    let loadNumber = false;



    return (
        <>
            <div className="all-statistica">
                <div className="all-statistica-title">
                    {props.allTitle}
                </div>
                <div className="all-statistica-title-flex">
                    <div className="all-statistica-title-first">
                        {props.firstTitle}
                    </div>
                    <div className="all-statistica-title-last">
                        {props.lastTitle}
                    </div>
                </div>
                {
                    data.map((item) => {
                        if (i < 6 && props.item === 'goals') {
                            data.sort((a, b) => {
                                if (b.goals < a.goals) return -1;
                                if (b.goals > a.goals) return 1;
                            });

                            return (
                                <>
                                    <div className="all-statistic-card" key={item.id}>
                                        <NavLink to={`/aboutplayer-${item.id}`}>
                                            <div className="all-statistica-card-flex">
                                                <div className="all-statistica-card-number">
                                                    {i++}
                                                </div>
                                                <div className="all-statistica-card-image">
                                                    {/* {document.querySelector('.all-statistica-card-image').style.backgroundImage = `url(${item.player.image})`} */}
                                                    <img src={item.player.image} alt="player-img" width='50' />
                                                </div>
                                                <div className="all-statistica-card-player-info">
                                                    <div className="name">
                                                        {item.player.first_name} <span>{item.player.last_name}</span>
                                                    </div>
                                                    <div className="club-info">
                                                        <img src={item.player.club.icon} alt="logo-club" width='25' />
                                                        <span>{item.id===26?'Erkin agent':item.player.club.name}</span>
                                                    </div>
                                                </div>
                                                {item.force > 0 ?
                                                    <img src={starPng} className='all-statistic-card-flex-star' alt="yulduz-MPL" width='25px' /> :
                                                    item.id===26?<svg xmlns="http://www.w3.org/2000/svg" className='close-player' width="24" height="24" viewBox="0 0 24 24">
                                                        <path d="M11.492 21.771c.294.157.663.157.957-.001 8.012-4.304 8.581-12.713 8.574-15.104a.988.988 0 0 0-.596-.903l-8.051-3.565a1.005 1.005 0 0 0-.813.001L3.57 5.765a.988.988 0 0 0-.592.891c-.034 2.379.445 10.806 8.514 15.115zM8.293 9.707l1.414-1.414L12 10.586l2.293-2.293 1.414 1.414L13.414 12l2.293 2.293-1.414 1.414L12 13.414l-2.293 2.293-1.414-1.414L10.586 12 8.293 9.707z"></path>
                                                    </svg> :''
                                                }
                                                <div className="all-statistica-card-counts">
                                                    {item.goals}
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        }
                        else if (i <= 7 && props.item === 'yellow_cards') {
                            data.sort((a, b) => {
                                if (b.yellow_cards < a.yellow_cards) return -1;
                                if (b.yellow_cards > a.yellow_cards) return 1;
                            })
                            return (
                                <>
                                    <div className="all-statistic-card" key={item.id}>
                                        <NavLink to={`/aboutplayer-${item.id}`}>
                                            <div className="all-statistica-card-flex">
                                                <div className="all-statistica-card-number">
                                                    {i++}
                                                </div>
                                                <div className="all-statistica-card-image">
                                                    <img src={item.player.image} alt="player-img" width='50' />
                                                </div>
                                                <div className="all-statistica-card-player-info">
                                                    <div className="name">
                                                        {item.player.first_name} <span>{item.player.last_name}</span>
                                                    </div>
                                                    <div className="club-info">
                                                        <img src={item.player.club.icon} alt="logo-club" width='25' />
                                                        <span>{item.player.club.name}</span>
                                                    </div>
                                                </div>
                                                {item.force > 0 ?
                                                    <img src={starPng} className='all-statistic-card-flex-star' alt="yulduz-MPL" width='25px' /> : ''
                                                }
                                                <div className="all-statistica-card-counts">
                                                    {item.yellow_cards}
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        }
                        else if (props.item === 'red_cards' && item.red_cards > 0) {
                            [...data].sort((a, b) => {
                                if (b.red_cards < a.red_cards) return -1;
                                if (b.red_cards > a.red_cards) return 1;
                            })
                            return (
                                <>
                                    <div className="all-statistic-card" key={item.id}>
                                        <NavLink to={`/aboutplayer-${item.id}`}>
                                            <div className="all-statistica-card-flex">
                                                <div className="all-statistica-card-number">
                                                    {i++}
                                                </div>
                                                <div className="all-statistica-card-image">
                                                    <img src={item.player.image} alt="player-img" width='50' />
                                                </div>
                                                <div className="all-statistica-card-player-info">
                                                    <div className="name">
                                                        {item.player.first_name} <span>{item.player.last_name}</span>
                                                    </div>
                                                    <div className="club-info">
                                                        <img src={item.player.club.icon} alt="logo-club" width='25' />
                                                        <span>{item.player.club.name}</span>
                                                    </div>
                                                </div>
                                                {item.force > 0 ?
                                                    <img src={starPng} className='all-statistic-card-flex-star' alt="yulduz-MPL" width='25px' /> : ''
                                                }
                                                <div className="all-statistica-card-counts">
                                                    {item.red_cards}
                                                </div>
                                            </div>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        }
                        else return;
                    })
                }
            </div>
        </>
    )
}
