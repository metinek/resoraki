import React from "react";
import Resorak from "./Resorak";
import Resorak2 from "./Resorak2";
import obrazek1 from './img/a1.png';
import obrazek2 from './img/a2.png';
import obrazek3 from './img/a3.png';
import obrazek4 from './img/a4.png';
import obrazek5 from './img/a5.png';
import obrazek6 from './img/a6.png';
const tekst = "Wlazł kotek na płotek";
let promien=2;
function teraz() {
    return Date(Date.now()).toString();
}
const kontynenty = ["Afryka", "Ameryka Południowa", "Ameryka Północna", "Antarktyda"];

const k = {
    nazwa : "Resorak żółty",
    opis : "śliczny żółty resorak",
    obrazek : obrazek1
}

const resoraki  = [
    {nazwa : "R1", opis : "opi R1", obrazek : obrazek1},
    {nazwa : "R2", opis : "opi R2", obrazek : obrazek2},
    {nazwa : "R3", opis : "opi R3", obrazek : obrazek3},
    {nazwa : "R4", opis : "opi R4", obrazek : obrazek4},
    {nazwa : "R5", opis : "opi R5", obrazek : obrazek5},
    {nazwa : "R6", opis : "opi R6", obrazek : obrazek6}
]



 
const App = () => (
    <React.StrictMode>
        <>
            {Object.keys(k).map(e => (<p key={e}>{k[e]}</p>))}



            { /*<p>{kontynenty}</p>*/ }

            <ol>
                    {kontynenty.map((k)=>(<li key={k}>{k}</li>))}
            </ol>
            {
                /*
                    <p>{k.nazwa} {k.opis}</p>
                    <img src={k.obrazek} alt="żółty resorak"/>
                    <p>Pole koła o promieniu {promien} jest równe {3.14*promien*promien}.</p>
                    <h1>{tekst}</h1>
                    <h2>{teraz()}</h2>
                */
            }







            {resoraki.map((r)=>(<div className="resorak" key={r.nazwa}><h1>{r.nazwa}</h1><p>{r.opis}</p><img src={r.obrazek} alt={r.nazwa}/></div>))}







            {
                /*
                    <Resorak2 auto={k}/>
                    <Resorak nazwa={k.nazwa} opis={k.opis} obrazek={k.obrazek}/>
                    <Resorak nazwa="Resorak żółty" opis="śliczny żółty resorak" obrazek={obrazek1}/>
                    <Resorak nazwa="Resorak czerwony" opis="śliczny czerwony resorak" obrazek={obrazek2}/>
                    <Resorak nazwa="Resorak zielony" opis="śliczny zielony resorak" obrazek={obrazek3}/>
                    <Resorak nazwa="Resorak niebieski" opis="śliczny niebieski resorak" obrazek={obrazek4}/>
                    <Resorak nazwa="Resorak turkusowy" opis="śliczny turkusowy resorak" obrazek={obrazek5}/>
                    <Resorak nazwa="Resorak kremowy" opis="śliczny kremowy resorak" obrazek={obrazek6}/>
                */
            }
        </>
    </React.StrictMode>
)
export default App;
