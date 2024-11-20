import { createPortal } from "react-dom";

const MyModal = ({ oncLose }) => {
  return createPortal(
    <>
      <h2>My modal</h2>
      <p>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia magni
        sint facilis quas ducimus praesentium hic aliquid voluptates architecto
        libero, vero distinctio? Aspernatur, nemo iure!
      </p>
      <button onClick={oncLose}>Accept It</button>
    </>,
    document.getElementById("modal")
  );
};

export default MyModal;
