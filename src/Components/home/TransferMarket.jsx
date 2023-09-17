import React, { useEffect, useState } from 'react';
import unknownJpg from '../../img/unknown-scorer.jpg';
import pozitivSardor from '../../img/pozitiv/10.jpg';
import pozitivSherzod from '../../img/pozitiv/9.jpg';
import jurabekPng from '../../img/transfer-window/7.jpg';
import jomboyAlisher from '../../img/jomboy/9.jpg';
import xitoyShoxrux from '../../img/xitoypoyon/4.jpg';
import murodPng from '../../img/transfer-window/3.jpg';
import sohibPng from '../../img/transfer-window/4.jpg';
import dovudPng from '../../img/transfer-window/5.jpg';
import javohirPng from '../../img/transfer-window/6.jpg';
import diyorPng from '../../img/transfer-window/8.jpg';
import samarqandZoir from '../../img/samarqand/1.jpg';

export default function TransferMarket() {
    const [imageId,setImageId] = useState(0);
    let transferPlayers = [];
    for (let i = 1; i <= 16; i++) {
        
    };

    transferPlayers.sort((a, b) => {
        if (a.id > b.id) return -1;
        else return 1;
    });
    

    console.log(transferPlayers);
    return (
        <>
            <div className="transfer-market">
                <div className="tp">
                    <div className="container">
                        <div className="transfer-title">
                            Transfer Market
                        </div>
                        <div className="transfer-market-cards">
                            {
                                transferPlayers.map((item, index) => {
                                    return (
                                        <div className="transfer-market-card" key={item.id}>
                                            <div className="transfer-market-card-head">
                                                <div className="transfer-market-card-titles">
                                                    <div className="image" onClick={()=>{setImageId(
                                                        item.image !== null ?item.id:0
                                                        )}}>
                                                        <img src={item.image == null ? unknownJpg : item.image} alt="o'yinchi" />
                                                    </div>
                                                    <div className="transfer-market-card-titles-title">
                                                        <p>Isim: <span>{item.name}</span></p>
                                                        <p>Familiya: <span>{item.firstname}</span></p>
                                                        <p>Yoshi: <span>{item.age}</span></p>
                                                    </div>
                                                </div>
                                                <div className="transfer-market-card-price">
                                                    <div className="transfer-market-card-price-state">Jamoa: <span>{item.team == null ? 'Erkin agent' : item.team}</span></div>
                                                    <div className="transfer-market-card-price-price">{item.price}<span>so'm</span></div>
                                                </div>
                                            </div>
                                            <div className='transfer-market-card-body'>
                                                <div className="transfer-market-card-info-title">Malumotlar</div>
                                                <ul className="transfer-market-card-info-list">
                                                    <li>Ismi Familiyasi: <span>{item.firstname} {item.name}</span></li>
                                                    <li>Yoshi: <span>{item.age}</span></li>
                                                    <li>Jamoasi: <span>{item.team == null ? "Yo'q" : item.team}</span></li>
                                                    <li>Gollari: <span>{item.goals}</span></li>
                                                    <li>Kartochkalari: <span>{item.cards}</span></li>
                                                    <li>Narxi: <span>{item.price}</span></li>
                                                    <li>Boshqa jamoaga o'tish foizi: <span>{item.exitPercent}</span></li>
                                                    <li>Kuchli tarafi: <span>{item.strengths}</span></li>
                                                    <li>Holati: <span>{item.team == null ? 'Erkin agent' : 'Transfer'}</span>
                                                        {item.team == null ?
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" viewBox="0 0 640 512" fill='#d17c0c'>
                                                                <path d="M208 96a48 48 0 1 0 0-96 48 48 0 1 0 0 96zM123.7 200.5c1-.4 1.9-.8 2.9-1.2l-16.9 63.5c-5.6 21.1-.1 43.6 14.7 59.7l70.7 77.1 22 88.1c4.3 17.1 21.7 27.6 38.8 23.3s27.6-21.7 23.3-38.8l-23-92.1c-1.9-7.8-5.8-14.9-11.2-20.8l-49.5-54 19.3-65.5 9.6 23c4.4 10.6 12.5 19.3 22.8 24.5l26.7 13.3c15.8 7.9 35 1.5 42.9-14.3s1.5-35-14.3-42.9L281 232.7l-15.3-36.8C248.5 154.8 208.3 128 163.7 128c-22.8 0-45.3 4.8-66.1 14l-8 3.5c-32.9 14.6-58.1 42.4-69.4 76.5l-2.6 7.8c-5.6 16.8 3.5 34.9 20.2 40.5s34.9-3.5 40.5-20.2l2.6-7.8c5.7-17.1 18.3-30.9 34.7-38.2l8-3.5zm-30 135.1L68.7 398 9.4 457.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L116.3 441c4.6-4.6 8.2-10.1 10.6-16.1l14.5-36.2-40.7-44.4c-2.5-2.7-4.8-5.6-7-8.6zm347.7 119c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L461.3 384H480c88.4 0 160-71.6 160-160s-71.6-160-160-160L352 64c-17.7 0-32 14.3-32 32s14.3 32 32 32l128 0c53 0 96 43 96 96s-43 96-96 96H461.3l25.4-25.4c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0l-80 80c-12.5 12.5-12.5 32.8 0 45.3l80 80z" />
                                                            </svg> :
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="40px" viewBox="0 0 576 512" fill='#4ec709'>
                                                                <path d="M312 24V34.5c6.4 1.2 12.6 2.7 18.2 4.2c12.8 3.4 20.4 16.6 17 29.4s-16.6 20.4-29.4 17c-10.9-2.9-21.1-4.9-30.2-5c-7.3-.1-14.7 1.7-19.4 4.4c-2.1 1.3-3.1 2.4-3.5 3c-.3 .5-.7 1.2-.7 2.8c0 .3 0 .5 0 .6c.2 .2 .9 1.2 3.3 2.6c5.8 3.5 14.4 6.2 27.4 10.1l.9 .3c11.1 3.3 25.9 7.8 37.9 15.3c13.7 8.6 26.1 22.9 26.4 44.9c.3 22.5-11.4 38.9-26.7 48.5c-6.7 4.1-13.9 7-21.3 8.8V232c0 13.3-10.7 24-24 24s-24-10.7-24-24V220.6c-9.5-2.3-18.2-5.3-25.6-7.8c-2.1-.7-4.1-1.4-6-2c-12.6-4.2-19.4-17.8-15.2-30.4s17.8-19.4 30.4-15.2c2.6 .9 5 1.7 7.3 2.5c13.6 4.6 23.4 7.9 33.9 8.3c8 .3 15.1-1.6 19.2-4.1c1.9-1.2 2.8-2.2 3.2-2.9c.4-.6 .9-1.8 .8-4.1l0-.2c0-1 0-2.1-4-4.6c-5.7-3.6-14.3-6.4-27.1-10.3l-1.9-.6c-10.8-3.2-25-7.5-36.4-14.4c-13.5-8.1-26.5-22-26.6-44.1c-.1-22.9 12.9-38.6 27.7-47.4c6.4-3.8 13.3-6.4 20.2-8.2V24c0-13.3 10.7-24 24-24s24 10.7 24 24zM568.2 336.3c13.1 17.8 9.3 42.8-8.5 55.9L433.1 485.5c-23.4 17.2-51.6 26.5-80.7 26.5H192 32c-17.7 0-32-14.3-32-32V416c0-17.7 14.3-32 32-32H68.8l44.9-36c22.7-18.2 50.9-28 80-28H272h16 64c17.7 0 32 14.3 32 32s-14.3 32-32 32H288 272c-8.8 0-16 7.2-16 16s7.2 16 16 16H392.6l119.7-88.2c17.8-13.1 42.8-9.3 55.9 8.5zM193.6 384l0 0-.9 0c.3 0 .6 0 .9 0z" />
                                                            </svg>}
                                                    </li>
                                                    <li>Bog'lanish: <span>{item.tel}</span></li>
                                                </ul>
                                            </div>
                                            <button className="transfer-card-click-bottom" onClick={() => {
                                                document.querySelectorAll('.transfer-market-card-body')[index].classList.toggle('transfer-market-card-body-active');
                                            }}>
                                                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
                                                    <path d="M11.178 19.569a.998.998 0 0 0 1.644 0l9-13A.999.999 0 0 0 21 5H3a1.002 1.002 0 0 0-.822 1.569l9 13z" />
                                                </svg>
                                            </button>
                                            {
                                                item.id == imageId?
                                            <div className="show-image-scorer">
                                               <img src={item.image} alt="scorer-image" width="50%" max-height="90vh"/> 
                                               <div className="close-image-scorer" onClick={()=>{setImageId(0)}}>&times;</div>
                                            </div>:''
                                }
                                        </div>
                                        
                                    )
                                })
                            }
                        </div>
                        <div className="transfer-market-footer">
                            <p>Ushbu transfer oynasidagi narxlar taxminiy va o'yinching haqiqiy <span>darajasini bildirmaydi!</span></p>
                            <p>Bu narxlar faqat <span>statistikadan</span> kelib chiqib qo'yilgan.</p>
                            <p>O'yinchilarni qo'lga kiritish uchun <span>o'yinchini o'zi</span> bilan jamoasi <span>sardori</span> bilan bog'langan xolda <span>mutlaqo bepul</span> qo'lga kiritishlaring mumkun.</p>
                            <p>Tomonlar faqat <span>o'zaro kelishgan</span> xolda <span>transferni</span> amalga oshirishlari mumkun!!!</p>
                        </div>
                    </div>
                </div>
            </div >

        </>
    )
}
