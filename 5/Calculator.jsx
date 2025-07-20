import React, { useState } from 'react';
import './Calculator.css'; // CSS styling file

const Calculator = () => {
  const [num1, setNum1] = useState('');
  const [num2, setNum2] = useState('');
  const [result, setResult] = useState(null);

  const handleCalculation = (operation) => {
    const a = parseFloat(num1);
    const b = parseFloat(num2);

    if (isNaN(a) || isNaN(b)) {
      setResult('Please enter valid numbers');
      return;
    }

    switch (operation) {
      case 'add': setResult(a + b); break;
      case 'subtract': setResult(a - b); break;
      case 'multiply': setResult(a * b); break;
      case 'divide': setResult(b !== 0 ? a / b : 'Cannot divide by 0'); break;
      default: setResult('Invalid operation');
    }

    

  };
  const clearFields = () => {
    setNum1('');
    setNum2('');
    setResult('');
  };

  return (
    <div className="calculator-container">
      <h2>Calculator</h2>
      <input
        type="number"
        placeholder="Enter first number"
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input
        type="number"
        placeholder="Enter second number"
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />
      <div className="button-group">
        <button onClick={() => handleCalculation('add')}>+</button>
        <button onClick={() => handleCalculation('subtract')}>-</button>
        <button onClick={() => handleCalculation('multiply')}>×</button>
        <button onClick={() => handleCalculation('divide')}>÷</button>
      </div>
      <div className="result">
        <strong>Result:</strong> {result !== null ? result : 'N/A'}
      </div>
      <button className="clear-btn" onClick={clearFields}>Clear</button>
    </div>
  );
};

export default Calculator;
