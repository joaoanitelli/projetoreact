import {Link} from "react-router-dom";
import LetreiroComponente from './letreiro';

export default function Atv02() {
    return (
        <>
        <h1>Atividade 02</h1>
        <LetreiroComponente/>
        <br/>
        <Link to="/">Retornar a página inicial</Link>
        </>
    );
}
