import { useCallback, useEffect, useRef, useState } from 'react';
import BookField from './components/bookField';
import Footer from './components/footer';
import Header from './components/header';
import useFetchBooks from './queries/getBooks';
import { StyledMainContainer } from './styles/mainContainer';
import Spinner from './components/spinner';
import FilterField from './components/filterField';
import BookFilteredField from './components/bookFilteredField';
import useFetchBooksFiltered from './queries/getBooksFiltered';
import { useQueryClient } from 'react-query';
import { Item } from './interfaces/books';

function App() {
  const [text, setText] = useState('');
  const [sendSearch, setSendSearch] = useState('');
  const [hasSearch, setHasSearch] = useState(false);
  const [lastIndex, setLastIndex] = useState(0);
  const queryClient = useQueryClient();
  const [newData, setNewData] = useState<Item[]>([]);
  const loader = useRef(null);

  const { data: adventureBooks, isLoading: adventureLoading } =
    useFetchBooks('Aventura');
  const { data: actionBooks, isLoading: actionLoading } = useFetchBooks('Acao');
  const { data: highlightsBooks, isLoading: highlightsLoading } =
    useFetchBooks('Destaques');
  const { data: childrenBooks, isLoading: childrenLoading } =
    useFetchBooks('Infantil');
  const { data: booksFiltered, isLoading } = useFetchBooksFiltered(
    sendSearch,
    lastIndex
  );

  const handleSearch = async () => {
    await queryClient.invalidateQueries(['filtered']);
    setSendSearch(text);
  };

  const handleObserver = useCallback((entries: any) => {
    const target = entries[0];
    if (target.isIntersecting) {
      setLastIndex((prev) => prev + 5);
    }
  }, []);

  useEffect(() => {
    const option = {
      root: null,
      rootMargin: '20px',
      threshold: 0,
    };
    const observer = new IntersectionObserver(handleObserver, option);
    if (loader.current) observer.observe(loader.current);
  }, [handleObserver]);

  useEffect(() => {
    if (booksFiltered?.items) {
      setNewData((prev) => [...prev, ...booksFiltered?.items]);
    }
  }, [booksFiltered]);

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
          <div
            style={{
              maxWidth: '1136px',
              margin: ' 0 auto',
              display: 'flex',
            }}
          >
            <FilterField />
            <BookFilteredField
              title={sendSearch}
              tag="h1"
              fontSize="md"
              fontWeight={600}
              data={newData}
            />
          </div>
        </StyledMainContainer>
      )}
      {isLoading && <Spinner />}

      <div ref={loader} style={{ maxWidth: '1136px', margin: ' 0 auto' }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
