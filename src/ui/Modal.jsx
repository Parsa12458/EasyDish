function Modal({ content, id }) {
  return (
    <dialog id={id} className="modal">
      <div className="modal-box dark:bg-backgroundDark dark:text-paleGreen">
        {content}
        <form method="dialog">
          <button className="btn btn-circle btn-ghost btn-sm absolute right-2 top-2">
            ✕
          </button>
        </form>
      </div>
      <form method="dialog" className="modal-backdrop">
        <button>close</button>
      </form>
    </dialog>
  );
}

export default Modal;
