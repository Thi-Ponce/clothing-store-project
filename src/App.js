const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
  ];
  

  return (
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
        <h2>Category image</h2>
        <div className="category-body-container">
          <h3>{title}</h3>
          <p>Category description</p>
        </div>
      </div>
      ))}
      
    </div>
  );
}

export default App;
