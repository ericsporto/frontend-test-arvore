import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
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

  //States Filters
  const [money, setMoney] = useState(0);
  const [money1, setMoney1] = useState(0);
  const [money2, setMoney2] = useState(0);
  const [money3, setMoney3] = useState(0);
  const [available, setAvailable] = useState('');
  const [available1, setAvailable1] = useState('');
  const [type, setType] = useState<boolean | null>(null);
  const [type1, setType1] = useState<boolean | null>(null);

  //Fetch Datas
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
    setLastIndex(0)
    setNewData([])
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

  const filterBooks = useMemo(() => {
    if (
      !money &&
      !money1 &&
      !money2 &&
      !money3 &&
      !available &&
      !available1 &&
      !type &&
      !type1
    )
      return newData;
    return newData.filter((item) => {
      return (
        item.saleInfo?.listPrice?.amount < money ||
        (item.saleInfo?.listPrice?.amount > money &&
          item.saleInfo?.listPrice?.amount < money1) ||
        (item.saleInfo?.listPrice?.amount > money1 &&
          item.saleInfo?.listPrice?.amount < money2) ||
        item.saleInfo?.listPrice?.amount > money3 ||
        item.accessInfo.pdf.isAvailable === type1 ||
        item.accessInfo.pdf.isAvailable === type ||
        (item.accessInfo.pdf.isAvailable === type &&
          item.accessInfo.pdf.isAvailable === type1)
      );
    });
  }, [
    type,
    type1,
    newData,
    money,
    money1,
    money2,
    money3,
    available,
    available1,
  ]);

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
              data={filterBooks}
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
