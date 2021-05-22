import styled from 'styled-components';

export const Whapper = styled.div`
    width: 100%;
    height: 100%;
`;

export const Container = styled.div`
    height: 100%;

    padding: 0px 8.625rem 0px 8.625rem;

    @media (max-width: 500px){
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;

export const Content = styled.main`
    width: 100%;
    height: calc(100% - 6.4375rem);

    @media (max-width: 700px){
        display: flex;
        justify-content: center;
    }
`;

export const InputContainer = styled.div`
    width: 20.4375rem;
`;

export const TitleContainer = styled.div`
    width: 21.4375rem;

    display: flex;
    justify-content: center;

    @media (max-width: 700px){
        width: 30.4375rem;
    }

    @media (max-width: 700px){
        width: 100%;
    }
`

export const Title = styled.h1`
    font: normal normal bold 1.5rem Montserrat;
    letter-spacing: 1.44px;
    color: #1D164D;

    margin-bottom: 1rem;
`;