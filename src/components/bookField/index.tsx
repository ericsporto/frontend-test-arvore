import { BooksModel } from '../../interfaces/books';
import { StyledText } from '../../styles/typography';
import BookCard from '../bookCard';
import NoImage from '../../../public/img/no-book-image.png';
import styled from 'styled-components';
import Next from '../../../public/img/next-arrow.svg';
import Prev from '../../../public/img/prev-arrow.png';
import { useRef } from 'react';
import Spinner from '../spinner';

interface BookFieldProps {
  title: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize: '2xl' | 'lg' | 'md' | 'sm' | 'xs';
  fontWeight: 700 | 600 | 500 | 400;
  data?: BooksModel;
  isLoading?: boolean;
}

export const StyledBookContainer = styled.div`
  width: 100%;
  height: 426px;
  margin-top:20px;
  position:relative;
`;

export const BookCardContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  overflow: auto;
  flex-flow: row nowrap;
  &::-webkit-scrollbar {
    -webkit-appearance: none;
  }
`;

const BookPrevAction = styled.button`
  position: absolute;
  top: 4rem;
  left: 0;
  right: auto;
  bottom: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: all 400ms ease-in-out;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

const BookNextAction = styled.button`
  position: absolute;
  top: 4rem;
  left: auto;
  right: 0;
  bottom: 0;
  cursor: pointer;
  background-color: transparent;
  border: none;
  transition: all 400ms ease-in-out;
  opacity: 0.3;
  &:hover {
    opacity: 1;
  }
`;

const BookField: React.FC<BookFieldProps> = ({
  title,
  tag,
  fontSize,
  fontWeight,
  data,
  isLoading
}) => {
  const control = useRef<HTMLDivElement>(null);

  const handleLeftClick = (e: any) => {
    e.preventDefault();
    control.current!.scrollLeft -= 150;
  };

  const handleRightClick = (e: any) => {
    e.preventDefault();
    control.current!.scrollLeft += 150;
  };

  return (
    <StyledBookContainer>
      <div
        style={{ maxWidth: '1136px', margin: ' 0 auto', position: 'relative' }}
      >
        <BookPrevAction onClick={handleLeftClick}>
          <img src={Prev} alt="next-arrow" />
        </BookPrevAction>
        <div style={{ marginTop: '20px', paddingTop: '30px' }}>
          <StyledText tag={tag} fontSize={fontSize} fontWeight={fontWeight}>
            {title}
          </StyledText>
        </div>
        <BookCardContainer ref={control}>
          {data?.items.map((item, index) => (
            <BookCard
              url={
                item.volumeInfo?.imageLinks?.thumbnail
                  ? item.volumeInfo?.imageLinks?.thumbnail
                  : NoImage
              }
              key={index}
            />
          ))}
        </BookCardContainer>
        <BookNextAction onClick={handleRightClick}>
          <img src={Next} alt="next-arrow" />
        </BookNextAction>
        {isLoading && <Spinner/>}
      </div>
    </StyledBookContainer>
  );
};

BookField.displayName = 'BookField';
export default BookField;
