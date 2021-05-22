import styled from 'styled-components';

export const Container = styled.main`
    width: calc(100% - 2*8.5625rem);
    height: calc(100% - (3rem + 6.125rem));

    padding: 3rem 8.5625rem 6.125rem 8.5625rem;

    background-color: #FAFAFC;

    @media (max-width: 1150px) {
        height: auto;
    }

    @media (max-width: 550px) {
        width: calc(100% - 2rem);
        padding: 3rem 1rem 6.125rem 1rem;
    }
`;

export const TitleAndTextContainer = styled.div`
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: center;

    margin-bottom: 2rem;
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

export const ContentContainer = styled.div`
    width: 100%;

    @media (max-width: 1150px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
    }
`

export const RecipesRow = styled.div`
    width: 100%;

    display: flex;
    justify-content: space-between;
    align-items: center;

    margin-bottom: 2.25rem;

    @media (max-width: 1150px) {
        display: flex;
        /* flex-direction: column; */
        align-items: center;
        justify-content: space-around;
        
        margin-bottom: 0px;
    }

    @media (max-width: 550px) {
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        
        margin-bottom: 0px;
    }
`;