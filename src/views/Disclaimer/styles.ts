import styled from 'styled-components';

export const Container = styled.main`
    width: 100%;
    height: 100%;

    display: flex;
`;

export const ImageContainer = styled.section`
    width: 50%;
    height: 100%;

    @media (max-width: 950px){
        display: none;
    }
`;

export const ContentContainer = styled.section`
    width: 50%;
    height: 100%;

    display: flex;
    justify-content: flex-start;
    align-items: center;

    @media (max-width: 950px){
        width: 100%;
        justify-content: center;
    }
`;

export const TextContainer = styled.div`
    width: 26.25rem;
`;

export const Title = styled.h1`
    margin: 0;

    font: normal normal bold 2rem/2.6875rem Montserrat;
    letter-spacing: 0.96px;
    color: #2D3561;

    margin-bottom: 2rem;
`;

export const Text = styled.p`
    font: normal normal normal 1rem/1.6875rem Muli;
    letter-spacing: 0.48px;
    color: #BCBCBC;

    margin-bottom: 2rem;
`;

