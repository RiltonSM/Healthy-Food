//Styles
// import {
//     CircleContainer
// } from './styles'

//Assets
import nextArrow from '../../assets/img/arrow-next.png';

const ArrowNext = (props) => {
    const { className, style, onClick } = props;

    const handleClick = () => {
        onClick();
    }
    return(

        <div
            onClick={() => handleClick()}
        >
            <img 
                style={{...style, width: '3.5rem', height: '3.5rem', borderRadius: "1.75rem"}}
                className={className}
                src={nextArrow}
                alt="Próximo"
            />
        </div>
    )
}

export default ArrowNext;