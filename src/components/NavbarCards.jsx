import { useState } from "react";
export default function NavbarCards() {
  const [aberto, setAberto] = useState(false);
  const cards = [
    ["React", "Interfaces com componentes e estado."],
    ["JavaScript", "Fundamentos da linguagem."],
    ["Bootstrap", "Layouts responsivos rapidamente."],
    ["Node.js", "JavaScript no back-end."],
  ];
  return (
    <>
      <h2 className="mb-4">Exercício 2 — Navbar + Cards</h2>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark rounded mb-4">
        <div className="container-fluid">
          <span className="navbar-brand">Escola</span>
          <button className="navbar-toggler" onClick={() => setAberto(!aberto)}>
            <span className="navbar-toggler-icon" />
          </button>
          <div className={`navbar-collapse ${aberto ? "" : "collapse"}`}>
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#">
                Início
              </a>
              <a className="nav-link" href="#">
                Cursos
              </a>
              <a className="nav-link" href="#">
                Contato
              </a>
            </div>
          </div>
        </div>
      </nav>
      <div className="row g-4">
        {cards.map(([t, x]) => (
          <div className="col-12 col-md-6" key={t}>
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5>{t}</h5>
                <p>{x}</p>
                <button className="btn btn-primary mt-auto">Ver curso</button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
