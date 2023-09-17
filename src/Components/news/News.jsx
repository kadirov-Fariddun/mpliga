import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { NavLink } from 'react-router-dom';
import Preloader from '../home/Preloader';
import { Helmet } from 'react-helmet';

export default function News() {

  const URL = 'https://ligaeuropa.pythonanywhere.com/api/v1/';

  const [data, setData] = useState([]);

  useEffect(() => {
    async function getData(http) {
      await axios.get(`${URL}${http}`)
        .then((data) => {
          setData(data.data);
        })
    };
    getData('news/');
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>MPLiga Yangiliklari</title>
        <meta name='title' content='Mahalliy Premier Liga Yangiliklari' />
        <meta name="description" content="MPLiga so'ngi yangiliklaridan ushbu sayt orqali birinchilardan bo'lib boxabar bo'ling" />
      </Helmet>
      <div className="news">
        <div className="tp">
          <div className="container">
            <Preloader data={data} />

            {
              data.map(item => {
                return (
                  <NavLink to={`/news-${item.id}`} key={item.id}>
                    <div className="news-card">
                      <div className="news-card-flex">
                        <div className="news-card-title-body">
                          <a className='news-card-title'>
                            {item.title}
                          </a>
                          <div className="news-card-author">
                            {item.interview_author} . <span>{item.date}</span>
                          </div>
                        </div>
                        <div className="news-card-image">
                          <img src={item.image} alt="news-img" width='180' height='110' />
                        </div>
                      </div>
                    </div>
                  </NavLink>
                )
              })
            }
          </div>
        </div>
      </div>
    </>
  )
}
