import './categories.style.scss';

const App = () => {

  const categories = [
    {
      id: 1,
      title: 'Hats',
    },
    {
      id: 2,
      title: 'Jackets',
    },
    {
      id: 3,
      title: 'Sneakers',
    },
    {
      id: 4,
      title: 'Women',
    },
    {
      id: 5,
      title: 'Men',
    },
  ];
  

  return (
    <div className="categories-container">
      {categories.map(({title}) => (
        <div className="category-container">
          <div className='background-image' />
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
