import { useEffect } from 'react';
import $ from 'jquery';
import Slider from "react-slick";

//Componets
import ArrowNext from '../ArrowNext';

//Styles
import {
    Container
} from './styles';

//Interfaces
import { SliderCardsProps } from './interfaces';

const SliderCards = ({ children }: SliderCardsProps) => {
    useEffect(() => {
        $('.slick-prev').hide();
    }, []);

    const customPaging = (i: number) => {
        return <span>{i + 1}</span>;
    }

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3.2,
        slidesToScroll: 1,
        nextArrow: <ArrowNext/>,
        customPaging: customPaging,
        waitForAnimate: false,
        responsive: [
            {
                breakpoint: 1250,
                settings: {
                    slidesToShow: 2.2,
                }
            },
            {
                breakpoint: 750,
                settings: {
                    slidesToShow: 1.3,
                    // centerMode: true,
                }
            }
        ]
    };

    if(children !== []){
        return (
            <Container id="slider">
                <Slider {...settings}>
                    {children}
                </Slider>
            </Container>
        );
    } else {
        return null
    }

}
  
export default SliderCards;