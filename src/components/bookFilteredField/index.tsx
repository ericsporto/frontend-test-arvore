import { Item } from '../../interfaces/books';
import { StyledText } from '../../styles/typography';
import Overlay from '../../../public/img/not_available.png';
import NoImage from '../../../public/img/book-sem-capa.jpg';
import FilterIcon from '../../../public/img/filter-icon.svg';
import styled from 'styled-components';
import Spinner from '../spinner';
import BookCardFiltered from '../bookCard/BookCardFiltered';
import { useState } from 'react';
interface BookFieldProps {
  title: string;
  tag: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
  fontSize: '2xl' | 'lg' | 'md' | 'sm' | 'xs';
  fontWeight: 700 | 600 | 500 | 400;
  data?: Item[];
  isLoading?: boolean;
  setShowModal: (showModal: boolean) => void;
}
export const StyledBookContainerFiltered = styled.div`
  width: 100%;
  height: 100%;
  margin-top: 20px;
`;
export const BookCardContainerFiltered = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 100%;
  margin-top: 40px;
  @media (max-width: 1024px) {
    width: 90%;
  }
  @media (max-width: 640px) {
    width: 100%;
    padding-left: 20px;
  }
`;
export const BookCardInfoFiltered = styled.div`
  display: flex;
  flex-direction: column;
  word-break: break-word;
  max-width: 130px;
  margin-bottom: 40px;
  gap: 10px;
`;
export const BookResults = styled.div`
  margin-top: 20px;
  padding-top: 30px;
  @media (max-width: 640px) {
    padding-left: 15px;
    padding-top: 0px;
  }
`;
export const MobileButtonBox = styled.div`
  display: none;
  padding: 30px 15px 0px 15px;
  @media (max-width: 640px) {
    display: flex;
  }
`;
export const MobileClearButtonBox = styled.div`
  display: none;
  @media (max-width: 640px) {
    display: flex;
    width: 100%;
    justify-content: center;
    padding: 0 15px;
  }
`;
export const StyledClearFilterMobileButton = styled.button`
  width: 100%;
  height: 55px;
  color: #ffffff;
  background: #adb7bf;
  border: 1px solid rgba(64, 106, 118, 0.2);
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  margin-top: 10px;
  transition: all 400ms ease-in-out;
  &:hover {
    background: #788188;
  }
`;

export const MobileFilterButton = styled.button`
  background: #8553f4;
  color: #ffffff;
  border: none;
  border-radius: 10px;
  font-family: 'Inter';
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  padding: 10px;
  width: 100%;
  height: 55px;
  justify-content: center;
  align-items: center;
  gap: 5px;
  cursor: pointer;
  &:hover {
    background: #6633d3;
  }
  @media (max-width: 640px) {
    display: flex;
  }
`;

const BookFilteredField: React.FC<BookFieldProps> = ({
  title,
  tag,
  fontSize,
  fontWeight,
  data,
  isLoading,
  setShowModal,
}) => {
  const [showClearButton, setShowClearButton] = useState(false);

  return (
    <StyledBookContainerFiltered>
      <div style={{ maxWidth: '744px', margin: ' 0 auto' }}>
        <BookResults>
          <StyledText tag={tag} fontSize={fontSize} fontWeight={fontWeight}>
            {`Resultados para "${title}"`}
          </StyledText>
        </BookResults>
        <MobileButtonBox>
          <MobileFilterButton
            onClick={() => {
              setShowModal(true), setShowClearButton(true);
            }}
          >
            <img src={FilterIcon} alt="filter-icons" />
            FILTRAR
          </MobileFilterButton>
        </MobileButtonBox>
        <MobileClearButtonBox>
          {showClearButton && (
            <StyledClearFilterMobileButton
              onClick={() => setShowClearButton(false)}
            >
              LIMPAR FILTRO
            </StyledClearFilterMobileButton>
          )}
        </MobileClearButtonBox>
        <BookCardContainerFiltered>
          {data?.map((item, index) => (
            <div key={index} style={{ display: 'column' }}>
              <BookCardFiltered
                url={item.volumeInfo?.imageLinks?.thumbnail ? item.volumeInfo?.imageLinks?.thumbnail : NoImage }
                image={
                  item.saleInfo.saleability === 'NOT_FOR_SALE'
                    ? Overlay
                    : item.volumeInfo?.imageLinks?.thumbnail
                }
              />
              <BookCardInfoFiltered>
                <StyledText tag="h6" fontSize="xs" fontWeight={600}>
                  {item.volumeInfo.title}
                </StyledText>
                <span style={{ color: '#999999' }}>
                  <StyledText tag="h6" fontSize="x" fontWeight={400}>
                    {item.volumeInfo.authors}
                  </StyledText>
                </span>
              </BookCardInfoFiltered>
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
