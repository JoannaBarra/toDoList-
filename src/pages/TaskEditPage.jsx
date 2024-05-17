import { useParams } from "react-router-dom";
import Link from "../components/Link";
import Button from "../components/Button";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { taches } from "../taches";

export default function TaskEditPage() {
  const [titre, setTitre] = useState([]);
  const [contenu, setContenu] = useState([]);
  const navigate = useNavigate();
  const param = useParams();

  function updateTache() {}

  return (
    <div className="main">
      <div className="layout">
        <h1 className="modifTask">Modifier nom de la tâche</h1>
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
          <h1 className="contenu">Contenu</h1>
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
            <Button onClick={updateTache}>Modifier</Button>
          </div>
        </div>
      </div>
    </div>
  );
}
