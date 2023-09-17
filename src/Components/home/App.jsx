import React, { useState, useEffect } from "react";
import { Routes, Route, useNavigate, NavLink } from 'react-router-dom';
import Navibar from "./Navibar";
import News from '../news/News';
import NewsCardInfo from '../news/NewsCardInfo';
import Table from "../statistica/Table";
import Teams from "../teams/Teams";
import Kubok from "../kuboks/Kubok";
import Footer from './Footer';
import NotFount from "./NotFount";
import axios from "axios";
import Preloader from "./Preloader";
import MatchInfo from "../matches/MatchInfo";
import logoClub from '../../img/mpliga.png';
import pozitivLogo from '../../img/pozitiv/logo.png';
import ballPng from '../../img/ball.png';
import redCardPng from '../../img/red-card.png';
import stadionPng from '../../img/stadion.png';
import yellowCardPng from '../../img/yellow-card.png';
import newsFootball from '../../img/news-football.jpg';
import youtube from '../../img/youtube.png';
import Statistic from "../statistica/Statistic";
import Matches from '../matches/Matches';
import Player from "../teams/Player";
import starPng from '../../img/star.png';
import Reglament from "./Reglament";
import Team from "../teams/Team";
import TeamList from "../teams/TeamList";
import kengashQarori from '../../img/kengash-qarori.jpg';
import eliteJpg from "../../img/elite.jpg";
import kubokPng from "../../img/kubok.png";
import firePng from "../../img/fire.gif";
import Anons from './Anons';
import TransferMarket from "./TransferMarket";
function App() {
  const URL = 'https://ligaeuropa.pythonanywhere.com/api/v1/'
  const [dataNews, setDataNews] = useState([]);
  const [dataMatch, setDataMatch] = useState([]);
  const [dataAboutPlayer, setDataAboutPlayer] = useState([]);
  const clubList = [];
  const teamList = {
    juriyat: [],
    pozitiv: [],
    farxodPosyolka: [],
    dustlik: [],
    qirqlar: [],
    birlik: [],
    guzay: [],
    bobotepa: [],
    yangiJomboy: [],
    qurgon: [],
    xitoypoyon: [],
    samarqandMahalla: [],
    mplStar: []
  };
  const [clubs, setClubs] = useState([]);
  const navigate = useNavigate();
  const goBack = () => navigate(-1);


  async function getData(http, setData) {
    await axios.get(`${URL}${http}`)
      .then((data) => {
        setData(data.data);
      })
  };
  useEffect(() => {
    getData('matches/', setDataMatch);
    getData('news/', setDataNews);
    getData('aboutplayer/', setDataAboutPlayer);
    getData('club/', setClubs);
  }, []);

  // teamList push player 
  dataAboutPlayer.map(player => {
    if (player.player.club.name.toLowerCase() === 'juriyat') {
      teamList.juriyat.push(player);
    }
    if (player.player.club.name.toLowerCase() === 'birlik') {
      teamList.birlik.push(player);
    }
    if (player.player.club.name.toLowerCase() === 'pozitiv') {
      teamList.pozitiv.push(player);
    }
    if (player.player.club.name.toLowerCase() === 'qirqlar') {
      teamList.qirqlar.push(player);
    }
    if (player.player.club.name.toLowerCase() === 'do\'stlik') {
      teamList.dustlik.push(player);
    }
    if (player.player.club.name.toLowerCase() === 'farxod posyolka') {
      teamList.farxodPosyolka.push(player);
    }
    if (player.player.club.name.toLowerCase() === 'guzay') {
      teamList.guzay.push(player);
    }
    if (player.player.club.name.toLowerCase() === 'chalaqo\'rg\'on') {
      teamList.qurgon.push(player);
    }
    if (player.player.club.name.toLowerCase() === 'bobotepa') {
      teamList.bobotepa.push(player);
    }
    // if (player.player.club.name.toLowerCase() === 'jomboy') {
    //   teamList.jomboy.push(player);
    // }
    if (player.player.club.name.toLowerCase() === 'yangi jomboy') {
      teamList.yangiJomboy.push(player);
    }
    if (player.player.club.name.toLowerCase() === 'samarqand mahalla') {
      teamList.samarqandMahalla.push(player);
    }
    if (player.player.club.name.toLowerCase() === 'xitoypoyon') {
      teamList.xitoypoyon.push(player);
    }
    if (player.technique > 0) {
      teamList.mplStar.push(player);
    }
  })

  return (
    <>
      <Navibar />
      <Routes>
        <Route path='/' element={<Matches />} />
        <Route path='/news' element={<News />} />
        <Route path='/table' element={<Table />} />
        <Route path='/teams' element={<Teams />} />
        {/* <Route path='/transfer-market' element={<TransferMarket />} /> */}
        <Route path='/kubok' element={<Kubok />} />
        {
          dataNews.map(item => {
            return (
              <Route path={`/news-${item.id}`} element={

                <>
                  <NewsCardInfo key={item.id}>
                    <div className="news-link-history">
                      <span>home - yangiliklar - yangilik</span>
                      <button onClick={goBack}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                          <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
                        </svg>
                        Ortga
                      </button>
                    </div>
                    <div className="news-link-title">
                      {item.title}
                    </div>
                    <div className="news-link-image">
                      <img src={item.image} alt='rasim yuklashda hatolik' width='70%' />
                    </div>
                    <div className='news-link-body'>
                      {item.info.includes('\r') ? item.info.split('\r').map(info => {
                        return <p>{info}</p>;
                      }) : ''}
                    </div>
                    {item.id === 7 ?
                      <div>
                        <h4 className="kg">Kengash qarori esa quidagicha bo'ldi</h4>
                        <img className="kgi" src={kengashQarori} alt="kengash qarori" width='200px' />
                      </div> : ''}
                    <div className="news-link-author">
                      {item.interview_author} <span>Sana: {item.date}</span>
                    </div>

                  </NewsCardInfo>
                </>
              } />
            )
          })
        }

        {
          dataMatch.map(item => {
            return (
              <Route path={`/match-${item.id}`} element={
                <>
                  <MatchInfo key={item.id} >
                    <button onClick={goBack} className="back-btn">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                        <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
                      </svg>
                      Ortga
                    </button>
                    <div className="match-date">
                      <span className="mpl-name">MP-Liga <span>{item.date}</span></span>
                      <span className="match-finished">{item.finished ? "Bo'lib o'tgan" : "Bo'lib O'tmagan"}</span>
                    </div>
                    <div className="match-teams">
                      <div className="match-team-home">
                        <div className="match-team-flex">
                          <NavLink to='/teams' className="team-home">
                            <img src={logoClub} alt='logo' width='80' />
                            <span>{item.home.name}</span>
                          </NavLink>
                          <div className='team-home-point'>
                            {item.details.home_point}
                          </div>
                        </div>
                        <div className="match-team-home-stat">
                          <div>
                            <img src={redCardPng} className='stat-img' alt='red-card' width='20px' />
                            x <span>{item.details.home_red_card}</span>
                          </div>
                          <div>
                            <img src={yellowCardPng} className='stat-img' alt='yellow-card' width='20px' />
                            x <span>{item.details.home_yellow_card}</span>
                          </div>
                        </div>
                      </div>
                      <span className="match-defis">-</span>
                      <div className="match-team-guest">
                        <div className="match-team-flex match-team-flex-2">
                          <div className='team-guest-point'>
                            {item.details.guest_point}
                          </div>
                          <NavLink to='/teams' className="team-guest">
                            <img src={logoClub} alt='logo' width='80' />
                            <span>{item.guest.name}</span>
                          </NavLink>
                        </div>
                        <div className="match-team-guest-stat">
                          <div>
                            <img src={redCardPng} className='stat-img' alt='red-card' width='20px' />
                            x <span>{item.details.guest_red_card}</span>
                          </div>
                          <div>
                            <img src={yellowCardPng} className='stat-img' alt='yellow-card' width='20px' />
                            x <span>{item.details.guest_yellow_card}</span>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="match-video">

                      <a target='_blank' href={item.details.link} className="match-link-video">
                        <div className="youtube"><img src={youtube} alt='youtube' width='100' /></div>
                        {
                          item.details.link ?
                            <img
                              className="link-video-youtube"
                              src={newsFootball}
                              width="70%"
                              title="YouTube video player"
                            /> : ''
                        }
                      </a>
                    </div>
                  </MatchInfo>
                </>
              } />
            )
          })
        };
        {
          dataAboutPlayer.map(item => {
            return (
              <Route path={`/aboutplayer-${item.id}`} element={
                <Player
                  id={item.id}
                  firstName={item.player.first_name}
                  lastName={item.player.last_name}
                  srcImg={item.player.image}
                  age={item.age}
                  playerNum={item.player.numb}
                  clubLogo={item.player.club.icon}
                  clubName={item.player.club.name}
                  stadion={stadionPng}
                  force={item.force}
                  technique={item.technique}
                  pas={item.pas}
                  goals={item.goals}
                  srcRedCard={redCardPng}
                  srcYellowCard={yellowCardPng}
                  redCard={item.red_cards}
                  yellowCard={item.yellow_cards}
                  srcStar={starPng}
                  like={item.player.like}
                />
              } />
            )
          })
        }
        <Route path='/statistic' element={<Statistic />} />
        {
          clubs.map(club => {
            return (
              <Route path={`club-${club.id}`} element={
                <Team key={club.id}>
                  <button onClick={goBack} className="back-btn">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                      <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
                    </svg>
                    Ortga
                  </button>
                  <div className="club-title">
                    <div className="club-title-flex">
                      <div>
                        <div className="club-title-image">
                          <img src={club.id ===24?pozitivLogo:logoClub} alt='logo-club' width='150px' />
                          <div className="club-title-image-title">{club.name}</div>
                        </div>
                        <div className="club-title-info">
                          <div><p>Chimpionatdagi holati:</p><span>{club.trophey.seasson.chempionat <= 4 ? 'favorit' :
                            club.trophey.seasson.chempionat >= 10 ? 'outsayder' : 'activ'}</span></div>
                          <div><p>kubokdagi holati:</p><span>{club.trophey.seasson.kubok}</span></div>
                        </div>
                      </div>
                      <div className="club-status">
                        {
                          club.trophey.seasson.chempionat <= 4 ?
                            <svg className="club-status-favorite" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                              <path d="M6 4h12v2H6zm5 10v6h2v-6h5l-6-6-6 6z" />
                            </svg>
                            : club.trophey.seasson.chempionat >= 10 ?
                              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M6 18h12v2H6zm5-14v6H6l6 6 6-6h-5V4z" />
                              </svg> :
                              <svg className="club-status-active" xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M13 5V2h-2v3H8l4 4 4-4zm0 17v-3h3l-4-4-4 4h3v3zM3 11h3v2H3zm5 0h3v2H8zm5 0h3v2h-3zm5 0h3v2h-3z" />
                              </svg>
                        }
                      </div>
                    </div>
                  </div>
                  {
                    <TeamList data={
                      club.name.toLowerCase() === 'farxod posyolka' ?
                        teamList.farxodPosyolka :
                        club.name.toLowerCase() === 'juriyat' ? teamList.juriyat :
                          club.name.toLowerCase() === 'qirqlar' ? teamList.qirqlar :
                            club.name.toLowerCase() === 'pozitiv' ? teamList.pozitiv :
                              club.name.toLowerCase() === 'chalaqo\'rg\'on' ? teamList.qurgon :
                                club.name.toLowerCase() === 'bobotepa' ? teamList.bobotepa :
                                  club.name.toLowerCase() === 'guzay' ? teamList.guzay :
                                    club.name.toLowerCase() === 'do\'stlik' ? teamList.dustlik :
                                      club.name.toLowerCase() === 'yangi jomboy' ? teamList.yangiJomboy :
                                        club.name.toLowerCase() === 'samarqand mahalla' ? teamList.samarqandMahalla :
                                          club.name.toLowerCase() === 'xitoypoyon' ? teamList.xitoypoyon :
                                            club.name.toLowerCase() === 'birlik' ? teamList.birlik : ''
                    } />
                  }
                </Team>
              } />
            )
          })

        }
        <Route path={`club-${12}`} element={
          <Team key={12}>
            <button onClick={goBack} className="back-btn">
              <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                <path d="M21 11H6.414l5.293-5.293-1.414-1.414L2.586 12l7.707 7.707 1.414-1.414L6.414 13H21z" />
              </svg>
              Ortga
            </button>
            <div className="club-title">
              <div className="club-title-flex">
                <div>
                  <div className="club-title-image">
                    <img src={eliteJpg} alt='logo-club' width='150px' />
                    <div className="club-title-image-title">MPL Yulduzlari</div>
                  </div>
                  <div className="club-title-info">
                    <div><p>Holati:</p><span> ELITA</span></div>
                    <div><p>Jamoa holati:</p><span> O'zgaruvchan</span></div>
                  </div>
                </div>
              </div>
            </div>
            {
              <TeamList data={teamList.mplStar} />
            }
          </Team>
        } />
        <Route path='/reglament' element={<Reglament />} />
        <Route path='*' element={<NotFount />} />
      </Routes>
      {/* <Anons /> */}
      < Footer />
    </>
  );
}

export default App;
