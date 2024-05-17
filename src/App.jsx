import Header from "./components/Header.jsx";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage.jsx";
import TaskCreatePage from "./pages/TaskCreatePage.jsx";
import TaskEditPage from "./pages/TaskEditPage.jsx";
import Page404 from "./pages/Page404.jsx";
import TaskProvider from "./components/TaskContext.jsx";
{
}

function App() {
  return (
    // <TaskProvider></TaskProvider>
    <BrowserRouter>
      <Header />

      <Routes>
        <Route path="*" element={<Page404 />} />
        <Route path="/" element={<HomePage />} />
        <Route path="/tasks/create" element={<TaskCreatePage />} />
        <Route path="/tasks/:taskld/edit" element={<TaskEditPage />} />
      </Routes>
    </BrowserRouter>
  );
}
export default App;
