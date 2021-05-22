//Styles
import { InputContainer } from './styles';

//Interfaces
import { InputProps } from './interfaces'

const Input = (props: InputProps) => {
    return(
        <InputContainer {...props}/>
    )
};

export default Input;