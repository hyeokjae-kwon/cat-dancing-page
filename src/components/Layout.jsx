import './Layout.css'

function Layout({ children }) {
  return (
    <div className="layout">
      <header className="layout__header">
        <h1>🐱 고양이 댄싱 애니메이션</h1>
        <p>귀여운 고양이가 신나게 춤을 춰요!</p>
      </header>
      <main className="layout__main">{children}</main>
      <footer className="layout__footer">
        <p>Made with React + CSS Animation</p>
      </footer>
    </div>
  )
}

export default Layout
