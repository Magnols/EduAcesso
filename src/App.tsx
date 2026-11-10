import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { DemoDashboard } from './pages/DemoDashboard'
import { Register } from './pages/Register'
import { StudentLayout } from './layouts/StudentLayout'
import { StudentDashboard } from './pages/student/StudentDashboard'
import { StudentSectionPage } from './pages/student/StudentSectionPage'
import { StudentMaterialPreview } from './pages/student/StudentMaterialPreview'

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
        <Route path="/professor" element={<ProtectedRoute profile="PROFESSOR"><DemoDashboard /></ProtectedRoute>} />
        <Route path="/interprete" element={<ProtectedRoute profile="INTERPRETE"><DemoDashboard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
