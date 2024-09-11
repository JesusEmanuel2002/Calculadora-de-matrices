import React, { useState } from 'react';
import './Calculator.css';


// Definir tipos para las matrices
type Vector = number[]; // unidmencionales
type Matrix = number[][]; // bidencionales
type Tensor = number[][][]; // tridimencionales

// Componente para el cálculo de las matrices
const VectorCalculator: React.FC = () => {
    const [vectorA, setVectorA] = useState<Vector>([0, 0, 0]);
    const [vectorB, setVectorB] = useState<Vector>([0, 0, 0]);
    const [result, setResult] = useState<Vector | number>([]);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>, index: number, vector: Vector, 
    setVector: React.Dispatch<React.SetStateAction<Vector>>) => {
        const newVector = [...vector];
        newVector[index] = parseFloat(e.target.value) || 0;
        setVector(newVector);
    };

    const addVectors = () => {
        const sum = vectorA.map((val, i) => val + vectorB[i]);
        setResult(sum);
    };

    const subtractVectors = () => {
        const difference = vectorA.map((val, i) => val - vectorB[i]);
        setResult(difference);
    };

    const multiplyVectors = () => {
        const product = vectorA.map((val, i) => val * vectorB[i]);
        setResult(product);
    };
    
    // Matrices unidimencionales
    return (
        <div>
            <h2>Calculadora de matrices unidimencionales</h2>
                <div>
                <h3>Matriz A</h3>
                {vectorA.map((val, i) => (
                    <input type="number" value={val} onChange={(e) => handleChange(e, i, vectorA, setVectorA)}
                    key={`A${i}`} style={{ marginRight: '5px' }}/>
                ))}
            </div>
            <div>
                <h3>Matriz B</h3>
                {vectorB.map((val, i) => (
                    <input type="number" value={val} onChange={(e) => handleChange(e, i, vectorB, setVectorB)}
                    key={`B${i}`} style={{ marginRight: '5px' }}/>
                ))}
            </div>
            <button onClick={addVectors}>Suma</button>
            <button onClick={subtractVectors}>Resta</button>
            <button onClick={multiplyVectors}>Multiplicacion</button>
            <div>
                <h3>Resultado</h3>
                {typeof result === 'number' ? result : result.join(', ')}
            </div>
        </div>
    );
};

// Matrices bidencionales
const MatrixCalculator: React.FC = () => {
    const [matrixA, setMatrixA] = useState<Matrix>([
        [0, 0, 0], // parte para saver cuantas partes va a tener la matriz
        [0, 0, 0],
    ]);
const [matrixB, setMatrixB] = useState<Matrix>([
        [0, 0, 0],
        [0, 0, 0],
    ]);
const [result, setResult] = useState<Matrix | number[][]>([]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, row: number, col: number, matrix: Matrix, setMatrix: React.Dispatch<React.SetStateAction<Matrix>>) => {
    const newMatrix = matrix.map((r, i) =>
        r.map((val, j) => (i === row && j === col ? parseFloat(e.target.value) || 0 : val))
    );
    setMatrix(newMatrix);
};
// Suma
const addMatrices = () => {
    const sum = matrixA.map((row, i) =>
        row.map((val, j) => val + matrixB[i][j])
    );
    setResult(sum);
};
// Resta
const subtractMatrices = () => {
    const difference = matrixA.map((row, i) =>
        row.map((val, j) => val - matrixB[i][j])
    );
    setResult(difference);
};
// Multriplicacion
const multiplyMatrices = () => {
    const rowsA = matrixA.length;
    const colsA = matrixA[0].length;
    const colsB = matrixB[0].length;
    const product = Array(rowsA).fill(0).map(() => Array(colsB).fill(0));

    for (let i = 0; i < rowsA; i++) {
      for (let j = 0; j < colsB; j++) {
        for (let k = 0; k < colsA; k++) {
          product[i][j] += matrixA[i][k] * matrixB[k][j];
        }
      }
    }

    setResult(product);
};
//zona de las matrices
return (
    <div>
        <h2>Calculadora de matrices bidemensionales</h2>
        <div>
            <h3>Matriz A</h3>
            {matrixA.map((row, i) => (
            <div key={`A-row-${i}`}>
                {row.map((val, j) => (
                <input type="number" value={val} onChange={(e) => handleChange(e, i, j, matrixA, setMatrixA)}
                key={`A-${i}-${j}`} style={{ marginRight: '5px' }}/>
            ))}
            </div>
            ))}
        </div>
        <div>
            <h3>Matriz B</h3>
            {matrixB.map((row, i) => (
            <div key={`B-row-${i}`}>
                {row.map((val, j) => (
                <input type="number" value={val} onChange={(e) => handleChange(e, i, j, matrixB, setMatrixB)}
                key={`B-${i}-${j}`} style={{ marginRight: '5px' }}/>
            ))}
            </div>
            ))}
        </div>
        <button onClick={addMatrices}>Suma</button>
        <button onClick={subtractMatrices}>Resta</button>
        <button onClick={multiplyMatrices}>Multiplicacion</button>
        <div>
            <h3>Resultado</h3>
            {result.length > 0 ? result.map((row, i) => (
            <div key={`result-row-${i}`}>
                {row.map((val, j) => (
                <span key={`result-${i}-${j}`}>{val} </span>
                ))}
            </div>
            )) : <span>No hay resultado</span>}
        </div>
    </div>
);
};

