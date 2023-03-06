import { useCallback, useEffect, useMemo, useRef, useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Spinner from './components/spinner';
import { useQueryClient } from 'react-query';
import { Item } from './types/books';
import FilterModal from './components/mobileFilterModal';
import Home from './pages/Home';
import SearchPage from './pages/SearchPage';
import useFetchBooksFiltered from './pages/SearchPage/hooks/useFetchFilteredBooks';

function App() {
  const [text, setText] = useState('');
  const [sendSearch, setSendSearch] = useState('');
  const [hasSearch, setHasSearch] = useState(false);
  const [lastIndex, setLastIndex] = useState(0);
  const [newData, setNewData] = useState<Item[]>([]);
  const [showModal, setShowModal] = useState(false);
  const loader = useRef(null);
  const queryClient = useQueryClient();

  //States Filters
  const [money, setMoney] = useState(0);
  const [money1, setMoney1] = useState(0);
  const [money2, setMoney2] = useState(0);
  const [money3, setMoney3] = useState(0);
  const [available, setAvailable] = useState('');
  const [available1, setAvailable1] = useState('');
  const [type, setType] = useState<boolean | null>(null);
  const [type1, setType1] = useState<boolean | null>(null);

  const { data: booksFiltered, isLoading } = useFetchBooksFiltered(
    sendSearch,
    lastIndex
  );

  const handleSearch = async () => {
    await queryClient.invalidateQueries(['filtered']);
    setLastIndex(0);
    setNewData([]);
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
          item.accessInfo.pdf.isAvailable === type1) ||
        item.saleInfo.saleability === available ||
        item.saleInfo.saleability === available1
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
      <FilterModal
        showModal={showModal}
        setShowModal={setShowModal}
        setType={setType}
        setType1={setType1}
        setAvailable={setAvailable}
        setAvailable1={setAvailable1}
        setMoney={setMoney}
        setMoney1={setMoney1}
        setMoney2={setMoney2}
        setMoney3={setMoney3}
      />
      <Header
        setText={setText}
        setHasSearch={setHasSearch}
        handleSearch={handleSearch}
      />
      {!hasSearch && <Home />}

      {hasSearch && (
        <SearchPage
          data={filterBooks}
          sendSearch={sendSearch}
          setShowModal={setShowModal}
          setType={setType}
          setType1={setType1}
          setAvailable={setAvailable}
          setAvailable1={setAvailable1}
          setMoney={setMoney}
          setMoney1={setMoney1}
          setMoney2={setMoney2}
          setMoney3={setMoney3}
        />
      )}

      {isLoading && <Spinner />}

      <div ref={loader} style={{ maxWidth: '1136px', margin: ' 0 auto' }}>
        <Footer />
      </div>
    </>
  );
}

export default App;
