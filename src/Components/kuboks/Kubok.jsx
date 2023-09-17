import React, { useEffect, useState } from 'react';
import uzbekistanPng from '../../img/uzbekistan.png';
import { Helmet } from 'react-helmet';
export default function Kubok(props) {
  // halfQuarter final list
  const halfQuarterFinal = [
    {
      id: 1,
      date: '12.08.2023',
      finish: true,
      home: {
        name: 'Birlik',
        score: 5,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Xitoypoyon',
        score: 6,
        logo: uzbekistanPng
      }
    },
    {
      id: 2,
      date: '12.08.2023',
      finish: true,
      home: {
        name: "Chalaqo'org'on",
        score: 2,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Guzay',
        score: 4,
        logo: uzbekistanPng
      }
    },
    {
      id: 4,
      date: '12.08.2023',
      finish: true,
      home: {
        name: 'Farxod Posyolka',
        score: 4,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Samarqand Mahalla',
        score: 10,
        logo: uzbekistanPng
      }
    },
    {
      id: 6,
      date: '12.08.2023',
      finish: true,
      home: {
        name: 'Bobotepa',
        score: 2,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Jomboy omadi',
        score: 8,
        logo: uzbekistanPng
      }
    },
    {
      id: 7,
      date: '12.08.2023',
      finish: true,
      home: {
        name: 'Pozitiv',
        score: 4,
        logo: uzbekistanPng
      },
      guest: {
        name: "O'rtabuz",
        score: 2,
        logo: uzbekistanPng
      }
    },
    {
      id: 8,
      date: '12.08.2023',
      finish: true,
      home: {
        name: 'Juriyat',
        score: 9,
        logo: uzbekistanPng
      },
      guest: {
        name: "Sherqo'rg'on",
        score: 3,
        logo: uzbekistanPng
      }
    },
  ];
  // quarter final
  const quarterFinal = [
    {
      id: 1,
      date: '17.09.2023',
      finish: false,
      home: {
        name: 'Qirqlar',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Xitoypoyon',
        score: 0,
        logo: uzbekistanPng
      }
    },
    {
      id: 2,
      date: '17.09.2023',
      finish: false,
      home: {
        name: "Guzay",
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Samarqand mahalla',
        score:0,
        logo: uzbekistanPng
      }
    },
    {
      id: 4,
      date: '17.09.2023',
      finish: false,
      home: {
        name: 'Yangi Jomboy',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: ' Pozitiv',
        score: 0,
        logo: uzbekistanPng
      }
    },
    {
      id: 6,
      date: '17.09.2023',
      finish: false,
      home: {
        name: 'Juriyat',
        score: 0,
        logo: uzbekistanPng
      },
      guest: {
        name: 'Dòstlik',
        score: 0,
        logo: uzbekistanPng
      }
    },
  ];
  // halQuarterFinal
  halfQuarterFinal.sort((a, b) => {
    a = Number(a.date.split('.')[0]);
    b = Number(b.date.split('.')[0]);
    if (a < b) return -1;
    else return 1
  });
  // quartelFinal
  quarterFinal.sort((a, b) => {
    a = Number(a.date.split('.')[0]);
    b = Number(b.date.split('.')[0]);
    if (a < b) return -1;
    else return 1
  });

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MPLiga Kubok</title>
        <meta name='title' content='Mahalliy Premier Liga Kubok' />
        <meta name="description" content="MPLiga kubok baxslari va natijalari bilan faqat ushbu rasmiy saytda tanishing" />
      </Helmet>
      <div className="kubok">
        <div className="tp">
          <div className="container">
            <div className="halfquarterfinal">
              <div className="halfquarterfinal-title">MP-Liga Kubok bahslari 1/8 final</div>
              {
                halfQuarterFinal.map((item) => {
                  return (
                    <>
                      <div className="halfquarterfinal-card" key={item.id}>
                        <div className="halfquarterfinal-card-flex">
                          <div className={`halfquarterfinal-card-home ${item.home.score < item.guest.score ?
                            'game-over' : ''
                            }`}>
                            <img src={item.home.logo} alt="uzbekistan" width='40px' />
                            <span>{item.home.name}</span>
                          </div>
                          <div className="halfquarterfinal-card-score">
                            <span className='home-score'>
                              {item.finish ? item.home.score : '-'}
                            </span>
                            :
                            <span className='guest-score'>
                              {item.finish ? item.guest.score : '-'}
                            </span>
                          </div>
                          <div className={`halfquarterfinal-card-guest ${item.home.score > item.guest.score ?
                            'game-over' : ''
                            }`}
                          >
                            <span>{item.guest.name}</span>
                            <img src={item.guest.logo} alt="uzbekistan" width='40px' />
                          </div>
                          <div className="halfquarterfinal-card-date">{item.date}</div>
                        </div>
                      </div >
                    </>
                  )
                })
              }
            </div>
            {/** 1/4 **/}
            <div className="halfquarterfinal">
              <div className="halfquarterfinal-title">MP-Liga Kubok bahslari 1/4 final</div>
              {
                quarterFinal.map((item) => {
                  return (
                    <>
                      <div className="halfquarterfinal-card" key={item.id}>
                        <div className="halfquarterfinal-card-flex">
                          <div className={`halfquarterfinal-card-home ${item.home.score < item.guest.score ?
                            'game-over' : ''
                            }`}>
                            <img src={item.home.logo} alt="uzbekistan" width='40px' />
                            <span>{item.home.name}</span>
                          </div>
                          <div className="halfquarterfinal-card-score">
                            <span className='home-score'>
                              {item.finish ? item.home.score : '-'}
                            </span>
                            :
                            <span className='guest-score'>
                              {item.finish ? item.guest.score : '-'}
                            </span>
                          </div>
                          <div className={`halfquarterfinal-card-guest ${item.home.score > item.guest.score ?
                            'game-over' : ''
                            }`}
                          >
                            <span>{item.guest.name}</span>
                            <img src={item.guest.logo} alt="uzbekistan" width='40px' />
                          </div>
                          <div className="halfquarterfinal-card-date">{item.date}</div>
                        </div>
                      </div >
                    </>
                  )
                })
              }
            </div>
            {/* */}

            {/** Half Final **/}

            {/* */}

            {/** Final **/}

            {/* */}
          </div>
        </div>
      </div >
    </>
  )
}
