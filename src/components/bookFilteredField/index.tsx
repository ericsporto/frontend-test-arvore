import { BooksModel, Item } from '../../interfaces/books';
import { StyledText } from '../../styles/typography';
import NoImage from '../../../public/img/no-book-image.png';
import styled from 'styled-components';
import Spinner from '../spinner';
import BookCardFiltered from '../bookCard/BookCardFiltered';
import React from 'react';

interface BookFieldProps {
  title: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize: '2xl' | 'lg' | 'md' | 'sm' | 'xs';
  fontWeight: 700 | 600 | 500 | 400;
  data?: Item[];
  isLoading?: boolean;
}
export const StyledBookContainerFiltered = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
  position: relative;
`;
export const BookCardContainerFiltered = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  display: flex;
  margin-top: 40px;
`;
export const BookCardInfoFiltered = styled.div`
  display: 'flex';
  flex-direction: 'column';
  word-break: 'break-word';
  max-width: '130px';
  margin-bottom: '40px';
  gap: '10px';
`;

const BookFilteredField: React.FC<BookFieldProps> = ({
  title,
  tag,
  fontSize,
  fontWeight,
  data,
  isLoading,
}) => {
  return (
    <StyledBookContainerFiltered>
      <div style={{ maxWidth: '744px', margin: ' 0 auto' }}>
        <div style={{ marginTop: '20px', paddingTop: '30px' }}>
          <StyledText tag={tag} fontSize={fontSize} fontWeight={fontWeight}>
            {`Resultados para "${title}"`}
          </StyledText>
        </div>
        <BookCardContainerFiltered>
          {data?.map((item, index) => (
            <div key={index} style={{ display: 'column' }}>
              <BookCardFiltered
                url={
                  item.volumeInfo?.imageLinks?.thumbnail
                    ? item.volumeInfo?.imageLinks?.thumbnail
                    : NoImage
                }
              />
              <div
                style={{
                  display: 'flex',
                  flexDirection: 'column',
                  wordBreak: 'break-word',
                  maxWidth: '130px',
                  marginBottom: '40px',
                  gap: '5px',
                }}
              >
                <StyledText tag="h6" fontSize="xs" fontWeight={600}>
                  {item.volumeInfo.title}
                </StyledText>
                <span style={{ color: '#999999' }}>
                  <StyledText tag="h6" fontSize="x" fontWeight={400}>
                    {item.volumeInfo.authors}
                  </StyledText>
                </span>
              </div>
            </div>
          ))}
        </BookCardContainerFiltered>
        {isLoading && <Spinner />}
      </div>
    </StyledBookContainerFiltered>
  );
};

BookFilteredField.displayName = 'BookFilteredField';
export default BookFilteredField;
