import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { Register } from './pages/Register'
import { StudentLayout } from './layouts/StudentLayout'
import { StudentDashboard } from './pages/student/StudentDashboard'
import { StudentSectionPage } from './pages/student/StudentSectionPage'
import { StudentMaterialPreview } from './pages/student/StudentMaterialPreview'
import { DashboardLayout } from './layouts/DashboardLayout'
import { interpreterDashboardConfig, professorDashboardConfig } from './data/dashboardConfigs'
import { ProfessorDashboard } from './pages/professor/ProfessorDashboard'
import { ProfessorSectionPage } from './pages/professor/ProfessorSectionPage'
import { ProfessorContentPreview } from './pages/professor/ProfessorContentPreview'
import './styles/professor.css'
import { InterpreterDashboard } from './pages/interprete/InterpreterDashboard'
import { InterpreterSectionPage } from './pages/interprete/InterpreterSectionPage'
import { InterpreterResourcePreview } from './pages/interprete/InterpreterResourcePreview'
import './styles/interpreter.css'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<Register />} />
        <Route path="/estudante" element={<ProtectedRoute profile="ESTUDANTE"><StudentLayout /></ProtectedRoute>}>
          <Route index element={<StudentDashboard />} />
          <Route path="materiais" element={<StudentSectionPage section="materiais" />} />
          <Route path="materiais/:materialId" element={<StudentMaterialPreview />} />
          <Route path="glossarios" element={<StudentSectionPage section="glossarios" />} />
          <Route path="atividades" element={<StudentSectionPage section="atividades" />} />
          <Route path="perfil" element={<StudentSectionPage section="perfil" />} />
          <Route path="configuracoes" element={<StudentSectionPage section="configuracoes" />} />
        </Route>
        <Route path="/professor" element={<ProtectedRoute profile="PROFESSOR"><DashboardLayout config={professorDashboardConfig} /></ProtectedRoute>}>
          <Route index element={<ProfessorDashboard />} />
          <Route path="conteudos" element={<ProfessorSectionPage section="conteudos" />} />
          <Route path="conteudos/:contentId" element={<ProfessorContentPreview />} />
          <Route path="adaptacao" element={<ProfessorSectionPage section="adaptacao" />} />
          <Route path="revisao" element={<ProfessorSectionPage section="revisao" />} />
          <Route path="turmas" element={<ProfessorSectionPage section="turmas" />} />
          <Route path="relatorios" element={<ProfessorSectionPage section="relatorios" />} />
          <Route path="perfil" element={<ProfessorSectionPage section="perfil" />} />
          <Route path="configuracoes" element={<ProfessorSectionPage section="configuracoes" />} />
        </Route>
        <Route path="/interprete" element={<ProtectedRoute profile="INTERPRETE"><DashboardLayout config={interpreterDashboardConfig} /></ProtectedRoute>}>
          <Route index element={<InterpreterDashboard />} />
          <Route path="materiais" element={<InterpreterSectionPage section="materiais" />} />
          <Route path="materiais/:resourceId" element={<InterpreterResourcePreview />} />
          <Route path="preparacao" element={<InterpreterSectionPage section="preparacao" />} />
          <Route path="traducao" element={<InterpreterSectionPage section="traducao" />} />
          <Route path="agenda" element={<InterpreterSectionPage section="agenda" />} />
          <Route path="relatorios" element={<InterpreterSectionPage section="relatorios" />} />
          <Route path="perfil" element={<InterpreterSectionPage section="perfil" />} />
          <Route path="configuracoes" element={<InterpreterSectionPage section="configuracoes" />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
export default App
