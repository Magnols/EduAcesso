import { useRef, useState } from 'react'
import type { FormEvent } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Eye, EyeOff, LockKeyhole, Mail, UserRound, UserRoundPlus } from 'lucide-react'
import { register } from '../services/mockAuth'
import type { RegistrationData, RegistrationErrors } from '../services/mockAuth'
import { ProfileSelector } from './ProfileSelector'

const initialData: RegistrationData = {
  name: '', email: '', password: '', confirmPassword: '', profile: '',
}

export function RegisterForm() {
  const navigate = useNavigate()
  const formRef = useRef<HTMLFormElement>(null)
  const [data, setData] = useState<RegistrationData>(initialData)
  const [errors, setErrors] = useState<RegistrationErrors>({})
  const [passwordVisible, setPasswordVisible] = useState(false)
  const [confirmationVisible, setConfirmationVisible] = useState(false)

  function updateField<K extends keyof RegistrationData>(field: K, value: RegistrationData[K]) {
    setData(current => ({ ...current, [field]: value }))
    setErrors(current => ({
      ...current,
      [field]: undefined,
      ...(field === 'password' ? { confirmPassword: undefined } : {}),
    }))
  }

  function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault()
    const result = register(data)
    if (!result.ok) {
      setErrors(result.errors)
      const firstInvalid = (Object.keys(initialData) as (keyof RegistrationData)[])
        .find(field => result.errors[field])
      formRef.current?.querySelector<HTMLInputElement>(`[name="${firstInvalid}"]`)?.focus()
      return
    }
    // A confirmação viaja sem dados pessoais ou senhas no estado de navegação.
    navigate('/login', { replace: true, state: { registrationComplete: true } })
  }

  return (
    <section className="login-card register-card" aria-labelledby="register-title">
      <h1 id="register-title">Criar sua conta</h1>
      <p className="login-subtitle">Junte-se ao EduAcesso e faça parte de uma educação mais inclusiva e acessível.</p>
      <form ref={formRef} onSubmit={handleSubmit} noValidate aria-describedby="register-demo-note">
        <div className="register-fields">
          <div className="login-field">
            <label htmlFor="register-name"><UserRound aria-hidden="true" />Nome completo <span className="required-mark" aria-hidden="true">*</span></label>
            <input id="register-name" name="name" autoComplete="name" placeholder="Digite seu nome" required value={data.name} onChange={event => updateField('name', event.target.value)} aria-invalid={Boolean(errors.name)} aria-describedby={errors.name ? 'register-name-error' : undefined} />
            {errors.name && <p className="field-error" id="register-name-error" role="alert">{errors.name}</p>}
          </div>
          <div className="login-field">
            <label htmlFor="register-email"><Mail aria-hidden="true" />E-mail <span className="required-mark" aria-hidden="true">*</span></label>
            <input id="register-email" name="email" type="email" autoComplete="email" autoCapitalize="none" spellCheck={false} placeholder="exemplo@eduacesso.com" required value={data.email} onChange={event => updateField('email', event.target.value)} aria-invalid={Boolean(errors.email)} aria-describedby={errors.email ? 'register-email-error' : undefined} />
            {errors.email && <p className="field-error" id="register-email-error" role="alert">{errors.email}</p>}
          </div>
          <div className="register-passwords">
            <div className="login-field">
              <label htmlFor="register-password"><LockKeyhole aria-hidden="true" />Senha <span className="required-mark" aria-hidden="true">*</span></label>
              <div className="password-input">
                <input id="register-password" name="password" type={passwordVisible ? 'text' : 'password'} autoComplete="new-password" placeholder="Crie uma senha" required minLength={8} value={data.password} onChange={event => updateField('password', event.target.value)} aria-invalid={Boolean(errors.password)} aria-describedby={`password-hint${errors.password ? ' register-password-error' : ''}`} />
                <button className="password-toggle" type="button" aria-label={passwordVisible ? 'Ocultar senha' : 'Mostrar senha'} aria-pressed={passwordVisible} onClick={() => setPasswordVisible(!passwordVisible)}>{passwordVisible ? <Eye aria-hidden="true" /> : <EyeOff aria-hidden="true" />}</button>
              </div>
              <p className="password-hint" id="password-hint">Mínimo de 8 caracteres.</p>
              {errors.password && <p className="field-error" id="register-password-error" role="alert">{errors.password}</p>}
            </div>
            <div className="login-field">
              <label htmlFor="register-confirmation"><LockKeyhole aria-hidden="true" />Confirmar senha <span className="required-mark" aria-hidden="true">*</span></label>
              <div className="password-input">
                <input id="register-confirmation" name="confirmPassword" type={confirmationVisible ? 'text' : 'password'} autoComplete="new-password" placeholder="Repita sua senha" required value={data.confirmPassword} onChange={event => updateField('confirmPassword', event.target.value)} aria-invalid={Boolean(errors.confirmPassword)} aria-describedby={errors.confirmPassword ? 'register-confirmation-error' : undefined} />
                <button className="password-toggle" type="button" aria-label={confirmationVisible ? 'Ocultar confirmação de senha' : 'Mostrar confirmação de senha'} aria-pressed={confirmationVisible} onClick={() => setConfirmationVisible(!confirmationVisible)}>{confirmationVisible ? <Eye aria-hidden="true" /> : <EyeOff aria-hidden="true" />}</button>
              </div>
              {errors.confirmPassword && <p className="field-error" id="register-confirmation-error" role="alert">{errors.confirmPassword}</p>}
            </div>
          </div>
        </div>
        <ProfileSelector value={data.profile} onChange={value => updateField('profile', value)} error={errors.profile} />
        <button type="submit" className="button login-submit register-submit"><UserRoundPlus aria-hidden="true" />Criar conta</button>
      </form>
      <p className="login-signup">Já tem uma conta? <Link to="/login">Entrar na plataforma</Link></p>
      <Link to="/" className="login-back"><ArrowLeft aria-hidden="true" />Voltar ao início</Link>
      <p className="login-demo-note" id="register-demo-note">Use dados fictícios. Os cadastros ficam apenas em memória e serão perdidos ao recarregar a página. Esta demonstração não oferece segurança de produção.</p>
    </section>
  )
}
