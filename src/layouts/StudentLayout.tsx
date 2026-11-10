import { useEffect, useRef, useState } from 'react'
import { Outlet, useLocation } from 'react-router-dom'
import { StudentSidebar } from '../components/student/StudentSidebar'
import { StudentHeader } from '../components/student/StudentHeader'
import '../styles/student.css'

export function StudentLayout() {
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
    <div className="student-layout">
      <a href="#student-content" className="skip-link">Pular para o conteúdo</a>
      <div className="student-desktop-sidebar"><StudentSidebar /></div>
      <div className="student-workspace">
        <StudentHeader onOpenMenu={openMenu} menuOpen={menuOpen} />
        <main className="student-content" id="student-content" tabIndex={-1} ref={mainRef}><Outlet /></main>
      </div>
      <dialog id="student-mobile-menu" className="student-mobile-dialog" ref={dialogRef} aria-label="Menu do estudante" onClose={() => setMenuOpen(false)} onClick={event => { if (event.target === event.currentTarget) closeMenu() }}><StudentSidebar mobile onNavigate={closeMenu} /></dialog>
    </div>
  )
}
