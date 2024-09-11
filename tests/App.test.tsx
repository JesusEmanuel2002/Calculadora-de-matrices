import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom';
import Calculator from '../src/Calculator'; // Ruta para la calculadora

test('renders Calculator and switches between modes', () => {
    render(<Calculator />);

    // Sesion de unidimencionales y el resto de los tipos de matrices
    expect(screen.getByText('Matrices unidimencionales')).toBeInTheDocument();
    expect(screen.queryByText('Matrices bidemencionales')).not.toBeInTheDocument();
    expect(screen.queryByText('de Tridimencionales')).not.toBeInTheDocument();

    // Sesion de bidemencionales
    fireEvent.click(screen.getByText('Matrices bidemencionales'));
    expect(screen.getByText('Matriz A')).toBeInTheDocument();
    expect(screen.getByText('Matriz B')).toBeInTheDocument();
    expect(screen.queryByText('Matrices unidimencionales')).not.toBeInTheDocument();
    expect(screen.queryByText('de Tridimencionales')).not.toBeInTheDocument();

    // Sesion de Tridimencionales
    fireEvent.click(screen.getByText('de Tridimencionales'));
    expect(screen.getByText('Matriz A')).toBeInTheDocument();
    expect(screen.getByText('Matriz B')).toBeInTheDocument();
    expect(screen.queryByText('Matrices unidimencionales')).not.toBeInTheDocument();
    expect(screen.queryByText('Matrices bidemencionales')).not.toBeInTheDocument();
});