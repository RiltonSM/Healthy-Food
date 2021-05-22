import styled from 'styled-components';

export const Container = styled.div`
    width: 21.75rem;
    height: 28.125rem;

    display: flex;
    flex-direction: column;

    box-shadow: 0px 15px 20px #1D164D14;
    border-radius: 7px;

    margin-bottom: 2rem;
`;

export const ContentText = styled.div`
    flex-grow: 1;

    padding: 2rem 0px 2rem 1.5rem;
`;

export const Title = styled.h2`
    font: normal normal bold 1.5rem/2.125rem Montserrat;
    letter-spacing: 0.72px;
    color: #1D164D;

    margin: 0;
    margin-bottom: 1.5rem;
`;

export const AuthorContainer = styled.div`
    width: 100%;

    display: flex;
    align-items: center;
`;

export const PerfilPhoto = styled.img`
    width: 3.25rem;
    height: 3.25rem;

    border-radius: 1.625rem;
`;

export const AuthorName = styled.span`
    font: normal normal normal 1rem/1.25rem Muli;
    letter-spacing: 0.32px;
    color: #9E9BAF;

    margin-left: 0.5rem;
`
