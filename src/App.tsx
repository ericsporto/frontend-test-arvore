import BookField from './components/bookField';
import Footer from './components/footer';
import Header from './components/header';
import { StyledMainContainer } from './styles/mainContainer';

function App() {
  return (
    <>
      <Header />
      <StyledMainContainer>
        <BookField title="Aventura" tag="h1" fontSize="md" fontWeight={600} />
        <BookField title="Ação" tag="h1" fontSize="md" fontWeight={600} />
        <BookField title="Destaques" tag="h1" fontSize="2xl" fontWeight={600} />
        <BookField title="Infantil" tag="h1" fontSize="md" fontWeight={600} />
        <Footer />
      </StyledMainContainer>
    </>
  );
}

export default App;
