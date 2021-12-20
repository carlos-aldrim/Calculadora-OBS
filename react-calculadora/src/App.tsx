import React, { useState, MouseEvent } from 'react';

function App() {

  const [number1, setNumber1] = useState(0);
  const [number2, setNumber2] = useState(0);
  const [resultado, setResultado] = useState(0);
  console.log(process.env);

  const validateValue = (value: number): boolean => {
    if (value <= 0) {
      return false;
    }
    else {
      return true;
    }
  }

  const handleChangeNumber1 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.valueAsNumber;
    if (validateValue(value)) setNumber1(value);
  }

  const handleChangeNumber2 = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const value = e.target.valueAsNumber;
    if (validateValue(value)) setNumber2(value);
  }

  const [clickedButton, setClickedButton] = useState('');

  const buttonHandler = (event: React.MouseEvent<HTMLButtonElement>) => {
    event.preventDefault();

    const resultado = number1 + number2;
    setResultado(resultado);

    const button: HTMLButtonElement = event.currentTarget;
    setClickedButton(button.name);
  };

  const div_1 = {
    widht: '900 px',
    height: '650px',
    margin: '8px 0'
  }

  const div_2 = {
    margin: '50px 0px 15px 400px'
  }

  const input3 = {
    fontSize: '500%',
    width: '180px',
    height: '100px',
    padding: '10px 20px',
    margin: '8px',
    border: '2px solid #557280',
    borderRadius: '15px',
    backgroundColor: '#557280',
    color: '#fff',
  }

  const button_1 = {
    backgroundColor: '#0e018a',
    border: '2px solid #0e018a',
    borderRadius: '10px 30px',
    width: '180px',
    height: '100px',
    color: '#fff',
    fontSize: '500%',
    margin: '0px 0px 0px 550px'
  }

  const h1_1 = {
    color: '#fff',
    fontSize: '300%',
    margin: '0px 0px 15px 120px'
  }

  const h1_2 = {
    color: '#fff',
    fontSize: '600%',
    margin: '10px 60px 0px 0px',
    textAlign: 'center' as const
  }

  return (
    <div style={div_1}>
      <div style={div_2}>
        <h1 style={h1_1} >{process.env.REACT_APP_TITLE}</h1>
        <input style={input3} value={number1} onChange={handleChangeNumber1} type="number"></input>
        <input style={input3} value={number2} onChange={handleChangeNumber2} type="number"></input>
      </div>
      <div>
        <form>
          <button style={button_1} onClick={buttonHandler} className="button" name="button 1">+</button>
        </form>

        <h1 style={h1_2}>{clickedButton !== "" ? resultado : ""}</h1>
      </div>
    </div>
  );
}

export default App;
