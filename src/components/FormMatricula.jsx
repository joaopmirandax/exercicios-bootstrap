import { useState } from "react";
export default function FormMatricula() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");
  const [erros, setErros] = useState({});
  const [ok, setOk] = useState(false);
  function validar() {
    const e = {};
    if (nome.trim().length < 3) e.nome = "Nome deve ter no mínimo 3 letras";
    if (!email.includes("@")) e.email = "E-mail inválido";
    if (!curso) e.curso = "Escolha um curso";
    return e;
  }
  function enviar(ev) {
    ev.preventDefault();
    const e = validar();
    setErros(e);
    setOk(false);
    if (Object.keys(e).length) return;
    setNome("");
    setEmail("");
    setCurso("");
    setOk(true);
  }
  return (
    <>
      <h2 className="mb-4">Exercício 3 — Formulário Validado</h2>
      {ok && (
        <div className="alert alert-success">
          Matrícula realizada com sucesso!
        </div>
      )}
      <form className="row g-3" onSubmit={enviar} noValidate>
        <div className="col-md-6">
          <label htmlFor="n" className="form-label">
            Nome
          </label>
          <input
            id="n"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
            className={`form-control ${erros.nome ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{erros.nome}</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="e" className="form-label">
            E-mail
          </label>
          <input
            id="e"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className={`form-control ${erros.email ? "is-invalid" : ""}`}
          />
          <div className="invalid-feedback">{erros.email}</div>
        </div>
        <div className="col-md-6">
          <label htmlFor="c" className="form-label">
            Curso
          </label>
          <select
            id="c"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
            className={`form-select ${erros.curso ? "is-invalid" : ""}`}
          >
            <option value="">Selecione...</option>
            <option>ADS</option>
            <option>Mecatrônica</option>
            <option>Front-End</option>
          </select>
          <div className="invalid-feedback">{erros.curso}</div>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Enviar</button>
        </div>
      </form>
    </>
  );
}
