import styled from 'styled-components';

//Interfaces
import { ButtonContainerProps } from './interfaces';

export const ButtonContainer = styled.button`
    width: ${(p: ButtonContainerProps) => p.width};
    height: ${(p: ButtonContainerProps) => p.height};

    border: none;
    outline: none;

    background-color: #BADC58;
    border-radius: 7px;

    font: normal normal normal 1rem/1.6875rem Muli;
    letter-spacing: 0.48px;
    color: #FFFFFF;
`