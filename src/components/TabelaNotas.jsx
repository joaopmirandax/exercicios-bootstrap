import { useState } from "react";
export default function TabelaNotas() {
  const [busca, setBusca] = useState("");
  const alunos = [
    ["Ana", "ADS", "A", 8.5],
    ["Bruno", "ADS", "A", 5.5],
    ["Carlos", "Mecatrônica", "B", 7],
    ["Daniela", "ADS", "B", 9],
    ["Eduardo", "Mecatrônica", "A", 4.8],
    ["Fernanda", "ADS", "A", 6.5],
    ["Gabriel", "Mecatrônica", "B", 5.9],
    ["Helena", "ADS", "B", 10],
  ].map((a, i) => ({
    id: i + 1,
    nome: a[0],
    curso: a[1],
    turma: a[2],
    nota: a[3],
  }));
  const f = alunos.filter((a) =>
    a.nome.toLowerCase().includes(busca.toLowerCase()),
  );
  return (
    <>
      <h2 className="mb-4">Exercício 4 — Tabela com Filtro</h2>
      <input
        className="form-control mb-3"
        placeholder="Buscar por nome..."
        value={busca}
        onChange={(e) => setBusca(e.target.value)}
      />
      <div className="table-responsive">
        <table className="table table-striped align-middle">
          <thead className="table-dark">
            <tr>
              <th>Aluno</th>
              <th>Curso</th>
              <th>Turma</th>
              <th>Nota</th>
            </tr>
          </thead>
          <tbody>
            {f.map((a) => (
              <tr key={a.id}>
                <td>{a.nome}</td>
                <td>{a.curso}</td>
                <td>{a.turma}</td>
                <td>
                  {a.nota < 6 ? (
                    <span className="badge bg-danger">{a.nota}</span>
                  ) : (
                    a.nota
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      {f.length === 0 && (
        <div className="alert alert-warning">Nenhum aluno encontrado.</div>
      )}
    </>
  );
}
