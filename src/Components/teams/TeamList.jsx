import React from 'react';
import { NavLink } from 'react-router-dom';
import starPng from '../../img/star.png';
export default function TeamList(props) {
    let i = 1;
    return (
        <>
            <div className="club-list">
                <div className="container">
                    {
                        props.data.map(item => {
                            return (
                                <>
                                    <div className="all-statistic-card" key={item.id}>
                                        <NavLink to={`/aboutplayer-${item.id}`}>
                                            <div className="all-statistic-card-flex">
                                                <div className="all-statistica-card-number">
                                                    {i++}
                                                </div>
                                                <div className="all-statistic-card-image">
                                                    <img src={item.player.image} alt="player-img" width='50' />
                                                </div>
                                                <div className="all-statistic-card-player-info">
                                                    <div className="name">
                                                        {item.player.first_name} <span>{item.player.last_name}</span>
                                                    </div>
                                                    <div className="club-info">
                                                        <img src={item.player.club.icon} alt="logo-club" width='25' />
                                                        <span>{item.id === 26?'Shartnomasi bekor qilingan':item.player.club.name}</span>
                                                    </div>
                                                </div>
                                                {item.force > 0 ?
                                                    <img src={starPng} className='all-statistic-card-flex-star' alt="yulduz-MPL" width='25px' /> :
                                                    item.id === 26?<svg xmlns="http://www.w3.org/2000/svg" className='close-player' width="24" height="24" viewBox="0 0 24 24" >
                                                    <path d="M11.492 21.771c.294.157.663.157.957-.001 8.012-4.304 8.581-12.713 8.574-15.104a.988.988 0 0 0-.596-.903l-8.051-3.565a1.005 1.005 0 0 0-.813.001L3.57 5.765a.988.988 0 0 0-.592.891c-.034 2.379.445 10.806 8.514 15.115zM8.293 9.707l1.414-1.414L12 10.586l2.293-2.293 1.414 1.414L13.414 12l2.293 2.293-1.414 1.414L12 13.414l-2.293 2.293-1.414-1.414L10.586 12 8.293 9.707z">
                                                    </path>
                                                    </svg>:''
                                                }
                                            </div>
                                        </NavLink>
                                    </div>
                                </>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}
