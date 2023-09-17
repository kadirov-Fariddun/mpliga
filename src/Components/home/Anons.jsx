import React, { useState } from 'react';
import firePng from "../../img/fire.gif";


export default function Anons() {
    const [anonsActive, setAnonsActive] = useState('');
    const teams = ['Juriyat', 'Samarqand mahalla', 'Guzay', "Do'stlik", 'Farxod Posyolka',
        'Qirqlar', 'Xitoypoyon', 'Yangi jomboy', 'Pozitiv', 'Birlik', 'Bobotepa',
        "chalaqo'rg'on", "O'rtabuz", "Sherqo'rg'on"];
    // teams[0]  juriyat
    // teams[1] samarqand mahalla
    // teams[2]  guzay
    // teams[3]  Do'stlik
    // teams[4]  Farxod Posyolka
    // teams[5]  Qirqlar
    // teams[6]  Xitoypoyon
    // teams[7]  Jomboy omadi
    // teams[8]  Pozitiv
    // teams[9]  Birlik
    // teams[10]  Bobotepa
    // teams[11]  chalaqo'rg'on
    // teams[12]  O'rtabuz
    // teams[13]  Sherqo'rg'on
    return (
        <>

            <div className={`anons-btn anons-btn-${anonsActive}`}>
                <button onClick={() => setAnonsActive('active')}>
                    <div className='one'><span>A</span></div>
                    <div className='two'><span>N</span></div>
                    <div className='three'><span>O</span></div>
                    <div className='fore'><span>N</span></div>
                    <div className='five'><span>S</span></div> 
                    <img src={firePng} width="30px" alt="rasimni yuklashda xatolik" />
                </button>
            </div>
            <div className={`anons anons-${anonsActive}`}>
                <div className="anons-close-btn" onClick={() => setAnonsActive('')}>&times;</div>
                <div className="container">
                    <div className='anons-tour'>
                        <div>13 Tur</div>
                        <div>09.09.2023</div>
                    </div>
                    <div className="anons-matches-time">20:00</div>
                    <div className="anons-matches center-match">
                        <div className="anons-matches-home">{teams[3]}</div>
                        <div className="anons-matches-vs">vs</div>
                        <div className="anons-matches-away">{teams[8]}</div>
                        <span className="referee">Sherzod<span>||</span>Pulat</span>
                    </div>
                    <div className="anons-matches-time">21:00</div>
                    <div className="anons-matches">
                        <div className="anons-matches-home">{teams[5]}</div>
                        <div className="anons-matches-vs">vs</div>
                        <div className="anons-matches-away">{teams[10]}</div>
                        <span className="referee">Olim<span>||</span>Ural</span>
                    </div>
                    <div className="anons-matches-time">22:00</div>
                    <div className="anons-matches">
                        <div className="anons-matches-home">{teams[9]}</div>
                        <div className="anons-matches-vs">vs</div>
                        <div className="anons-matches-away">{teams[7]}</div>
                        <span className="referee">Shaxzod<span>||</span>Avaz</span>
                    </div>
                    <div className="anons-matches-time">23:00</div>
                    <div className="anons-matches">
                        <div className="anons-matches-home">{teams[4]}</div>
                        <div className="anons-matches-vs">vs</div>
                        <div className="anons-matches-away">{teams[6]}</div>
                        <span className="referee">Alish <span>||</span>Jurabek</span>
                    </div>
                    <div className="anons-matches-time">22:00</div>
                    <div className="anons-matches">
                        <div className="anons-matches-home">{teams[0]}</div>
                        <div className="anons-matches-vs">vs</div>
                        <div className="anons-matches-away">{teams[8]}</div>
                        <span className="referee">Pulat <span>||</span>Jurabek</span>
                    </div>
                    <div className="anons-matches-time">23:00</div>
                    <div className="anons-matches">
                        <div className="anons-matches-home">{teams[5]}</div>
                        <div className="anons-matches-vs">vs</div>
                        <div className="anons-matches-away">{teams[11]}</div>
                        <span className="referee">Rizo<span>||</span>Rashid</span>
                    </div>
                    <div className="center-match-mark">
                        <span></span> <p>Derbi</p>
                    </div>
                </div>
            </div >
        </>
    )
}
