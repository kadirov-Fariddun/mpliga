import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Preloader from '../home/Preloader';
import teamLogo from '../../img/mpliga.png';
import pozitivLogo from '../../img/pozitiv/logo.png';
import eliteJpg from "../../img/elite.jpg";
import { Helmet } from 'react-helmet';


export default function Teams() {
  const URL = 'https://ligaeuropa.pythonanywhere.com/api/v1/';
  const [dataAboutPlayer, setDataAboutPlayer] = useState([]);
  const [clubs, setClubs] = useState([]);
  let searchTeamInput = document.getElementById('search-team-input');
  let searchTeamBtn = document.getElementById('search-team-btn')

  async function getData(http, setData) {
    await axios.get(`${URL}${http}`)
      .then((data) => {
        setData(data.data);
      });
  };
  useEffect(() => {
    getData('aboutplayer/', setDataAboutPlayer);
    getData('club/', setClubs);
  }, []);
console.log(clubs);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MPLiga jamoalari</title>
        <meta name='title' content='Mahalliy Premier Liga Jamoalari' />
        <meta name="description" content="MPLiga barcha jamoalari bilan faqat ushbu rasmiy saytda tanishing" />
      </Helmet>
      <div className="teams">
        <Preloader data={clubs} />
        <div className="tp">
          <div className="container">
            <div className="teams-flex">
              < NavLink to={`/club-${12}`} key={12} className='team-link'>
                <div className="team">
                  <div className="team-image">
                    <img src={eliteJpg} alt="team-logo" width='150px' />
                  </div>
                  <div className="team-title">
                    <p>MPL Yulduzlari</p>
                    <span>Uzbekiston</span>
                  </div>
                </div>
              </NavLink>
              {
                clubs.map((club) => {
                  return (
                    <>
                      < NavLink to={`/club-${club.id}`} key={club.id} className='team-link'>
                        <div className="team">
                          <div className="team-image">
                            <img src={club.id === 24? pozitivLogo:teamLogo} alt="team-logo" width='150px' />
                          </div>
                          <div className="team-title">
                            <p>{club.name}</p>
                            <span>Uzbekiston</span>
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
      </div >
    </>
  )
}
