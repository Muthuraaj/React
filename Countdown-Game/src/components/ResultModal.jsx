import { forwardRef, useImperativeHandle, useRef } from "react";
import { createPortal } from "react-dom";
const ResultModal = forwardRef(function ResultModal(
  { result, target, onReset },
  ref
) {
  const dialog = useRef();
  useImperativeHandle(ref, () => {
    return {
      open() {
        dialog.current.showModal();
      },
    };
  });
  const lost = result <= target;
  const formattedTime = (result / 1000).toFixed(2);
  const score = Math.round((1 - result / (target * 1000)) * 100);

  return createPortal(
    <dialog className="result-modal" ref={dialog} onClose={onReset}>
      {lost ? <h2>You Lost</h2> : <h2>Your Score : {score}</h2>}
      <p>Target time was {target} seconds</p>
      <p>you stopped the timer with {formattedTime} seconds </p>
      <form method="dialog" onSubmit={onReset}>
        <button>Close</button>
      </form>
    </dialog>,
    document.getElementById("modal")
  );
});
export default ResultModal;
