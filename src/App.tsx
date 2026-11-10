import { BrowserRouter, Route, Routes } from 'react-router-dom'
import { ProtectedRoute } from './components/ProtectedRoute'
import { Home } from './pages/Home'
import { Login } from './pages/Login'
import { DemoDashboard } from './pages/DemoDashboard'
import { SignupPlaceholder } from './pages/SignupPlaceholder'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/cadastro" element={<SignupPlaceholder />} />
        <Route path="/estudante" element={<ProtectedRoute profile="ESTUDANTE"><DemoDashboard /></ProtectedRoute>} />
        <Route path="/professor" element={<ProtectedRoute profile="PROFESSOR"><DemoDashboard /></ProtectedRoute>} />
        <Route path="/interprete" element={<ProtectedRoute profile="INTERPRETE"><DemoDashboard /></ProtectedRoute>} />
      </Routes>
    </BrowserRouter>
  )
}
export default App
