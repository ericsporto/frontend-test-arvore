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
  width: 100vw;
  display: none;
  @media (max-width: 640px) {
    display: flex;
    flex-direction: column;
  }
`;
export const StyledFilterBox = styled.div`
  color: '#053B4B';
  margin-top: 22px;
  display: flex;
  gap: 10px;
`;
export const StyledBox = styled.div`
  color: #9EAEB7;
  margin-top: 32px;
`;
export const StyledFilterCheckbox = styled.input`
  width: 15px;
  height: 15px;
`;
export const StyledClearFilterButton = styled.button`
  width: 212px;
  height: 47px;
  color: #ffffff;
  background: #adb7bf;
  border: 1px solid rgba(64, 106, 118, 0.2);
  border-radius: 10px;
  font-weight: 600;
  font-size: 16px;
  line-height: 16px;
  cursor: pointer;
  margin-top: 30px;
  transition: all 400ms ease-in-out;
  &:hover {
    background: #788188;
  }
`;

const MobileFilterField: React.FC<FilterFieldProps> = ({
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

  const handleChecked = (state: any, setState: (state: any) => void) => {
    if (!state) {
      setState(true);
    } else {
      setState(false);
    }
  };

  return (
    <StyledFilterContainer>
      <StyledText tag="h4" fontSize="l" fontWeight={600}>
        Filtrar
      </StyledText>

      <StyledBox>
        <StyledText tag="h5" fontSize="sm" fontWeight={600}>
          Preço
        </StyledText>
      </StyledBox>

      <StyledFilterBox>
        <StyledFilterCheckbox
          value={!checkedMoney ? 31.0 : 0}
          type="checkbox"
          checked={checkedMoney}
          onClick={() => handleChecked(checkedMoney, setCheckedMoney)}
          onChange={(e) => setMoney(+e.target.value)}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          de R$0 até R$30
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox
          value={!checkedMoney1 ? 50.0 : 0}
          type="checkbox"
          checked={checkedMoney1}
          onClick={() => handleChecked(checkedMoney1, setCheckedMoney1)}
          onChange={(e) => {
            setMoney1(+e.target.value), setMoney(31.0);
          }}
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
          onClick={() => handleChecked(checkedMoney2, setCheckedMoney2)}
          onChange={(e) => {
            setMoney1(51.0), setMoney2(+e.target.value);
          }}
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
          onClick={() => handleChecked(checkedMoney3, setCheckedMoney3)}
          onChange={(e) => setMoney3(+e.target.value)}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          Mais de R$100
        </StyledText>
      </StyledFilterBox>

      <StyledBox>
        <StyledText tag="h5" fontSize="sm" fontWeight={600}>
          Disponibilidade para venda
        </StyledText>
      </StyledBox>
      <StyledFilterBox>
        <StyledFilterCheckbox
          value={!checkedAvailable ? 'FOR_SALE' : ''}
          type="checkbox"
          checked={checkedAvailable}
          onClick={() => handleChecked(checkedAvailable, setCheckedAvailable)}
          onChange={(e) => setAvailable(e.target.value)}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          Disponível
        </StyledText>
      </StyledFilterBox>
      <StyledFilterBox>
        <StyledFilterCheckbox
          value={!checkedAvailable1 ? 'NOT_FOR_SALE' : ''}
          type="checkbox"
          checked={checkedAvailable1}
          onClick={() => handleChecked(checkedAvailable1, setCheckedAvailable1)}
          onChange={(e) => setAvailable1(e.target.value)}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          Indisponível
        </StyledText>
      </StyledFilterBox>

      <StyledBox>
        <StyledText tag="h5" fontSize="sm" fontWeight={600}>
          Formatos disponíveis
        </StyledText>
      </StyledBox>
      <StyledFilterBox>
        <StyledFilterCheckbox
          type="checkbox"
          checked={checkedType}
          onClick={() => handleChecked(checkedType, setCheckedType)}
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
          onClick={() => handleChecked(checkedType1, setCheckedType1)}
          onChange={(e) => setType1(e.target.checked)}
        />
        <StyledText tag="h5" fontSize="sm" fontWeight={400}>
          PDF
        </StyledText>
      </StyledFilterBox>
    </StyledFilterContainer>
  );
};

MobileFilterField.displayName = 'MobileFilterField';
export default MobileFilterField;
