import BookField from './components/bookField';
import Footer from './components/footer';
import Header from './components/header';
import useFetchBooks from './queries/getBooks';
import { StyledMainContainer } from './styles/mainContainer';

function App() {

  const {data: adventureBooks} = useFetchBooks("Aventura")
  const {data: actionBooks} = useFetchBooks("Ação")
  const {data: highlightsBooks} = useFetchBooks("Destaques")
  const {data: childrenBooks} = useFetchBooks("Infantil")

  return (
    <>
      <Header />
      <StyledMainContainer>
        <BookField title="Aventura" tag="h1" fontSize="md" fontWeight={600} data={adventureBooks} />
        <BookField title="Ação" tag="h1" fontSize="md" fontWeight={600} data={actionBooks} />
        <BookField title="Destaques" tag="h1" fontSize="2xl" fontWeight={600} data={highlightsBooks} />
        <BookField title="Infantil" tag="h1" fontSize="md" fontWeight={600} data={childrenBooks} />
        <Footer />
      </StyledMainContainer>
    </>
  );
}

export default App;
