/// <reference types="vite/client" />

declare module "react-modal" {
  import React from "react";

  interface ModalProps {
    isOpen: boolean;
    onRequestClose: () => void;
    contentLabel?: string;
    className?: string;
    overlayClassName?: string;
    children?: React.ReactNode;
  }

  export default class Modal extends React.Component<ModalProps> {
    static setAppElement(element: string | HTMLElement): void;
  }
}
