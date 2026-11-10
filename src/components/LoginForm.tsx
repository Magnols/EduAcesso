import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Eye, EyeOff, LockKeyhole, LogIn, Mail } from 'lucide-react'
import { profileInfo, signIn } from '../services/mockAuth'

type FieldErrors = { email?: string; password?: string }
export function LoginForm() {
  const navigate = useNavigate()
  const emailRef = useRef<HTMLInputElement>(null)
  const passwordRef = useRef<HTMLInputElement>(null)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [visible, setVisible] = useState(false)
  const [errors, setErrors] = useState<FieldErrors>({})
  const [authError, setAuthError] = useState('')
  const [recoveryMessage, setRecoveryMessage] = useState('')

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const nextErrors: FieldErrors = {}
    if (!email.trim()) nextErrors.email = 'Informe seu e-mail.'
    else if (!emailRef.current?.validity.valid) nextErrors.email = 'Informe um e-mail válido.'
    if (!password) nextErrors.password = 'Informe sua senha.'
    setErrors(nextErrors)
    setAuthError('')
    if (nextErrors.email || nextErrors.password) {
      if (nextErrors.email) emailRef.current?.focus()
      else passwordRef.current?.focus()
      return
    }
    const session = signIn(email, password)
    if (!session) {
      setAuthError('E-mail ou senha inválidos. Confira as credenciais demonstrativas e tente novamente.')
      return
    }
    navigate(profileInfo[session.profile].path, { replace: true })
  }

  return (
    <section className="login-card" aria-labelledby="login-title">
      <h1 id="login-title">Bem-vindo de volta!</h1>
      <p className="login-subtitle">Entre com suas credenciais para continuar.</p>
      <form onSubmit={handleSubmit} noValidate>
        <div className="login-field">
          <label htmlFor="email"><Mail aria-hidden="true" />E-mail</label>
          <input ref={emailRef} id="email" name="email" type="email" autoComplete="username" autoCapitalize="none" spellCheck={false} placeholder="exemplo@eduacesso.com" required value={email} onChange={event => { setEmail(event.target.value); setErrors(current => ({ ...current, email: undefined })); setAuthError('') }} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'email-error' : undefined} />
          {errors.email && <p className="field-error" id="email-error" role="alert">{errors.email}</p>}
        </div>
        <div className="login-field">
          <label htmlFor="password"><LockKeyhole aria-hidden="true" />Senha</label>
          <div className="password-input">
            <input ref={passwordRef} id="password" name="password" type={visible ? 'text' : 'password'} autoComplete="current-password" placeholder="Digite sua senha" required value={password} onChange={event => { setPassword(event.target.value); setErrors(current => ({ ...current, password: undefined })); setAuthError('') }} aria-invalid={Boolean(errors.password)} aria-describedby={errors.password ? 'password-error' : undefined} />
            <button type="button" className="password-toggle" aria-label={visible ? 'Ocultar senha' : 'Mostrar senha'} aria-pressed={visible} onClick={() => setVisible(!visible)}>{visible ? <Eye aria-hidden="true" /> : <EyeOff aria-hidden="true" />}</button>
          </div>
          {errors.password && <p className="field-error" id="password-error" role="alert">{errors.password}</p>}
        </div>
        <div className="recovery-row"><button type="button" className="text-button" onClick={() => setRecoveryMessage('A recuperação de senha estará disponível futuramente. Nenhum e-mail foi enviado.')}>Esqueceu sua senha?</button></div>
        <p className="recovery-message" role="status">{recoveryMessage}</p>
        {authError && <p className="auth-error" role="alert">{authError}</p>}
        <button className="button login-submit" type="submit"><LogIn aria-hidden="true" />Entrar na plataforma</button>
      </form>
      <p className="login-signup">Ainda não tem conta? <Link to="/cadastro">Criar conta</Link></p>
      <Link className="login-back" to="/"><ArrowLeft aria-hidden="true" />Voltar ao início</Link>
      <p className="login-demo-note">Ambiente demonstrativo · sessão apenas em memória</p>
    </section>
  )
}
