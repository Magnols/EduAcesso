import { GraduationCap, Presentation, UsersRound } from 'lucide-react'
import type { Profile } from '../services/mockAuth'

const profiles = [
  { value: 'ESTUDANTE', title: 'Estudante', description: 'Acessa conteúdos e realiza atividades.', icon: GraduationCap },
  { value: 'PROFESSOR', title: 'Professor', description: 'Cria, adapta e compartilha conteúdos.', icon: Presentation },
  { value: 'INTERPRETE', title: 'Intérprete de Libras', description: 'Apoia a comunicação e a acessibilidade.', icon: UsersRound },
] as const

type ProfileSelectorProps = {
  value: Profile | ''
  onChange: (profile: Profile) => void
  error?: string
}

export function ProfileSelector({ value, onChange, error }: ProfileSelectorProps) {
  return (
    <fieldset className="profile-selector" aria-describedby={error ? 'profile-error' : undefined}>
      <legend>Qual é o seu perfil? <span className="required-mark" aria-hidden="true">*</span></legend>
      <div className="profile-options">
        {profiles.map(({ value: profile, title, description, icon: Icon }) => (
          <label className={`profile-option${value === profile ? ' is-selected' : ''}`} key={profile}>
            <input
              type="radio"
              name="profile"
              value={profile}
              checked={value === profile}
              onChange={() => onChange(profile)}
              required
              aria-invalid={Boolean(error)}
              aria-describedby={error ? 'profile-error' : undefined}
            />
            <Icon aria-hidden="true" />
            <span className="profile-title">{title}</span>
            <span className="profile-description">{description}</span>
          </label>
        ))}
      </div>
      {error && <p id="profile-error" className="field-error" role="alert">{error}</p>}
    </fieldset>
  )
}
