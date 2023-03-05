import styled from 'styled-components';

interface BookCardProps {
  url: any;
  image: any
}

export const CardFiltered = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  max-width: 124px;
  width: 100%;
  height: 185px;
  margin-right: 20px;
  margin-bottom: 16px;
  box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
  border-radius: 8px 16px 16px 8px;
  overflow: hidden;
`;
export const CardNotAvailableFiltered = styled.div`
  position: absolute;
  max-width: 124px;
  width: 100%;
  height: 185px;
  margin-right: 20px;
  margin-bottom: 16px;
  box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
  border-radius: 8px 16px 16px 8px;
  overflow: hidden;
`;

const BookCardFiltered: React.FC<BookCardProps> = ({ url, image }) => {
  return (
    <CardFiltered>
      <CardNotAvailableFiltered>
      <img src={image} alt="overlay" width="100%" height="100%" />
      </CardNotAvailableFiltered>
      <img src={url} alt="book" width="100%" height="100%" />
    </CardFiltered>
  );
};

BookCardFiltered.displayName = 'BookCardFiltered';

export default BookCardFiltered;
