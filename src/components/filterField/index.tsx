import styled from 'styled-components';
import { StyledText } from '../../styles/typography';

export const StyledFilterContainer = styled.div`
  width: 30%;
  margin-top: 70px;
`;
export const StyledFilterBox = styled.div`
  color: '#053B4B';
  margin-top: 22px;
  display: flex;
  gap: 10px;
`;
export const StyledFilterCheckbox = styled.input`
  width: 15px;
  height: 15px;
`;

const FilterField = () => {
  return (
    <StyledFilterContainer>
      <StyledText tag="h4" fontSize="l" fontWeight={600}>
        Filtrar
      </StyledText>

      <div style={{ color: '#9EAEB7', marginTop: '32px' }}>
        <StyledText tag="h5" fontSize="sm" fontWeight={600}>
          Preço
        </StyledText>
      </div>
      <StyledFilterBox>
        <StyledFilterCheckbox type="checkbox" />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          de R$0 até R$30
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox type="checkbox" />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          de R$31 até R$50
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox type="checkbox" />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          de R$51 até R$100
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox type="checkbox" />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          Mais de R$100
        </StyledText>
      </StyledFilterBox>

      <div style={{ color: '#9EAEB7', marginTop: '32px' }}>
        <StyledText tag="h5" fontSize="sm" fontWeight={600}>
          Disponibilidade para venda
        </StyledText>
      </div>
      <StyledFilterBox>
        <StyledFilterCheckbox type="checkbox" />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          Disponível
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox type="checkbox" />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          Indisponível
        </StyledText>
      </StyledFilterBox>

      <div style={{ color: '#9EAEB7', marginTop: '32px' }}>
        <StyledText tag="h5" fontSize="sm" fontWeight={600}>
          Formatos disponíveis
        </StyledText>
      </div>
      <StyledFilterBox>
        <StyledFilterCheckbox type="checkbox" />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          e-pub
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox type="checkbox" />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          PDF
        </StyledText>
      </StyledFilterBox>
    </StyledFilterContainer>
  );
};

export default FilterField;
