//Components
import RecipesCard from '../../components/RecipesCard';

//Styles
import { 
    Container,
    TitleAndTextContainer,
    Title,
    Text,
    ContentContainer,
    RecipesRow
} from './styles';

//Assets
import broccoliWithBacon from '../../assets/img/comida_1.svg';
import burguer from '../../assets/img/comida_2.svg';
import potateSalad from '../../assets/img/comida_3.svg';
import cherry from '../../assets/img/comida_4.svg'

const Recipes = () => {
    return(
        <Container>
            <TitleAndTextContainer>
                <Title>Our Best Recipes</Title>
                <Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
            </TitleAndTextContainer>

            <ContentContainer>
                <RecipesRow>
                    <RecipesCard img={broccoliWithBacon} title="Broccoli Salad with Bacon"/>
                    <RecipesCard img={burguer} title="Classic Beef Burgers"/>
                </RecipesRow>
                <RecipesRow>
                    <RecipesCard img={potateSalad} title="Classic Potato Salad"/>
                    <RecipesCard img={cherry} title="Cherry Cobbler on the Grill"/>
                </RecipesRow>
            </ContentContainer>
        </Container>
    )
}

export default Recipes;