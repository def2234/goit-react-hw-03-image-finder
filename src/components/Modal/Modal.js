import { DivBackdrop, DivModal } from './Modal-styled';

export const Modal = ({ image }) => {
  return (
    <DivBackdrop>
      <DivModal>
        <img src={image} alt="" />
      </DivModal>
    </DivBackdrop>
  );
};
