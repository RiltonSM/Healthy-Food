import { useState } from 'react';
import { Link } from 'react-router-dom';
import { FiMenu } from 'react-icons/fi';
import { AnimatePresence } from 'framer-motion';

//Styles
import {
    UltraContainer,
    SuperContainer,
    Container,
    HeaderTitle,
    NavContainer,
    NavItem,
    RegisterButton,
    MenuMobile,
    MenuIconImage
} from './styles'

const Header = () => {
    const [menuMobileIsVisible, setMenuMobileIsVisible] = useState(false);

    return(
        <UltraContainer>
            <SuperContainer layout>
                <Container isVisible={menuMobileIsVisible}>
                    <HeaderTitle isVisible={menuMobileIsVisible} layout>Healthy Food</HeaderTitle>

                    <NavContainer>
                        <Link to="/recipes">
                            <NavItem>HEALTHY RECIPES</NavItem>
                        </Link>
                        <Link to="/blog">
                            <NavItem>BLOG</NavItem>
                        </Link>
                        <Link to="/membership">
                            <NavItem>JOIN</NavItem>
                        </Link>
                        
                        <Link to="/register">
                            <RegisterButton>REGISTER</RegisterButton>
                        </Link>
                    </NavContainer>
                    <MenuIconImage isVisible={menuMobileIsVisible} onClick={() => setMenuMobileIsVisible(!menuMobileIsVisible)}>
                        <FiMenu style={{width: '2rem', height: '2rem'}}/>
                    </MenuIconImage>
                </Container>
                <AnimatePresence>
                    {
                        menuMobileIsVisible && (
                            <MenuMobile isVisible={menuMobileIsVisible} layout>
                                <div>
                                    <Link to="/recipes">
                                        <NavItem>HEALTHY RECIPES</NavItem>
                                    </Link>
                                    <Link to="/blog">
                                        <NavItem>BLOG</NavItem>
                                    </Link>
                                    <Link to="/membership">
                                        <NavItem>JOIN</NavItem>
                                    </Link>
                                    
                                    <Link to="/register">
                                        <RegisterButton>REGISTER</RegisterButton>
                                    </Link>
                                </div>
                            </MenuMobile>
                        )
                    }
                </AnimatePresence>
            </SuperContainer>
        </UltraContainer>
    )
} 

export default Header;