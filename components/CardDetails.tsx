import { CarProps } from "@/types";
import React from "react";

interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
const CardDetails = ({ isOpen, closeModal, car }: CardDetailsProps) => {
  return <div>CardDetails</div>;
};

export default CardDetails;
