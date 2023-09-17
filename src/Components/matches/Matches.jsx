import { React, useEffect, useState } from 'react';
import winTeam from '../../img/win-team.png';
import logoTeam from '../../img/uzbekistan.png';
import youtube from '../../img/youtube.png';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Preloader from '../home/Preloader';
import { Helmet } from 'react-helmet';


const URL = 'https://ligaeuropa.pythonanywhere.com/api/v1/';

let anonsTime = 0;

export default function Matches() {

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(http) {
      await axios.get(`${URL}${http}`)
        .then((data) => {
          setData(data.data);
        })
    };
    getData('matches/');
  }, []);






  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MPLiga Matchlar</title>
        <meta name='title' content='Mahalliy Premier Liga Matchlari' />
        <meta name="description" content="MPLiga barcha matchlaridan ushbu sayt orqali boxabar bo'ling" />
      </Helmet>
      <div className="matches" title="match">
        <div className="tp">
          <div className="container">
            <Preloader data={data} />
            {
              data.map((item, index) => {
                anonsTime++;
                if (anonsTime > 6) {
                  anonsTime = 1;
                }
                return (
                  <>
                    <NavLink to={`/match-${item.id}`} className="match-data" key={item.id}>
                      <h4 className="tour">
                        <div>
                          {item.tour}
                          <span>-tur</span>
                        </div>
                        <div className="match-date-time">
                          {
                            anonsTime === 1 ? '18:00' :
                              anonsTime === 2 ? '19:00' :
                                anonsTime === 3 ? '20:00' :
                                  anonsTime === 4 ? '21:00' :
                                    anonsTime === 5 ? '22:00' :
                                      anonsTime === 6 ? '23:00' : ''}
                        </div>

                      </h4>
                      <div className="match-data-flex">
                        <div className="match">
                          <div key={item.home.id} className={`team-home ${item.details.home_point < item.details.guest_point ? 'color-lose' : ''}`}>
                            <img src={logoTeam} alt="logo team" width='25px' height='15px' />{item.home.name}
                            {item.details.home_yellow_card > 0 ? <span className='yellow-card'></span> : ''}
                            {item.details.home_red_card > 0 ? <span className='red-card'></span> : ''}
                            <span className='shot'>{item.details.home_point}</span>
                            {item.details.home_point > item.details.guest_point ? <img src={winTeam} className='win-dotter' height='8px' alt='png' /> : ''}
                          </div>
                          <div key={item.guest.id} className={`team-guest ${item.details.home_point > item.details.guest_point ? 'color-lose' : ''}`}>
                            <img src={logoTeam} alt="logo team" width='25px' height='15px' /> {item.guest.name}
                            {item.details.guest_yellow_card > 0 ? <span className='yellow-card'></span> : ''}
                            {item.details.guest_red_card > 0 ? <span className='red-card'></span> : ''}
                            <span className='shot'>{item.details.guest_point}</span>
                            {item.details.guest_point > item.details.home_point ? <img src={winTeam} className='win-dotter' height='8px' alt='png' /> : ''}
                          </div>
                        </div>
                        <div className="match-info">
                          <div className="match-date">
                            {item.date}
                          </div>
                          <a target='_blank' href={item.details.link} className="match-link-video">
                            {
                              item.details.link ?
                                <img
                                  src={youtube}
                                  width="60"
                                  height="55"
                                  title="YouTube video player"
                                /> : ''
                            }
                            <div className={`match-date-finished-${item.finished === 'да' ? 'true' : 'false'}`}>
                              {item.finished === 'да' ? "tugadi" : "bo'lmagan"}
                            </div>

                          </a>
                        </div>
                      </div>
                    </NavLink>
                  </>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
