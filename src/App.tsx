import BookField from './components/bookField';
import Footer from './components/footer';
import Header from './components/header';
import { StyledContainer } from './styles/mainContainer';

function App() {
  return (
    <StyledContainer>
      <Header />
      <BookField title='Aventura'/>
      <BookField title='Ação'/>
      <BookField title='Destaques'/>
      <BookField title='Infantil'/>
      <Footer />
    </StyledContainer>
  );
}

export default App;
