import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { DashboardSidebar } from '../components/dashboard/DashboardSidebar'
import { DashboardHeader } from '../components/dashboard/DashboardHeader'
import type { DashboardConfig } from '../data/dashboardConfigs'
import '../styles/student.css'

export function DashboardLayout({ config }: { config: DashboardConfig }) {
  const dialogRef = useRef<HTMLDialogElement>(null)
  const mainRef = useRef<HTMLElement>(null)
  const [menuOpen, setMenuOpen] = useState(false)
  const { pathname } = useLocation()
  useEffect(() => {
    mainRef.current?.focus()
    window.scrollTo({ top: 0, behavior: 'instant' })
  }, [pathname])
  function openMenu() {
    dialogRef.current?.showModal()
    dialogRef.current?.querySelector<HTMLButtonElement>('.sidebar-close')?.focus()
    setMenuOpen(true)
  }
  function closeMenu() { dialogRef.current?.close() }
  useEffect(() => {
    function onResize() { if (window.innerWidth > 760) dialogRef.current?.close() }
    window.addEventListener('resize', onResize)
    return () => window.removeEventListener('resize', onResize)
  }, [])
  return (
    <div className={`student-layout ${config.role}-layout`}>
      <a href={`#${config.role}-content`} className="skip-link">Pular para o conteúdo</a>
      <div className="student-desktop-sidebar"><DashboardSidebar config={config} /></div>
      <div className="student-workspace">
        <DashboardHeader config={config} onOpenMenu={openMenu} menuOpen={menuOpen} />
        <main className="student-content" id={`${config.role}-content`} tabIndex={-1} ref={mainRef}><Outlet /></main>
      </div>
      <dialog id={`${config.role}-mobile-menu`} className="student-mobile-dialog" ref={dialogRef} aria-label={`Menu do ${config.role}`} onClose={() => setMenuOpen(false)} onClick={event => { if (event.target === event.currentTarget) closeMenu() }}><DashboardSidebar config={config} mobile onNavigate={closeMenu} /></dialog>
    </div>
  )
}

