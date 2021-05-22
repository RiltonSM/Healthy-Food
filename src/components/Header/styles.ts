import styled from 'styled-components';
import { motion } from 'framer-motion';

//Interfaces
import { MobileMenuInterface } from './interfaces';

export const UltraContainer = styled.div`
    width: 100%;
    height: 6.4375rem;

    @media (max-width: 992px){
        width: 100vw;
        margin-left: -8.625rem;
    }

    @media (max-width: 500px){
        margin-left: -4rem;
    }
`;

export const SuperContainer = styled(motion.div)`
    position: fixed;
    top: 0;
    z-index: 500;
    width: calc(100% - (2*8.625rem));
    
    @media (max-width: 992px){
        width: 100%;
        /* margin-left: -8.625rem; */
    }
`;

export const Container = styled.header`
    width: 100%;
    height: 6.4375rem;

    display: flex;
    justify-content: space-between;
    align-items: center;

    background-color: ${(p: MobileMenuInterface) => p.isVisible ? "#BADC58" : "transparent"};

    @media (max-width: 992px){
        width: calc(100% - 2*8.625rem);
        padding-left: 8.625rem;
        padding-right: 8.625rem;
    }

    @media (max-width: 500px){
        width: calc(100% - 8rem);
        padding-left: 4rem;
        padding-right: 4rem;
    }
`;

export const HeaderTitle = styled(motion.h2)`
    font: normal normal bold 2rem/2.4375rem Montserrat;
    letter-spacing: 0px;
    color: ${(p: MobileMenuInterface) => p.isVisible ? "#FFFFFF" : "#BADC58"};;

    margin: 0;

`;

export const NavContainer = styled.nav`
    width: 28.4375rem;
    
    display: flex;
    justify-content: space-between;
    align-items: center;

    @media (max-width: 992px){
        display: none;
    }
`;

export const NavItem = styled.p`
    font: normal normal bold 1rem/1.25rem Muli;
    letter-spacing: 0.32px;
    color: #FFFFFF;

    margin: 0px;

    cursor: pointer;

    @media (max-width: 992px){
        margin-bottom: 1rem;
    }
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

export const MenuMobile = styled(motion.div)`
    display: none;
    z-index: 500;
    width: 100%;
    height: auto;
    background-color: #BADC58;

    @media (max-width: 992px){
        display: ${(p: MobileMenuInterface) => p.isVisible ? "block" : "none"};
        padding-top: 15px;
        padding-left: 8.625rem;
        padding-bottom: 15px;
    }

    @media (max-width: 500px){
        padding-left: 4rem;
    }
`;

// export const MenuMobileRouteLabel = styled.h2`
//     font: normal normal normal 1.5rem Circular Std Book;
//     width: 100%;
//     margin-bottom: 10px;
//     text-decoration: none;
//     cursor: pointer;
// `;

export const MenuIconImage = styled.div`
    display: none;
    color: #FFFFFF;
    @media (max-width: 992px){
        display: block;
        /* margin-right: 3.4375rem; */
    }
    
    @media (max-width: 700px){
        color: ${(p: MobileMenuInterface) => p.isVisible ? "#FFFFFF" : "#BADC58"};
    }    
`;