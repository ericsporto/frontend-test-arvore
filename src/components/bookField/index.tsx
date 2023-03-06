import { BooksModel } from '../../types/books';
import { StyledText } from '../../styles/typography';
import BookCard from '../bookCard';
import Overlay from '../../../public/img/not_available.png';
import NoImage from '../../../public/img/book-sem-capa.jpg';
import styled from 'styled-components';
import Next from '../../../public/img/next-arrow.svg';
import Prev from '../../../public/img/prev-arrow.png';
import { useRef } from 'react';
import Spinner from '../spinner';
import { BookBox } from '../../styles/bookContainer';

interface BookFieldProps {
  title: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize?: '2xl' | 'lg' | 'md' | 'sm' | 'xs';
  fontWeight: 700 | 600 | 500 | 400;
  data?: BooksModel;
  isLoading?: boolean;
}

export const StyledBookContainer = styled.div`
  width: 100%;
  height: 426px;
  margin-top: 20px;
  position: relative;
  @media (max-width: 1024px) {
    height: 275px;
  }
  @media (max-width: 530px) {
    height: 115px;
    margin: 35px 0;
  }
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
  @media (max-width: 1024px) {
    margin-top: 0px;
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
  @media (max-width: 650px) {
    display: none;
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
  @media (max-width: 650px) {
    display: none;
  }
`;

const TitleBox = styled.div`
  margin-top: 20px;
  padding-top: 30px;

  @media (max-width: 1024px) {
    margin-top: 20px;
    padding-top: 20px;
    padding-bottom: 10px;
  }
  @media (max-width: 650px) {
    margin-top: 15px;
    padding-top: 15px;
  }
  @media (max-width: 530px) {
    margin-top: 0px;
    padding-top: 0px;
    padding-bottom: 15px;
  }
`;

const BookField: React.FC<BookFieldProps> = ({
  title,
  tag,
  fontSize,
  fontWeight,
  data,
  isLoading,
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
      <BookBox>
        <BookPrevAction onClick={handleLeftClick}>
          <img src={Prev} alt="next-arrow" />
        </BookPrevAction>
        <TitleBox>
          <StyledText tag={tag} fontSize={fontSize} fontWeight={fontWeight}>
            {title}
          </StyledText>
        </TitleBox>
        <BookCardContainer ref={control}>
          {data?.items.map((item, index) => (
            <BookCard
              url={
                item.volumeInfo?.imageLinks?.thumbnail
                  ? item.volumeInfo?.imageLinks?.thumbnail
                  : NoImage
              }
              key={index}
              image={
                item.saleInfo.saleability === 'NOT_FOR_SALE'
                  ? Overlay
                  : item.volumeInfo?.imageLinks?.thumbnail
              }
            />
          ))}
        </BookCardContainer>
        <BookNextAction onClick={handleRightClick}>
          <img src={Next} alt="next-arrow" />
        </BookNextAction>
        {isLoading && <Spinner />}
      </BookBox>
    </StyledBookContainer>
  );
};

BookField.displayName = 'BookField';
export default BookField;
