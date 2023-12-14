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

const k1 = {
    nazwa : "Resorak żółty",
    opis : "śliczny żółty resorak",
    obrazek : obrazek1
}

const resoraki  = [
    {nazwa : "R1", opis : "opi R1", obrazek : obrazek1},
    {nazwa : "R1", opis : "opi R1", obrazek : obrazek2},
    {nazwa : "R1", opis : "opi R1", obrazek : obrazek3}
]



 
const App = () => (
    <React.StrictMode>
        <>
            <ol>
                {kontynenty.map((k)=>(<li>{k}</li>))}
            </ol>










            
            <p>{k1.nazwa} {k1.opis}</p>
            <img src={k1.obrazek} alt="żółty resorak"/>
            <p>Pole koła o promieniu {promien} jest równe {3.14*promien*promien}.</p>
            <h1>{tekst}</h1>
            <h2>{teraz()}</h2>







            {resoraki.map((k)=>(<div className="resorak"><h1>{k.nazwa}</h1><p>{k.opis}</p><img src={k.obrazek} alt={k.nazwa}/></div>))}








            <Resorak2 auto={k1}/>
            <Resorak nazwa={k1.nazwa} opis={k1.opis} obrazek={k1.obrazek}/>
            <Resorak nazwa="Resorak żółty" opis="śliczny żółty resorak" obrazek={obrazek1}/>
            <Resorak nazwa="Resorak czerwony" opis="śliczny czerwony resorak" obrazek={obrazek2}/>
            <Resorak nazwa="Resorak zielony" opis="śliczny zielony resorak" obrazek={obrazek3}/>
            <Resorak nazwa="Resorak niebieski" opis="śliczny niebieski resorak" obrazek={obrazek4}/>
            <Resorak nazwa="Resorak turkusowy" opis="śliczny turkusowy resorak" obrazek={obrazek5}/>
            <Resorak nazwa="Resorak kremowy" opis="śliczny kremowy resorak" obrazek={obrazek6}/>
        </>
    </React.StrictMode>
)
export default App;
