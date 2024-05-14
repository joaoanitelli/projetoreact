import React from 'react';
import { Link } from 'react-router-dom';

const Home = () =>{
    return(
        <div>
            <h1>Página Inicial</h1>
            <nav>
                <ul>
                    <li>
                        <Link to="/atv01">Atividade 1</Link>
                    </li>
                    <li>
                        <Link to="/atv02">Atividade 2</Link>
                    </li>
                    <li>
                        <Link to="/atv03">Atividade 3</Link>
                    </li>
                </ul>
            </nav>
        </div>
        
    );
}

export default Home;