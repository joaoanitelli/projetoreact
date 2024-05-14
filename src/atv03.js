import {Link} from "react-router-dom";
import Contador from './contador';

export default function Atv03() {
    return (
        <>
        <h1>Atividade 03</h1>
        <Link to="/">Retornar a página inicial</Link>
        <Contador/>
        <br/>
        </>
    );
}
