//Components
import Slider from '../../components/Slider';
import SliderCard from '../../components/SliderCard';

//Styles
import { 
    Container,
    TitleAndTextContainer,
    Title,
    Text,
} from './styles';

//Data
import blogData from '../../data/blogData';

const Blog = () => {
    const generateCards = () => {
        return blogData.map(post => {
            return (
                <SliderCard
                    key={post.id}
                    title={post.title}
                    blogImage={post.postImg}
                    authorPhoto={post.authorPhoto}
                    authorName={post.authorName}
                />
            )
        })
    }

    return (
        <Container>
            <TitleAndTextContainer>
                <Title>Read Our Blog</Title>
                <Text>Far far away, behind the word mountains, far from the countries Vokalia and Consonantia, there live the blind texts.</Text>
            </TitleAndTextContainer>

            <Slider>
                { generateCards() }
            </Slider>
        </Container>
    )
}

export default Blog;