// Calculo de matrices tridecionales
const TensorCalculator: React.FC = () => {
const [tensorA, setTensorA] = useState<Tensor>([
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
]);
const [tensorB, setTensorB] = useState<Tensor>([
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
    [
        [0, 0, 0],
        [0, 0, 0],
        [0, 0, 0],
    ],
]);
const [result, setResult] = useState<Tensor | number[][][]>([]);

const handleChange = (e: React.ChangeEvent<HTMLInputElement>, layer: number, row: number, col: number, tensor: Tensor, setTensor: React.Dispatch<React.SetStateAction<Tensor>>) => {
    const newTensor = tensor.map((l, i) =>
        l.map((r, j) => r.map((val, k) => (i === layer && j === row && k === col ? parseFloat(e.target.value) || 0 : val)))
    );
    setTensor(newTensor);
};
// Suma
const addTensors = () => {
    const sum = tensorA.map((layer, i) =>
        layer.map((row, j) => row.map((val, k) => val + tensorB[i][j][k]))
    );
    setResult(sum);
};
// Resta
const subtractTensors = () => {
    const difference = tensorA.map((layer, i) =>
        layer.map((row, j) => row.map((val, k) => val - tensorB[i][j][k]))
    );
    setResult(difference);
};
// Multiplicacion
const multiplyTensors = () => {
    const scalar = 2;
    const product = tensorA.map((layer, _i) => layer.map((row, _j) =>  row.map((val, _k) => val * scalar))
    );
    setResult(product);
};

return (
    <div>
        <h2>Tridimencional</h2>
        <div>
            <h3>Matrices A</h3>
            {tensorA.map((layer, i) => (
                <div key={`A-layer-${i}`}>
                    <h4>Matriz {i + 1}</h4>
                    {layer.map((row, j) => (
                    <div key={`A-layer-${i}-row-${j}`}>
                        {row.map((val, k) => (
                            <input type="number" value={val} onChange={(e) => handleChange(e, i, j, k, 
                            tensorA, setTensorA)} key={`A-${i}-${j}-${k}`} style={{ marginRight: '5px' }}/>
                        ))}
                    </div>
                    ))}
                </div>
            ))}
        </div>
        <div>
            <h3>Matrices B</h3>
            {tensorB.map((layer, i) => (
                <div key={`B-layer-${i}`}>
                    <h4>Matriz {i + 1}</h4>
                    {layer.map((row, j) => (
                    <div key={`B-layer-${i}-row-${j}`}>
                        {row.map((val, k) => (
                            <input type="number" value={val} onChange={(e) => handleChange(e, i, j, k, tensorB, setTensorB)}
                            key={`B-${i}-${j}-${k}`} style={{ marginRight: '5px' }}/>
                        ))}
                    </div>
                    ))}
                </div>
            ))}
        </div>
        <button onClick={addTensors}>Suma</button>
        <button onClick={subtractTensors}>Resta</button>
        <button onClick={multiplyTensors}>Multiplicacion</button>
        <div>
            <h3>Resultado</h3>
            {result.length > 0 ? result.map((layer, i) => (
            <div key={`result-layer-${i}`}>
                <h4>Matriz {i + 1}</h4>
                {layer.map((row, j) => (
                    <div key={`result-layer-${i}-row-${j}`}> {row.map((val, k) => 
                        (<span key={`result-${i}-${j}-${k}`}>{val} </span>
                    ))}
                </div>
                ))}
            </div>
            )) : <span>No hay resultado</span>}
        </div>
    </div>
  );
};

// Zona principal en donde se escoje el tipo de vector
const Calculator: React.FC = () => {
const [mode, setMode] = useState<'vector' | 'matrix' | 'tensor'>('vector');
// Zona para escojer el tipo de matriz
return (
    <div>
        <div>
            <h1>Escoje el tipo de Matriz</h1>
            <button onClick={() => setMode('vector')}>Matrices unidimencionales</button>
            <button onClick={() => setMode('matrix')}>Matrices bidemensionales</button>
            <button onClick={() => setMode('tensor')}>Matrices Tridimecional</button>
        </div>
        {mode === 'vector' ? <VectorCalculator /> : mode === 'matrix' ? <MatrixCalculator /> : <TensorCalculator />}
    </div>
  );
};


export default Calculator;