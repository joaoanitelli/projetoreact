import {Link} from "react-router-dom";
import LetreiroComponente from './letreiro';
import { useState } from "react";

export default function Atv01() {
    const [data,setdata] = useState('Teste');
    const relogio = setInterval(function time() {
    let dateToday = new Date();
    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();
    setdata(digitos(hr) + ':' + digitos(min) + ":" + digitos(sec))
},1)

function digitos(digito) {
    if(digito < 10) {
        return '0' + digito;
    }else {
        return digito;
    }
}
    return (
        <>
        <h1>Atividade 01</h1>
        {data}
        <br/>
        <Link to="/">Retornar a página inicial</Link>
        </>
    );
}
