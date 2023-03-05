import styled from 'styled-components';
import { StyledText } from '../../styles/typography';
import { Dispatch, SetStateAction, useState } from 'react';

interface FilterFieldProps {
  setType: Dispatch<SetStateAction<boolean | null>>;
  setType1: Dispatch<SetStateAction<boolean | null>>;
  setAvailable: Dispatch<SetStateAction<string>>;
  setAvailable1: Dispatch<SetStateAction<string>>;
  setMoney: Dispatch<SetStateAction<number>>;
  setMoney1: Dispatch<SetStateAction<number>>;
  setMoney2: Dispatch<SetStateAction<number>>;
  setMoney3: Dispatch<SetStateAction<number>>;
}

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

const FilterField: React.FC<FilterFieldProps> = ({
  setMoney,
  setMoney1,
  setMoney2,
  setMoney3,
  setAvailable,
  setAvailable1,
  setType,
  setType1,
}) => {
  const [checkedMoney, setCheckedMoney] = useState(false);
  const [checkedMoney1, setCheckedMoney1] = useState(false);
  const [checkedMoney2, setCheckedMoney2] = useState(false);
  const [checkedMoney3, setCheckedMoney3] = useState(false);
  const [checkedAvailable, setCheckedAvailable] = useState(false);
  const [checkedAvailable1, setCheckedAvailable1] = useState(false);
  const [checkedType, setCheckedType] = useState(false);
  const [checkedType1, setCheckedType1] = useState(false);

  const handleChecked = () => {
    if (!checkedMoney) {
      setCheckedMoney(true);
    } else {
      setCheckedMoney(false);
    }
  };
  const handleChecked1 = () => {
    if (!checkedMoney1) {
      setCheckedMoney1(true);
    } else {
      setCheckedMoney1(false);
    }
  };
  const handleChecked2 = () => {
    if (!checkedMoney2) {
      setCheckedMoney2(true);
    } else {
      setCheckedMoney2(false);
    }
  };
  const handleChecked3 = () => {
    if (!checkedMoney3) {
      setCheckedMoney3(true);
    } else {
      setCheckedMoney3(false);
    }
  };
  const handleChecked4 = () => {
    if (!checkedAvailable) {
      setCheckedAvailable(true);
    } else {
      setCheckedAvailable(false);
    }
  };
  const handleChecked5 = () => {
    if (!checkedAvailable1) {
      setCheckedAvailable1(true);
    } else {
      setCheckedAvailable1(false);
    }
  };
  const handleChecked6 = () => {
    if (!checkedType) {
      setCheckedType(true);
    } else {
      setCheckedType(false);
    }
  };
  const handleChecked7 = () => {
    if (!checkedType1) {
      setCheckedType1(true);
    } else {
      setCheckedType1(false);
    }
  };

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
        <StyledFilterCheckbox
          value={!checkedMoney ? 31.00 : 0}
          type="checkbox"
          checked={checkedMoney}
          onClick={handleChecked}
          onChange={(e) => setMoney(+e.target.value)}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          de R$0 até R$30
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox
          value={!checkedMoney1 ? 50.00 : 0}
          type="checkbox"
          checked={checkedMoney1}
          onClick={handleChecked1}
          onChange={(e) => {setMoney1(+e.target.value), setMoney(31.00)}}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          de R$31 até R$50
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox
          value={!checkedMoney2 ? 100 : 0}
          type="checkbox"
          checked={checkedMoney2}
          onClick={handleChecked2}
          onChange={(e) => {setMoney1(51.00),setMoney2(+e.target.value)}}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          de R$51 até R$100
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox
          value={!checkedMoney3 ? 100 : 0}
          type="checkbox"
          checked={checkedMoney3}
          onClick={handleChecked3}
          onChange={(e) => setMoney3(+e.target.value)}
        />
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
        <StyledFilterCheckbox
        value={!checkedAvailable ? "FOR_SALE" : ''}
          type="checkbox"
          checked={checkedAvailable}
          onClick={handleChecked4}
          onChange={(e) => setAvailable(e.target.value)}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          Disponível
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox
        value={!checkedAvailable1 ? "NOT_FOR_SALE" : ''}
          type="checkbox"
          checked={checkedAvailable1}
          onClick={handleChecked5}
          onChange={(e) => setAvailable1(e.target.value)}
        />
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
        <StyledFilterCheckbox
          type="checkbox"
          checked={checkedType}
          onClick={handleChecked6}
          onChange={(e) => setType(e.target.checked)}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          e-pub
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox
          type="checkbox"
          checked={checkedType1}
          onClick={handleChecked7}
          onChange={(e) => setType1(e.target.checked)}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          PDF
        </StyledText>
      </StyledFilterBox>
    </StyledFilterContainer>
  );
};

export default FilterField;
