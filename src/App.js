import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProjectList from "./pages/ProjectList";
import ProjectForm from "./pages/ProjectForm";
import Layout from "./pages/Layout";

function App(){
  return (
    <BrowserRouter>
    <Layout>
      <Routes>
        <Route path="/" element={<ProjectList/>}/>
        <Route path="/add" element={<ProjectForm/>}/>
        <Route path="/edit/:id" element={<ProjectForm/>}/>
      </Routes>
      </Layout>
    </BrowserRouter>
  );
}
export default App;



