//Components
import Header from '../../components/Header';
import Input from '../../components/Input';
import Button from '../../components/Button';

//Styles
import { useHistory } from 'react-router-dom';

//Styles
import { 
    Whapper,
    Container, 
    Content,
    PageQuestionText,
    InputContainer
} from './styles';

//Assets
import searchIcon from '../../assets/img/search-icon.svg';

const Home = () => {
    const history = useHistory();

    const handleClick = () => {
        history.push('/recipes');
    }
    
    return(
        <Whapper id="home-container">
            <Container>
                <Header/>
                <Content>
                    <PageQuestionText>Ready for <br/> Trying a new <br/> recipe?</PageQuestionText>
                    <div style={{display: 'flex', alignItems: 'center'}}>
                        <InputContainer>
                            <Input placeholder="Search healthy recipes"/>
                        </InputContainer>
                        <Button
                            width={'3.25rem'}
                            height={'3.25rem'}
                            style={{marginLeft: 15}}
                            onClick={handleClick}
                        >
                            <img src={searchIcon} alt="Busca" style={{width: '1.5rem', height: '1.5rem', marginTop: '0.5rem'}}/>
                        </Button>
                    </div>
                </Content>
            </Container>
        </Whapper>
    )
}

export default Home;