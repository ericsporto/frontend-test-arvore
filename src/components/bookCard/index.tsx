import styled from 'styled-components';

interface BookCardProps {
  url: any;
}

export const Card = styled.div`
  min-width: 198px;
  height: 296px;
  margin-right: 30px;
  box-shadow: 0px 8px 10px 1px rgba(5, 59, 75, 0.06);
  border-radius: 8px 16px 16px 8px;
  overflow: hidden;

`;

export const BookCardContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;

`;

const BookCard: React.FC<BookCardProps> = ({ url }) => {
  return (
    <Card>
      <img src={url} alt="book" width="100%" height="100%" />
    </Card>
  );
};

BookCard.displayName = 'Book Card';

export default BookCard;
