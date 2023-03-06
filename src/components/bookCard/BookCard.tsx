import styled from 'styled-components';

interface BookCardProps {
  url: any;
  image: any;
}

export const Card = styled.div`
  position: relative;
  top: 0px;
  left: 0px;
  min-width: 198px;
  height: 296px;
  margin-right: 30px;
  box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
  border-radius: 8px 16px 16px 8px;
  overflow: hidden;
  @media (max-width: 1024px) {
    min-width: 124px;
    height: 185px;
    margin-right: 20px;
  }
  @media (max-width: 530px) {
    min-width: 57px;
    height: 85px;
    margin-right: 16.5px;
  }
`;
export const CardNotAvailable = styled.div`
  position: absolute;
  min-width: 198px;
  height: 296px;
  margin-right: 30px;
  box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
  border-radius: 8px 16px 16px 8px;
  overflow: hidden;
  @media (max-width: 1024px) {
    min-width: 124px;
    height: 185px;
    margin-right: 20px;
  }
  @media (max-width: 530px) {
    min-width: 57px;
    height: 85px;
    margin-right: 16.5px;
  }
`;

const BookCard: React.FC<BookCardProps> = ({ url, image }) => {
  return (
    <Card>
      <CardNotAvailable>
        <img src={image} alt="overlay" width="100%" height="100%" />
      </CardNotAvailable>
      <img src={url} alt="book" width="100%" height="100%" />
    </Card>
  );
};

BookCard.displayName = 'BookCard';

export default BookCard;
