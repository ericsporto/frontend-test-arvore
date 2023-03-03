import styled from 'styled-components';

interface BookContainerProps {
  children: React.ReactNode;
}

export const BookCardContainer = styled.div`
  width: 100%;
  display: flex;
  margin-top: 40px;
  overflow: auto;
`;

const BookCardField: React.FC<BookContainerProps> = ({ children }) => {
  return <BookCardContainer>{children}</BookCardContainer>;
};

BookCardField.displayName = 'BookCardField';

export default BookCardField;
