import styled from 'styled-components';

export const Whapper = styled.main`
    max-width: 100%;
    max-height: 100vh;
    display: flex;

    flex-direction: column;
`

export const Container = styled.div`
    width: 100%;
    max-height: calc(100vh - 6.4375rem);
    /* height: calc(100% - 6.4375rem); */

    display: flex;
    flex-grow: 2;
`;

export const ImageContainer = styled.section`
    width: 50%;
    height: auto;

    display: flex;
    justify-content: flex-end;

    @media (max-width: 992px){
        display: none;
    }
    `;

export const ContentContainer = styled.section`
    width: 50%;
    height: auto;
    
    display: flex;
    justify-content: center;
    align-items: center;
    
    @media (max-width: 992px){
        width: 100%;
        height: calc(100vh - 6.4375rem);
    }

    @media (max-width: 405px){
        height: calc(100vh - 9rem);
    }
`;

export const TextContainer = styled.div`
    width: 28.3125rem;
`;

export const Title = styled.h1`
    margin: 0;

    font: normal normal bold 2rem/2.6875rem Montserrat;
    letter-spacing: 0.96px;
    color: #2D3561;

    margin-bottom: 2rem;
`;

export const Footer = styled.footer`
    width: calc(100% - 2*8.5625rem);
    height: 6.4375rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    padding: 0px 8.5625rem;

    @media (max-width: 992px){
        padding: 0px 6rem;
        width: calc(100% - 2*6rem);
    }

    @media (max-width: 844px){
        flex-direction: column;
        justify-content: center;
    }

    @media (max-width: 500px){
        padding: 0px 3rem;
        width: calc(100% - 2*3rem);
    }
`;

export const CopyRightsText = styled.span`
    font: normal normal normal 16px/20px Muli;
    letter-spacing: 0px;
    color: #1D164D;
    text-align: center;

    @media (max-width: 844px){
        margin-bottom: 1rem;
    }
`;

export const PoliteTermsContainer = styled.div`
    width: 19rem;

    display: flex;
    justify-content: space-between;

    @media (max-width: 992px){
        width: 22rem;
    }

    @media (max-width: 844px){
        width: 100%;
        justify-content: space-around;
    }

    @media (max-width: 405px){
        width: 100%;
        flex-direction: column;
        align-items: center;
    }
`;

export const PoliteTermsText = styled.a`
    font: normal normal normal 16px/20px Muli;
    letter-spacing: 0.32px;
    color: #9E9BAF;

    @media (max-width: 405px){
        margin-bottom: 1rem;
    }
`;

export const Form = styled.form`
    width: 28.3125rem;

    display: flex;
    justify-content: space-between;
`
