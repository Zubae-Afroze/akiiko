import { useEffect } from "react";
import { motion } from "framer-motion";
import { stateLogger } from "../hooks/stateLogger";
import Backdrop from "../Backdrop/index";

const dropIn = {
  hidden: {
    y: "-100vh",
    opacity: 0,
  },
  visible: {
    y: "0",
    opacity: 1,
    transition: {
      duration: 0.1,
      type: "spring",
      damping: 25,
      stiffness: 500,
    },
  },
  exit: {
    y: "100vh",
    opacity: 0,
  },
};

const scaleUp = {
  hidden: {
    transform: "scale(0)",
    opacity: 0,
  },
  visible: {
    transform: "scale(1)",
    opacity: 1,
    transition: {
      duration: 0.5,
      // type: ""
    },
  },
  exit: {
    transform: "scale(0)",
    opacity: 0,
    transition: {
      duration: 0.3,
      // type: ""
    },
  },
};

const flip = {
  hidden: {
    transform: "scale(0) rotateX(-360deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotateX(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotateX(360deg)",
    opacity: 0,
    transition: {
      duration: 0.5,
    },
  },
};

const newspaper = {
  hidden: {
    transform: "scale(0) rotate(720deg)",
    opacity: 0,
    transition: {
      delay: 0.3,
    },
  },
  visible: {
    transform: " scale(1) rotate(0deg)",
    opacity: 1,
    transition: {
      duration: 0.5,
    },
  },
  exit: {
    transform: "scale(0) rotate(-720deg)",
    opacity: 0,
    transition: {
      duration: 0.3,
    },
  },
};

const badSuspension = {
  hidden: {
    y: "-100vh",
    opacity: 0,
    transform: "scale(0) rotateX(-360deg)",
  },
  visible: {
    y: "-25vh",
    opacity: 1,
    transition: {
      duration: 0.2,
      type: "spring",
      damping: 15,
      stiffness: 500,
    },
  },
  exit: {
    y: "-100vh",
    opacity: 0,
  },
};

const gifYouUp = {
  hidden: {
    opacity: 0,
    scale: 0,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      duration: 0.2,
      ease: "easeIn",
    },
  },
  exit: {
    opacity: 0,
    scale: 0,
    transition: {
      duration: 0.15,
      ease: "easeOut",
    },
  },
};

const Modal = (props
  // { handleClose, text, type }
  ) => {
  // Log state
  useEffect(() => {
    stateLogger("Modal", true);
    return () => stateLogger("Modal", false);
  }, []);

  return (
    <Backdrop onClick={props.handleClose}>
      {props.type === "dropIn" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
          className="modal-cm orange-gradient"
          variants={dropIn}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={props.text} />
          <ModalButton onClick={props.handleClose} label="Close" />
        </motion.div>
      )}

      {props.type === "scaleUp" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}  // Prevent click from closing modal
          className="modal-cm"
          variants={scaleUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          {
            props.children
          }

        </motion.div>
      )}

      

      {props.type === "flip" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal-cm  orange-gradient"
          variants={flip}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={props.text} />
          <ModalButton onClick={props.handleClose} label="Close" />
        </motion.div>
      )}

      {props.type === "newspaper" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal-cm orange-gradient"
          variants={newspaper}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={props.text} />
          <ModalButton onClick={props.handleClose} label="Close" />
        </motion.div>
      )}

      {props.type === "badSuspension" && (
        <motion.div
          onClick={(e) => e.stopPropagation()}   
          className="modal-cm orange-gradient"
          variants={badSuspension}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <ModalText text={props.text} />

          <ModalButton onClick={props.handleClose} label="Close" />
        </motion.div>
      )}

      {props.type === "gifYouUp" && (
        <motion.div
          className="modal-cm"
          onClick={(e) => e.stopPropagation()}
          style={{
            padding: 0,
            height: "auto",
            width: "auto",
            display: "flex",
            justifyContent: "center",
          }}
          variants={gifYouUp}
          initial="hidden"
          animate="visible"
          exit="exit"
        >
          <h3
            style={{
              color: "#ffaa00",
              textTransform: "none",
              fontWeight: 400,
              margin: "auto auto auto 0",
              fontFamily: "Montserrat",
              fontSize: "150%",
            }}
          >
            Tap x2 to close
          </h3>
          <motion.img
            alt=""
            onDoubleClick={props.handleClose}
            drag
            // src="https://i.giphy.com/media/O5ac76MtFGPHG/giphy.gif"
            // src="https://i.giphy.com/media/jmS6YojdAaYw5z1LHi/giphy.gif"
            src="https://i.giphy.com/media/hhgAbqQpm49vW/giphy.gif"
            style={{
              margin: "0 auto auto auto",
              maxHeight: "40vh",
              height: "40vh",
              width: "auto",
              objectFit: "cover",
              borderRadius: "6px",
              zIndex: 1000,
            }}
          />
        </motion.div>
      )}
    </Backdrop>
  );
};

const ModalText = ({ text }) => (
  <div className="modal-text">
    <h3>{text}</h3>
    <h5>
      Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius laboriosam labore, totam
      expedita voluptates tempore asperiores sequi, alias cum veritatis, minima dolor iste similique
      eos id. Porro, culpa? Officiis, placeat?
    </h5>
  </div>
);

const ModalButton = ({ onClick, label }) => (
  <motion.button
    className="modal-button"
    type="button"
    whileHover={{ scale: 1.1 }}
    whileTap={{ scale: 0.95 }}
    onClick={onClick}
  >
    {label}
  </motion.button>
);

export default Modal;
