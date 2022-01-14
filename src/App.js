import { Component } from "react";
import "./App.css";
import { Footer } from "./components/Footer";
import { NavBar } from "./components/NavBar";

class App extends Component {
  state = {
    articles: [],
  };

  componentDidMount() {
    this.loadArticles();
  }

  loadArticles = async () => {
    fetch("https://api.spaceflightnewsapi.net/v3/articles")
      .then((response) => response.json())
      .then((articles) => this.setState({ articles }));
  };

  render() {
    const { articles } = this.state;

    return (
      <>
        <NavBar />
        <section className="container">
          <div className="articles">
            {articles.map((article) => (
              <div className="article">
                <img src={article.imageUrl} alt={article.title} />
                <div key={article.id} className="article-content">
                  <a href={article.url} target="_blank" rel="noreferrer">
                    <h1>{article.title}</h1> <br />
                    <p>{article.summary}</p>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </section>
        <Footer />
      </>
    );
  }
}

export default App;
