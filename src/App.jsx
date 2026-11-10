import { useState } from "react";
import Galeria from "./components/Galeria";
import NavbarCards from "./components/NavbarCards";
import FormMatricula from "./components/FormMatricula";
import TabelaNotas from "./components/TabelaNotas";
import DesafioFinal from "./components/DesafioFinal";

export default function App() {
  const [tela, setTela] = useState("inicio");
  const telas = {
    galeria: <Galeria />,
    cards: <NavbarCards />,
    form: <FormMatricula />,
    tabela: <TabelaNotas />,
    desafio: <DesafioFinal />,
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container">
          <button
            className="navbar-brand btn btn-link text-decoration-none"
            onClick={() => setTela("inicio")}
          >
            Bootstrap + React
          </button>
          <div className="d-flex flex-wrap gap-2">
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => setTela("galeria")}
            >
              Ex. 1
            </button>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => setTela("cards")}
            >
              Ex. 2
            </button>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => setTela("form")}
            >
              Ex. 3
            </button>
            <button
              className="btn btn-outline-light btn-sm"
              onClick={() => setTela("tabela")}
            >
              Ex. 4
            </button>
            <button
              className="btn btn-warning btn-sm"
              onClick={() => setTela("desafio")}
            >
              Desafio
            </button>
          </div>
        </div>
      </nav>
      <main className="container py-5">
        {tela === "inicio" ? (
          <div className="p-5 bg-light rounded-3">
            <h1>Exercícios Bootstrap + React</h1>
            <p className="lead">
              Todos os exercícios dos slides reunidos em um único projeto.
              Escolha uma atividade no menu acima.
            </p>
          </div>
        ) : (
          telas[tela]
        )}
      </main>
    </>
  );
}
