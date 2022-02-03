import './App.css';

import Cards from './components/Cards';
import Nav from './components/Nav';
import data from './data';

function App() {
  const cards = data.map((item) => <Cards key={item.id} {...item} />);

  return (
    <div>
      <Nav />
      {cards}
    </div>
  );
}

export default App;
