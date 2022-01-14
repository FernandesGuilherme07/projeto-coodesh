import { Component } from "react";
import "./Home.styled.js";
import { Articles } from "../../components/articles";
import { Footer } from "../../components/Footer";
import { Header } from "../../components/Header";
import { Container } from "./Home.styled.js";
import { GlobalStyle } from "../../theme/globals";

class Home extends Component {
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
        <GlobalStyle />
        <Header />
        <Container>
          <Articles articles={articles} />
        </Container>
        <Footer />
      </>
    );
  }
}

export default Home;
