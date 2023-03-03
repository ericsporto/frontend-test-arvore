import { StyledBookContainer } from "../../styles/bookContainer";
import { StyledText } from "../../styles/typography";

interface BookFieldProps {
    title: string
}

const BookField: React.FC<BookFieldProps> = ({title}) => {
    return (
      <StyledBookContainer>
        <h1>Book Field</h1>
      </StyledBookContainer>
    );
  };

  BookField.displayName = 'Header';
  export default BookField;
