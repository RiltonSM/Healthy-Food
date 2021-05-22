import styled from 'styled-components';

export const Container = styled.main`
    width: calc(100% - 8.5625rem);
    height: calc(100% - (3rem + 6.125rem));

    padding: 3rem 0px 6.125rem 8.5625rem;

    background-color: #FAFAFC;

    overflow-y: hidden;

    @media (max-width: 550px) {
        width: calc(100% - 1rem);
        height: calc(100% - (3rem + 6.125rem));
        padding: 3rem 0rem 6.125rem 1rem;
    }
`;

export const TitleAndTextContainer = styled.div`
    /* width: 100%; */

    display: flex;
    flex-direction: column;
    align-items: center;

    padding-right: 8.5625rem;

    margin-bottom: 2rem;

    @media (max-width: 550px) {
        padding-right: 1rem;
    }
`

export const Title = styled.h1`
    font: normal normal bold 2rem Montserrat;
    letter-spacing: 0.96px;
    color: #1D164D;

    margin: 0;
    margin-bottom: 1rem;
`;

export const Text = styled.p`
    width: 31.875rem;

    font: normal normal normal 1rem/1.6875rem Muli;
    letter-spacing: 0.48px;
    color: #9E9BAF;
    text-align: center;

    margin: 0;
`;