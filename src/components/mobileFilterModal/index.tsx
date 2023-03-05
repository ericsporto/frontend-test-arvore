import React, { Dispatch, SetStateAction } from 'react';
import styled from 'styled-components';
import { MdClose } from 'react-icons/md';
import MobileFilterField from '../filterField/MobileFilterField';
import { MobileFilterButton } from '../bookFilteredField';
import FilterIcon from '../../../public/img/filter-icon.svg';

interface FilterModalProps {
  showModal: boolean;
  setShowModal: (showModal: boolean) => void;
  setType: Dispatch<SetStateAction<boolean | null>>;
  setType1: Dispatch<SetStateAction<boolean | null>>;
  setAvailable: Dispatch<SetStateAction<string>>;
  setAvailable1: Dispatch<SetStateAction<string>>;
  setMoney: Dispatch<SetStateAction<number>>;
  setMoney1: Dispatch<SetStateAction<number>>;
  setMoney2: Dispatch<SetStateAction<number>>;
  setMoney3: Dispatch<SetStateAction<number>>;
}

const ModalWrapper = styled.div`
  width: 100vw;
  height: 100vh;
  background: #ffffff;
  color: #000000;
  display: flex;
  position: fixed;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: 10;
`;

const ModalContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  line-height: 1.8;
  color: #141414;
  padding: 30px 25px;
`;

const MobileButtonBox = styled.div`
  width: 90%;
  height: 100%;
  margin-top: 40px;
  justify-content: center;
  align-items: center;
  margin-left: -50px;
`;

const CloseModalButton = styled(MdClose)`
  cursor: pointer;
  position: absolute;
  top: 20px;
  right: 20px;
  width: 20px;
  height: 20px;
  padding: 0;
  z-index: 10;
`;

const FilterModal: React.FC<FilterModalProps> = ({
  showModal,
  setShowModal,
  setMoney,
  setMoney1,
  setMoney2,
  setMoney3,
  setAvailable,
  setAvailable1,
  setType,
  setType1,
}) => {
  return (
    <>
      {showModal ? (
        <ModalWrapper>
          <ModalContent>
            <MobileFilterField
              setType={setType}
              setType1={setType1}
              setAvailable={setAvailable}
              setAvailable1={setAvailable1}
              setMoney={setMoney}
              setMoney1={setMoney1}
              setMoney2={setMoney2}
              setMoney3={setMoney3}
            />
            <CloseModalButton onClick={() => setShowModal(false)} />
            <MobileButtonBox>
              <MobileFilterButton onClick={() => setShowModal(false)}>
                <img src={FilterIcon} alt="filter-icons" />
                FILTRAR AGORA
              </MobileFilterButton>
            </MobileButtonBox>
          </ModalContent>
        </ModalWrapper>
      ) : null}
    </>
  );
};

FilterModal.displayName = 'FilterModal';
export default FilterModal;
