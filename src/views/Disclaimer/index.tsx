//Components
import Button from '../../components/Button';

//Styles
import {
    Container,
    ImageContainer, 
    ContentContainer,
    TextContainer,
    Title,
    Text
} from './styles';

//Assets
import servicesImage from '../../assets/img/bloco_services.svg';

const Disclaimer = () => {
    return(
        <Container>
            <ImageContainer>
                <img src={servicesImage} alt="Services" style={{ height: '100%' }}/>
            </ImageContainer>
            <ContentContainer>
                <TextContainer>
                    <Title>The best services ready To serve you</Title>

                    <div>
                        <Text>
                            Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.
                        </Text>

                        <Text>
                            Separated they live in Bookmarksgrove right at the coast of the Semantics, a large language ocean.
                        </Text>

                        <Text>
                            A small river named Duden flows by their place and supplies it with the necessary regelialia.
                        </Text>
                    </div>
                    <Button
                        width='9.375rem'
                        height='3.25rem'
                        style={{marginTop: '1rem'}}
                    >
                        Know More
                    </Button>
                </TextContainer>
            </ContentContainer>
        </Container>
    )
}

export default Disclaimer;