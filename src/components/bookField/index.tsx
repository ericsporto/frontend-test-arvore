import { BooksModel } from '../../interfaces/books';
import { StyledBookContainer } from '../../styles/bookContainer';
import { StyledText } from '../../styles/typography';
import BookCard from '../bookCard';
import BookCardField from '../bookCard/BookCardField';
import NoImage from '../../../public/img/no-book-image.png';

interface BookFieldProps {
  title: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize: '2xl' | 'lg' | 'md' | 'sm' | 'xs';
  fontWeight: 700 | 600 | 500 | 400;
  data?: BooksModel;
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
      <div style={{ marginTop: '20px' }}>
        <StyledText tag={tag} fontSize={fontSize} fontWeight={fontWeight}>
          {title}
        </StyledText>
      </div>
      <BookCardField>
        {data?.items.map((item, index) => (
          <BookCard url={item.volumeInfo?.imageLinks?.thumbnail ? item.volumeInfo?.imageLinks?.thumbnail : NoImage} key={index}/>
        ))}
      </BookCardField>
    </StyledBookContainer>
  );
};

BookField.displayName = 'Header';
export default BookField;
