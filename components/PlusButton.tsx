import { PlusIcon } from "@heroicons/react/outline";
import React, { Dispatch, SetStateAction } from "react";

type PlusButtomProps = {
  showModal: Dispatch<SetStateAction<boolean>>;
};

const PlusButton = ({ showModal }: PlusButtomProps) => {
  return (
    <div
      onClick={() => showModal(true)}
      className="bg-gray-100 px-3 py-2 rounded-md cursor-pointer"
    >
      <PlusIcon className="h-5 w-5 text-gray-600" />
    </div>
  );
};

export default PlusButton;
