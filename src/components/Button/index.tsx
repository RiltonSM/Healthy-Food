//Styles
import { ButtonContainer } from './styles';

//Interfaces
import { ButtonProps } from './interfaces';

const Button = ({ width, height, children, ...rest}: ButtonProps) => {
    return(
        <ButtonContainer width={width} height={height} {...rest}>
            {children}
        </ButtonContainer>
    )
}

export default Button;