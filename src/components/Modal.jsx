import Link from "./Link";

export default function Modal({ isOpen, onConfirm, onCancel }) {
  if (!isOpen) {
    return null;
  }
  return (
    <div className="modal">
      <p className="modalInfo">
        Souhaitez vous vraiment supprimer cette tâche?
      </p>
      <div className="frame10">
        <Link onClick={onCancel}>Annuler</Link>
        <Link onClick={onConfirm} color="error">
          Supprimer
        </Link>
      </div>
    </div>
  );
}
