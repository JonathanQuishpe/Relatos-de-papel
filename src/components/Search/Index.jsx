const Index = ({ onSearchChange }) => {
  const handleChange = (e) => {
    onSearchChange(e.target.value);
  };
  return (
    <div className="col-md-12 mb-4">
      <input className="form-control" placeholder="Buscar por titulo"
        onChange={handleChange}
      />
    </div>
  );
}

export default Index;