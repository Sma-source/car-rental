import { Fragment } from "react";
import Image from "next/image";

import { Dialog, Transition } from "@headlessui/react";
import { CarProps } from "@/types";

interface CardDetailsProps {
  isOpen: boolean;
  closeModal: () => void;
  car: CarProps;
}
const CardDetails = ({ isOpen, closeModal, car }: CardDetailsProps) => {
  return <div>CardDetails</div>;
};

export default CardDetails;
