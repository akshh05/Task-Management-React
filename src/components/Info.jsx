function Info({ title, description }) {
  return (
    <div className="info">
      <h1 style={{ fontSize: "30px", marginBottom: "8px" }}>{title}</h1>
      <p>{description}</p>
    </div>
  );
}

export default Info;
