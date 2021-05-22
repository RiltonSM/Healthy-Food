//Components
import Button from '../Button';

//Styles
import {
    Container,
    ContentText,
    RecipeName
} from './styles';

//Interfaces
import { RecipesCardPropsInterface } from './interfaces';

const RecipesCard = (props: RecipesCardPropsInterface) => {
    

    return(
        <Container>
            <img src={props.img} alt="Imagem da receita"/>

            <ContentText>
                <RecipeName>{props.title}</RecipeName>

                <Button
                    width={"8.375rem"}
                    height={"3rem"}
                >
                    See Recipe
                </Button>
            </ContentText>
        </Container>
    )
}

export default RecipesCard;