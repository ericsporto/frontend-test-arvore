import { useState } from 'react';
import BookField from './components/bookField';
import Footer from './components/footer';
import Header from './components/header';
import useFetchBooks from './queries/getBooks';
import { StyledMainContainer } from './styles/mainContainer';
import Spinner from './components/spinner';

function App() {
  const [text, setText] = useState('');
  const [sendSearch, setSendSearch] = useState('Query');
  const [hasSearch, setHasSearch] = useState(false);

  const { data: adventureBooks, isLoading: adventureLoading } = useFetchBooks('Aventura');
  const { data: actionBooks, isLoading: actionLoading } = useFetchBooks('Ação');
  const { data: highlightsBooks, isLoading: highlightsLoading } = useFetchBooks('Destaques');
  const { data: childrenBooks, isLoading: childrenLoading } = useFetchBooks('Infantil');

  const { data: filteredBooks, isLoading } = useFetchBooks(sendSearch);

  const handleSearch = () => {
    setSendSearch(text);
  };

  return (
    <>
      <Header
        setText={setText}
        setHasSearch={setHasSearch}
        handleSearch={handleSearch}
      />
      {!hasSearch && (
        <StyledMainContainer>
          <BookField
            title="Aventura"
            tag="h1"
            fontSize="md"
            fontWeight={600}
            data={adventureBooks}
            isLoading={adventureLoading}
          />
          <BookField
            title="Ação"
            tag="h1"
            fontSize="md"
            fontWeight={600}
            data={actionBooks}
            isLoading={actionLoading}
          />
          <div style={{ color: '#A977D8', backgroundColor: '#DAF6F3' }}>
            <BookField
              title="Destaques"
              tag="h1"
              fontSize="2xl"
              fontWeight={600}
              data={highlightsBooks}
              isLoading={highlightsLoading}
            />
          </div>
          <BookField
            title="Infantil"
            tag="h1"
            fontSize="md"
            fontWeight={600}
            data={childrenBooks}
            isLoading={childrenLoading}
          />
        </StyledMainContainer>
      )}

      {hasSearch && (
        <StyledMainContainer>
           <BookField
            title="Infantil"
            tag="h1"
            fontSize="md"
            fontWeight={600}
            data={filteredBooks}
          />
        </StyledMainContainer>
      )}

      <div style={{ maxWidth: '1136px', margin: ' 0 auto' }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
