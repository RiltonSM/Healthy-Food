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

export const Header = styled.header`
    width: 100%;
    height: 6.4375rem;

    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const HeaderTitle = styled.h2`
    font: normal normal bold 2rem/2.4375rem Montserrat;
    letter-spacing: 0px;
    color: #BADC58;

    margin: 0;
`;

export const NavContainer = styled.nav`
    width: 28.4375rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

export const NavItem = styled.span`
    font: normal normal bold 1rem/1.25rem Muli;
    letter-spacing: 0.32px;
    color: #FFFFFF;

    cursor: pointer;
`;

export const RegisterButton = styled.button`
    width: 8.125rem;
    height: 3.25rem;

    background-color: #FFFFFF;
    border-radius: 5px;
    border: none;

    box-shadow: none;

    font: normal normal bold 1rem/1.25rem Muli;
    letter-spacing: 0.32px;
    color: #BADC58;

    outline: none;
`;

export const Content = styled.main`
    width: 100%;
    height: calc(100% - 6.4375rem);
`;

export const PageQuestionText = styled.h1`
    font: normal normal bold 3rem/4.375rem Montserrat;
    letter-spacing: 1.44px;
    color: #1D164D;
    
    padding-top: 13.875rem;

    margin-top: 0px;
    margin-bottom: 2rem;

    @media (max-width: 1024px) {
        padding-top: 7rem;
    }
`;

export const InputContainer = styled.div`
    width: 20.4375rem;
`;