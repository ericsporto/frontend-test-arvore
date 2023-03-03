import { BooksModel } from '../../interfaces/books';
import { StyledBookContainer } from '../../styles/bookContainer';
import { StyledText } from '../../styles/typography';

interface BookFieldProps {
  title: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  fontSize: "2xl" | "lg" | "md" | "sm" | "xs";
  fontWeight: 700 | 600 | 500 | 400;
  data?: BooksModel
}

const BookField: React.FC<BookFieldProps> = ({
  title,
  tag,
  fontSize,
  fontWeight,
  data,
}) => {
  return (
    <StyledBookContainer>
      <StyledText tag={tag} fontSize={fontSize} fontWeight={fontWeight}>
        {title}
      </StyledText>
      {data?.items.map((item, index) => <li key={index}>{item.saleInfo.country}</li>
      )}
    </StyledBookContainer>
  );
};

BookField.displayName = 'Header';
export default BookField;
