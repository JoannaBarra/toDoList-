import Button from "./Button";
import Link from "./Link";
import { useNavigate } from "react-router-dom";

export default function Header({ children }) {
  const navigate = useNavigate();
  return (
    <header className="header">
      <h1 className="title">ToDo List</h1>
      <div className="linkHeader">
        <Link onClick={() => navigate("/")}>Voir les tâches</Link>
        <Button onClick={() => navigate("/tasks/create")}>
          +Créer une tâche
        </Button>
      </div>
    </header>
  );
}
