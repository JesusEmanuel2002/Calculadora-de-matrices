// Props si quieres poner los manuel y no con teclado
export interface ButtonProps{
    value: string;
    onClick: () => void;
}

// Tipo para las matrices uni, bidi y tri
export type Vector = number[];
export type Matrix = number[][];
export type Tensor = number[][][];

// Props para las matrices unidimencionales
export interface VectorProps{
    vectorA: Vector;
    vectorB: Vector;
    onChangeVectorA: (index: number, value: number) => void;
    onChangeVectorB: (index: number, value: number) => void;
    onAddVectors: () => void;
    onSubtractVectors: () => void;
    onMultiplyVectors: () => void;
    result: number | Vector;
}

// Props para matrices bidemcionales
export interface MatrixProps{
    matrixA: Matrix;
    matrixB: Matrix;
    onChangeMatrixA: (row: number, col: number, value: number) => void;
    onChangeMatrixB: (row: number, col: number, value: number) => void;
    onAddMatrices: () => void;
    onSubtractMatrices: () => void;
    onMultiplyMatrices: () => void;
    result: Matrix;
}

// Props para matrices tridimencionales
export interface TensorProps{
    tensorA: Tensor;
    tensorB: Tensor;
    onChangeTensorA: (layer: number, row: number, col: number, value: number) => void;
    onChangeTensorB: (layer: number, row: number, col: number, value: number) => void;
    onAddTensors: () => void;
    onSubtractTensors: () => void;
    onMultiplyTensors: () => void;
    result: Tensor;
}