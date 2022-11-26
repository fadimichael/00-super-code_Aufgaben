import "./logo.svg";
import "./App.css";
import Header from "./components/Header";

function App() {
  return (
    <div className="App">
      <Header />
      <Header />
      <Header />
      <Card />
    </div>
  );
}

export default App;

function Card() {
  return (
    <article>
      <h2>apple world</h2>
    </article>
  );
}
