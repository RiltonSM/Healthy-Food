import styled from 'styled-components';

export const Container = styled.div`
    width: calc(50% - 1rem);
    height: 14.0625rem;

    display: flex;

    box-shadow: 0px 15px 20px #1D164D14;
    border-radius: 7px;

    @media (max-width: 1150px) {
        flex-direction: column;
        width: 15.8125rem;
        height: auto;

        padding-bottom: 1rem;

        margin-bottom: 2.25rem;
    }
`;

export const RecipeImage = styled.div`

`

export const ContentText = styled.div`
    flex-grow: 1;

    display: flex;
    flex-direction: column;
    justify-content: center;

    padding-left: 2rem;

    @media (max-width: 1150px) {
        flex-direction: column;
        align-items: center;
        padding-top: 1rem;
        padding-left: 0px;

    }
`;

export const RecipeName = styled.h2`
    max-width: 12.5rem;

    font: normal normal bold 1.5rem/2.125rem Montserrat;
    letter-spacing: 0.72px;
    color: #1D164D;
    
    margin: 0;
    margin-bottom: 1rem;

    @media (max-width: 1150px) {
        text-align: center;
    }
`;