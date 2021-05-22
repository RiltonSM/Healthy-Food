//Styles
import {
    Container,
    ContentText,
    Title,
    AuthorContainer,
    PerfilPhoto,
    AuthorName
} from './styles';

//Interfaces
import { SliderCardPropsInterface } from './interfaces';

const SliderCard = (props: SliderCardPropsInterface) => {
    return(
        <Container>
            <img src={props.blogImage} alt="foto-blog"/>

            <ContentText>
                <Title>{props.title}</Title>

                <AuthorContainer>
                    <PerfilPhoto src={props.authorPhoto} alt="foto-author"/>
                    <AuthorName>{props.authorName}</AuthorName>
                </AuthorContainer>
            </ContentText>
        </Container>
    )
}

export default SliderCard;