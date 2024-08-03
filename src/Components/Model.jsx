/* eslint-disable react/prop-types */
import { cloneElement, createContext, useContext, useState } from "react";
import { createPortal } from "react-dom";
import { HiXMark } from "react-icons/hi2";
import { useOutSideClick } from "../hooks/useOutSideClick";

export const ModalContext = createContext();

function Modal({ children }) {
    const [openName, setOpenName] = useState("promise");
    const close = () => { setOpenName(""), localStorage.setItem("popup", true) }
    const open = setOpenName;

    return (
        <ModalContext.Provider value={{ openName, close, open }}>
            {children}
        </ModalContext.Provider>
    );
}

function Open({ children, opens: opensWindowName }) {
    const { open } = useContext(ModalContext);

    return cloneElement(children, { onClick: () => open(opensWindowName) });
}

function Close({ children }) {
    const { close } = useContext(ModalContext);
    return cloneElement(children, { onClick: close });
}

function Window({ children, name }) {
    const { openName, close } = useContext(ModalContext);
    const ref = useOutSideClick(close);

    if (name !== openName) return null;

    return createPortal(
        <div className="fixed  inset-0 bg-black bg-opacity-30 backdrop-blur-sm z-50 transition-all">
            <div
                ref={ref}
                className="fixed inset-0 flex items-center justify-center p-4 sm:p-8"
            >
                <div className="bg-black border border-gray-300 rounded-lg shadow-lg p-4 w-full max-w-md mx-2 sm:p-6 sm:mx-4">
                    <div className="relative">
                        <button
                            onClick={close}
                            className="absolute top-2 right-2 p-1 bg-transparent border-none cursor-pointer rounded-lg transform translate-x-2 transition-all hover:bg-gray-700 hover:text-white"
                        >
                            <HiXMark className="w-6 h-6 text-gray-600" />
                        </button>
                        {cloneElement(children, { onCloseModal: close })}
                    </div>
                </div>
            </div>
        </div>,
        document.body
    );
}

Modal.Open = Open;
Modal.Close = Close;
Modal.Window = Window;

export default Modal;
