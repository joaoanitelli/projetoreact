import React from 'react';

const texto = 'Venha estudar na Fatec.';

function Letreiro({ texto }) {
  return <h1>{texto}</h1>
}

function LetreiroComponente() {
  const [body, setBody] = React.useState(<Letreiro texto={''} />);

  React.useEffect(() => {
    let exibir = '';
    for (let i = 0; i < texto.length; i++) {
      setTimeout(() => {
        exibir += texto[i];
        setBody(<Letreiro texto={exibir} />)
      }, i * 500)
    }
  }, [])
  return body;
}

export default LetreiroComponente;