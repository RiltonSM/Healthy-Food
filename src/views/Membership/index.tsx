import { Link } from 'react-router-dom';

//Components
import Input from '../../components/Input';
import Button from '../../components/Button';

//Styles
import {
    Whapper,
    Container,
    ImageContainer, 
    ContentContainer,
    TextContainer,
    Title,
    Form,
    Footer,
    CopyRightsText,
    PoliteTermsContainer,
    PoliteTermsText
} from './styles';

//Assets
import memberImage from '../../assets/img/bloco_final_image.svg';

const Disclaimer = () => {
    return(
        <Whapper>
            <Container>
                <ContentContainer>
                    <TextContainer>
                        <Title>Join our membership <br/> to get special offer</Title>

                        <Form>
                            <Input placeholder="Enter your email address"/>
                        <Button
                            width='5.8125rem'
                            height='3.25rem'
                            style={{marginLeft: '1rem'}}
                        >
                            Join
                        </Button>
                        </Form>
                    </TextContainer>
                </ContentContainer>
                
                <ImageContainer>
                    <img src={memberImage} alt="Services"/>
                </ImageContainer>
            </Container>
            <Footer>
                <CopyRightsText>© Copyrights 2019 Stack. All Rights Reserved.</CopyRightsText>

                <PoliteTermsContainer>
                    <Link to="/services">
                        <PoliteTermsText>Privacy Policy</PoliteTermsText>
                    </Link>
                    <Link to="/services">
                        <PoliteTermsText>Terms and Conditions</PoliteTermsText>
                    </Link>
                </PoliteTermsContainer>
            </Footer>
        </Whapper>
    )
}

export default Disclaimer;