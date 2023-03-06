import BookField from './../../components/bookField';
import useFetchBooks from './../../queries/getBooks';
import { StyledMainContainer } from './../../styles/mainContainer';
import { ColoredContainer } from './../../styles/coloredContainer';

const Home:React.FC = () => {

  //Fetch Datas
  const { data: adventureBooks, isLoading: adventureLoading } =
    useFetchBooks('Aventura');
  const { data: actionBooks, isLoading: actionLoading } = useFetchBooks('Acao');
  const { data: highlightsBooks, isLoading: highlightsLoading } =
    useFetchBooks('Destaques');
  const { data: childrenBooks, isLoading: childrenLoading } =
    useFetchBooks('Infantil');

  return (
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
      <ColoredContainer>
        <BookField
          title="Destaques"
          tag="h1"
          fontSize="lg"
          fontWeight={600}
          data={highlightsBooks}
          isLoading={highlightsLoading}
        />
      </ColoredContainer>
      <BookField
        title="Infantil"
        tag="h1"
        fontSize="md"
        fontWeight={600}
        data={childrenBooks}
        isLoading={childrenLoading}
      />
    </StyledMainContainer>
  );
};

Home.displayName = 'Home';
export default Home;
