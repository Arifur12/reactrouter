import { useEffect } from "react";
import {
  useHistory,
  useParams,
} from "react-router-dom/cjs/react-router-dom.min";
import { useFetch } from "../hooks/useFetch";

export default function Articles() {
  const { id } = useParams();
  const url = `http://localhost:3000/articles/${id}`;
  const { data: article, isPending, error } = useFetch(url);
  const history = useHistory();
  useEffect(() => {
    if (error) {
      setTimeout(() => {
        history.push("/");
      }, 1000);
    }
  }, [error, history]);

  return (
    <div>
      {isPending && <div>loading...</div>}
      {error && <div>{error}</div>}
      {article && (
        <div>
          <h2>title{article.title}</h2>
          <h3>by {article.author}</h3>
          <p>{article.body}</p>
        </div>
      )}
    </div>
  );
}
