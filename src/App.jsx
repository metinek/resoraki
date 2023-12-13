import React from "react";
import Resorak from "./Resorak";
import obrazek1 from './img/a1.png';
import obrazek2 from './img/a2.png';
import obrazek3 from './img/a3.png';
import obrazek4 from './img/a4.png';
import obrazek5 from './img/a5.png';
import obrazek6 from './img/a6.png';
const tekst = "Wlazł kotek na płotek"
function teraz() {
    return Date(Date.now()).toString();
}
 
const App = () => (
    <React.StrictMode>
        <>
            <h1>{tekst}</h1>
            <h2>{teraz()}</h2>
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
