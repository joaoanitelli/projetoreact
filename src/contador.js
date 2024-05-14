import React from 'react';

function Contador() {
  const [valueLeft, setValueLeft] = React.useState(0);
  const [valueRight, setValueRight] = React.useState(0);

  const calcularTotal = () => {
    const resultado = parseInt(valueLeft) + parseInt(valueRight);
    return resultado.toString();
  };

  const resetValues = () => {
    setValueLeft(0);
    setValueRight(0);
  };

  const more = (side) => {
    if (side === 'left') {
      setValueLeft(parseInt(valueLeft) + 1);
    } else {
      setValueRight(parseInt(valueRight) + 1);
    }
  };

  const less = (side) => {
    if (side === 'left' && parseInt(valueLeft) > 0) {
      setValueLeft(parseInt(valueLeft) - 1);
    } else if (side === 'right' && parseInt(valueRight) > 0) {
      setValueRight(parseInt(valueRight) - 1);
    }
  };

  return (
    <div
      style={{
        width: '100%',
        height: '100vh',
        overflow: 'hidden',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
      }}
    >
      <div
        className="main"
        style={{
          height: '480px',
          width: '400px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
          position: 'relative',
          overflow: 'hidden',
        }}
      >
        <h1 className="titulo" style={{ fontFamily: 'Sans-serif' }}>
          Total
        </h1>
        <button
          className="recarregar"
          style={{
            backgroundImage: 'url("https://cdn-icons-png.flaticon.com/512/126/126502.png")',
            backgroundSize: 'cover',
            backgroundPostion: 'center',
            height: '22px',
            width: '22px',
            border: 'none',
            cursor: 'pointer',
            backgroundColor: 'transparent',
            position: 'absolute',
            right: '48px',
            top: '28px',
          }}
          onClick={resetValues}
        />
        <input
          style={{
            padding: '10px',
            width: '64px',
            border: '2px solid black',
            borderRadius: '8px',
            fontWeight: 'bold',
          }}
          disabled
          value={calcularTotal()}
        />
        <div
          className="recurso"
          style={{
            display: 'flex',
            width: '100%',
            justifyContent: 'space-around',
            marginTop: '28px',
          }}
        >
          <div
            className="left"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '28px',
            }}
          >
            <img className="man" src="https://img.freepik.com/psd-gratuitas/homem-expressivo-gesticulando_23-2150199021.jpg?w=996&t=st=1715729747~exp=1715730347~hmac=30c7d37cb2f904dbdaf9a4815694bf0b03b55cf0f1fb756c6624bf0d39ea619a" style={{ width: '100px' }} />
            <div
              className="buttonLeft"
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around',
              }}
            >
              <button
                onClick={() => more('left')}
                style={{
                  fontSize: '16px',
                  backgroundColor: 'green',
                  fontWeight: 'bold',
                  padding: '12px 16px',
                  color: 'white',
                  border: '0',
                  cursor: 'pointer',
                  borderRadius: '100%',
                }}
              >
                +
              </button>
              <button
                onClick={() => less('left')}
                style={{
                  fontSize: '16px',
                  backgroundColor: 'red',
                  fontWeight: 'bold',
                  padding: '12px 18px',
                  color: 'white',
                  border: '0',
                  cursor: 'pointer',
                  borderRadius: '100%',
                }}
              >
                -
              </button>
            </div>
            <p style={{ fontWeight: 'bold', fontFamily: 'Sans-serif' }}>Homens</p>
            <input
              className="valueLeft"
              style={{ padding: '10px', width: '64px' }}
              type="number"
              min="0"
              value={valueLeft}
              onChange={(e) => setValueLeft(e.target.value)}
            />
          </div>
          <div
            className="right"
            style={{
              display: 'flex',
              flexDirection: 'column',
              alignItems: 'center',
              gap: '28px',
            }}
          >
            <img className="woman" src="https://img.freepik.com/free-photo/young-african-lady-standing-isolated-white-background_171337-10859.jpg?w=996&t=st=1715729807~exp=1715730407~hmac=08f336a447dc02fba6dd0f70059620830269a4590ca79995712152e9def8a13f" style={{ width: '100px' }} />
            <div
              className="buttonRight"
              style={{
                display: 'flex',
                width: '100%',
                justifyContent: 'space-around',
              }}
            >
              <button
                onClick={() => more('right')}
                style={{
                  fontSize: '16px',
                  backgroundColor: 'green',
                  fontWeight: 'bold',
                  padding: '12px 16px',
                  color: 'white',
                  border: '0',
                  cursor: 'pointer',
                  borderRadius: '100%',
                }}
              >
                +
              </button>
              <button
                onClick={() => less('right')}
                style={{
                  fontSize: '16px',
                  backgroundColor: 'red',
                  fontWeight: 'bold',
                  padding: '12px 18px',
                  color: 'white',
                  border: '0',
                  cursor: 'pointer',
                  borderRadius: '100%',
                }}
              >
                -
              </button>
            </div>
            <p style={{ fontWeight: 'bold', fontFamily: 'Sans-serif' }}>Mulheres</p>
            <input
              style={{ padding: '10px', width: '64px' }}
              type="number"
              min="0"
              value={valueRight}
              onChange={(e) => setValueRight(e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Contador;
