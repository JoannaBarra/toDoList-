import { useNavigate } from "react-router-dom";
import Link from "../components/Link";
import Button from "../components/Button";
import { createContext, useContext, useState } from "react";
import { taches } from "../taches";
import { TaskContext } from "../components/TaskContext";

export default function TaskCreatePage() {
  const { taches, setTaches } = useContext(TaskContext);
  const navigate = useNavigate();
  const [titre, setTitre] = useState("");
  const [contenu, setContenu] = useState("");

  function addTache() {
    taches.push({
      id: 0,
      nom: titre,
      description: contenu,
      date: "date",
      isFinished: false,
    });
    navigate("/");
  }

  return (
    <div className="main">
      <div className="layout">
        <h2 className={`app ${taches}`}>Créer une nouvelle tâche</h2>
        <div className="frame5">
          <div className="titrecontainer">
            <h1 className="titre">Titre</h1>
            <input
              value={titre}
              className="textfield"
              type="text"
              onChange={(e) => setTitre(e.target.value)}
            />
          </div>
          <h2 className="contenu">Contenu</h2>
          <input
            value={contenu}
            className="textcontenu"
            type="text"
            onChange={(e) => setContenu(e.target.value)}
          />
          <div className="linkbutton">
            <Link className="linknav" onClick={() => navigate("/")}>
              Retour à la liste des tâches
            </Link>
            <Button onClick={addTache}>Créer une tâche</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
