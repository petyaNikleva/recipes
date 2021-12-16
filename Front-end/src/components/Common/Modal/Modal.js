import './Modal.css'

function Modal(props) {
  return (
    <div className={props.show ? "modal-custom show " : "modal-custom hide"} >
      <div className="modal-main-custom" >
        <p>Сигурен ли си, че искаш да изтриеш рецептата?</p>
        <button className="table-btn hvr-underline-from-center" onClick={props.deleteHandler}>Да</button>
        <button className="table-btn hvr-underline-from-center" onClick={props.onCloseDeleteHandler}>Не</button>

      </div>
    </div>
  )
}

export default Modal; 