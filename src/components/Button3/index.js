
import { ButtonContainer } from './styles';

const Button2 = ({label, onClick}) => {
    return (
      <ButtonContainer onClick={onClick}>
        {label}
      </ButtonContainer>
    );
  }
  
  export default Button2;