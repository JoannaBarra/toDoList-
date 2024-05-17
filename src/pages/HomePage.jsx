import Layout from "../components/Layout/Layout";
import TaskList from "../components/TaskList";

export default function HomePage() {
  return (
    <div>
      <Layout>
        <TaskList />
      </Layout>
    </div>
  );
}
