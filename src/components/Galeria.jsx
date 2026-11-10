export default function Galeria() {
  const blocos = [
    ["1", "primary"],
    ["2", "success"],
    ["3", "danger"],
    ["4", "warning"],
    ["5", "info"],
    ["6", "secondary"],
  ];
  return (
    <>
      <h2 className="mb-4">Exercício 1 — Galeria Responsiva</h2>
      <div className="row g-3">
        {blocos.map(([n, c]) => (
          <div className="col-12 col-md-6 col-lg-4" key={n}>
            <div className={`bg-${c} text-white p-5 rounded text-center h-100`}>
              <h3 className="h5">Bloco {n}</h3>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
