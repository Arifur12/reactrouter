import { Link } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";

export default function Home() {
  const {
    data: articles,
    isPending,
    error,
  } = useFetch("http://localhost:3000/articles");

  return (
    <div className="home">
      <h2>Home</h2>
      {isPending && <div>loading....</div>}
      {error && <div>{error}</div>}
      {/* articles must be true so it can pass check */}
      {articles &&
        articles.map((article) => (
          <div key={article.id} className="card">
            <h2>{article.title}</h2>
            <p>{article.author}</p>
            <Link to={`/articles/${article.id}`}>read more....</Link>
          </div>
        ))}
    </div>
  );
}
