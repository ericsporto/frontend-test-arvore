import { Dispatch, SetStateAction } from 'react';
import { StyledMainContainer } from './../../styles/mainContainer';
import FilterField from './../../components/filterField';
import BookFilteredField from './../../components/bookFilteredField';
import { Item } from './../../types/books';
import { BookFilteredBox } from './../../styles/bookContainer';

interface SearchPageProps {
  data: Item[];
  sendSearch: string;
  setShowModal: (showModal: boolean) => void;
  setType: Dispatch<SetStateAction<boolean | null>>;
  setType1: Dispatch<SetStateAction<boolean | null>>;
  setAvailable: Dispatch<SetStateAction<string>>;
  setAvailable1: Dispatch<SetStateAction<string>>;
  setMoney: Dispatch<SetStateAction<number>>;
  setMoney1: Dispatch<SetStateAction<number>>;
  setMoney2: Dispatch<SetStateAction<number>>;
  setMoney3: Dispatch<SetStateAction<number>>;
}

const SearchPage: React.FC<SearchPageProps> = ({
  data,
  sendSearch,
  setShowModal,
  setMoney,
  setMoney1,
  setMoney2,
  setMoney3,
  setAvailable,
  setAvailable1,
  setType,
  setType1,
}) => {
  return (
    <>
      <StyledMainContainer>
        <BookFilteredBox>
          <FilterField
            setType={setType}
            setType1={setType1}
            setAvailable={setAvailable}
            setAvailable1={setAvailable1}
            setMoney={setMoney}
            setMoney1={setMoney1}
            setMoney2={setMoney2}
            setMoney3={setMoney3}
          />
          <BookFilteredField
            title={sendSearch}
            tag="h1"
            fontSize="md"
            fontWeight={600}
            data={data}
            setShowModal={setShowModal}
          />
        </BookFilteredBox>
      </StyledMainContainer>
    </>
  );
};

SearchPage.displayName = 'SearchPage';
export default SearchPage;
