import "./styles.css";

function Article() {
  return <article className="article">
    <h2 className="article__title">Naps are important!</h2>
    <label htmlFor="nap-input">How many naps do you want to take right now?</label>
    <input id="nap-input"></input>
    <a className="article__link" href="https://en.wikipedia.org/wiki/Nap">Know more about naps!</a>
  </article>
}

export default function App() {
  return <Article />;
}
