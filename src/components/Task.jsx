import { Children } from "react";
import Button from "./Button";
import Link from "./Link";
import Modal from "./Modal";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Task({
  taches,
  finalTask = "normal",
  bouton = "vide",
  tache,
  setTaches,
}) {
  const navigate = useNavigate();
  const [isModalOpen, setIsModalOpen] = useState(false);

  function deleteTache(id) {
    console.log(id);
    setTaches(taches.filter((tache) => tache.id !== id));
  }
  return (
    <div className="task">
      <div>
        <div className={bouton === "plein" ? "plein" : "vide"}>
          <button className="round"></button>
        </div>
      </div>
      <div className="frame6">
        <div className="frame4">
          <h3
            className={finalTask === "line-through" ? "line-through" : "normal"}
          >
            {tache.nom}
          </h3>
          <div className="frame3">
            <Link onClick={() => navigate("/tasks/123/edit")}>Modifier</Link>
            <p>/</p>

            <Link
              className="modalButton"
              onClick={() => setIsModalOpen(true)}
              color="error"
            >
              Supprimer
            </Link>
          </div>
        </div>
        <div
          className={finalTask === "line-through" ? "line-through" : "normal"}
        >
          <p>6 aôut 2023</p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolorum
            animi et neque id debitis, itaque deleniti. Facere ipsum illo
            adipisci libero explicabo temporibus, iste laboriosam. Ex corporis
            quaerat reprehenderit autem.
          </p>
        </div>
      </div>
      <Modal
        isOpen={isModalOpen}
        onConfirm={() => deleteTache(tache.id)}
        onCancel={() => {
          setIsModalOpen(false);
        }}
      />
    </div>
  );
}
