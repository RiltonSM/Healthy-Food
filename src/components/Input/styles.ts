import styled from 'styled-components';

export const InputContainer = styled.input`
    width: calc(100% - 1rem);
    height: 3.125rem;

    display: block;

    font: normal normal normal 16px/20px Muli;
    
    padding: 0;
    padding-left: 1rem;

    border: 1px solid #2D3561;
    border-radius: 5px;

    outline: none;

    ::placeholder{
        letter-spacing: 0.32px;
        color: #B4B4B4;
    }
`;