import { useState } from "react";
import { taches as tacheList } from "../taches";
import Task from "./Task";

export function TaskList() {
  const [taches, setTaches] = useState(tacheList);
  const tacheEnCours = taches.filter((tache) => tache.isFinished === false);

  const tacheTerminees = taches.filter((tache) => tache.isFinished === true);

  return (
    <div className="contenant">
      <h1 className="titreEnCours"></h1>
      <h2 className="tacheEnCours">Tâches en cours</h2>
      <div>
        {tacheEnCours.map((tache) => (
          <Task
            taches={taches}
            setTaches={setTaches}
            tache={tache}
            key={tache.id}
          />
        ))}
      </div>
      <h2 className="tacheTermine">Tâches terminées</h2>
      {tacheTerminees.map((tache) => (
        <Task
          taches={taches}
          setTaches={setTaches}
          tache={tache}
          key={tache.id}
          finalTask="line-through"
          bouton="plein"
        />
      ))}
    </div>
  );
}

export default TaskList;
