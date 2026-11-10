import { useState } from "react";
import { Card, Badge } from "react-bootstrap";
function CardClasses({ c }) {
  return (
    <div className="card h-100 shadow-sm">
      <div className="card-body">
        <h5>{c.nome}</h5>
        <p>{c.desc}</p>
        <span className="badge bg-secondary">{c.carga} h</span>
      </div>
    </div>
  );
}
function CardRB({ c }) {
  return (
    <Card className="h-100 shadow-sm">
      <Card.Body>
        <Card.Title>{c.nome}</Card.Title>
        <Card.Text>{c.desc}</Card.Text>
        <Badge bg="secondary">{c.carga} h</Badge>
      </Card.Body>
    </Card>
  );
}
export default function DesafioFinal() {
  const [inscritos, setInscritos] = useState([]);
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [curso, setCurso] = useState("");
  const [erro, setErro] = useState("");
  const cursos = [
    { nome: "React", desc: "Componentes, hooks e estado.", carga: 40 },
    { nome: "JavaScript", desc: "Fundamentos da linguagem.", carga: 32 },
    { nome: "Bootstrap", desc: "Interfaces responsivas.", carga: 20 },
    { nome: "Node.js", desc: "Back-end JavaScript.", carga: 40 },
  ];
  function enviar(e) {
    e.preventDefault();
    if (nome.trim().length < 3 || !email.includes("@") || !curso) {
      setErro("Preencha corretamente todos os campos.");
      return;
    }
    setInscritos([...inscritos, { id: Date.now(), nome, email, curso }]);
    setNome("");
    setEmail("");
    setCurso("");
    setErro("");
  }
  return (
    <>
      <h2 className="mb-4">Desafio Final — Catálogo do Curso</h2>
      <h3 className="h4">Catálogo</h3>
      <div className="row g-4 mb-5">
        {cursos.map((c, i) => (
          <div className="col-12 col-md-6 col-lg-4" key={c.nome}>
            {i === 0 ? <CardRB c={c} /> : <CardClasses c={c} />}
          </div>
        ))}
      </div>
      <h3 className="h4">Inscrição</h3>
      {erro && <div className="alert alert-danger">{erro}</div>}
      <form className="row g-3 mb-5" onSubmit={enviar}>
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="Nome"
            value={nome}
            onChange={(e) => setNome(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <input
            className="form-control"
            placeholder="E-mail"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <select
            className="form-select"
            value={curso}
            onChange={(e) => setCurso(e.target.value)}
          >
            <option value="">Curso...</option>
            {cursos.map((c) => (
              <option key={c.nome}>{c.nome}</option>
            ))}
          </select>
        </div>
        <div className="col-12">
          <button className="btn btn-primary">Inscrever</button>
        </div>
      </form>
      <h3 className="h4">Inscritos</h3>
      <div className="table-responsive">
        <table className="table table-striped">
          <thead>
            <tr>
              <th>Nome</th>
              <th>E-mail</th>
              <th>Curso</th>
            </tr>
          </thead>
          <tbody>
            {inscritos.map((i) => (
              <tr key={i.id}>
                <td>{i.nome}</td>
                <td>{i.email}</td>
                <td>{i.curso}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
