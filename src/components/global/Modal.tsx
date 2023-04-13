import Image from "next/image";
import { FC } from "react";

interface ModalProps {
  label: string;
  style: "modal-sm" | "modal-lg" | "modal-xl" | "modal-fullscreen";
  children: any;
}

const Modal: FC<ModalProps> = (props: any) => {
  const style = props.style;
  let modalClass = "modal-dialog modal-dialog-centered " + style;

  // remove spaces from label
  let Id = props.label.replace(/\s/g, "");

  return (
    <>
      <button
        type="button"
        className="theme-btn "
        data-bs-toggle="modal"
        data-bs-target={"#" + Id}
      >
        {props.label}
      </button>

      {/* <!-- Modal --> */}
      <div
        className="modal fade"
        id={Id}
        // data-bs-backdrop="static"
        // data-bs-keyboard="false"
        // tabindex="-1"
        aria-labelledby="staticBackdropLabel"
        aria-hidden="true"
      >
        <div className={modalClass}>
          <div className="modal-content">
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
            {props.children}
          </div>
        </div>
      </div>
    </>
  );
};

export default Modal;
