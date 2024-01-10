import './App.css';
import Header from './Header';
import Footer from "./Footer";
import Card from "./Card";
import data from "./data";

function App() {
  const cards = data.map((item) =>{
    return <Card key={item.key}{...item} />
  })

  return (
    <div class="App">
      <Header />
      <section className="cards-list">{cards}</section>
      <Footer />
    </div>
    
  );
}

export default App;
