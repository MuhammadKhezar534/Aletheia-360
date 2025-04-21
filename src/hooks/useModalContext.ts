import { useContext } from "react";
import { ModalContext } from "../App";

const useModalContext = () => {
  const context = useContext(ModalContext);
  if (!context) {
    throw new Error("useModal error");
  }
  return context;
};

export default useModalContext;
