import { useEffect, useState } from "react";
import SearchBar from "../SearchBar/SearchBar";
import css from "./App.module.css";
import { fetchPhotos } from "../services/fetchUnsplash";

function App() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);
  const [photos, setPhotos] = useState([]);

  const [topic, setTopic] = useState("");
  const [page, setPage] = useState(1);
  const [totalPages, setTotalPages] = useState(999);

  useEffect(() => {
    if (topic === "") {
      return;
    }

    async function getPhotos() {
      try {
        setLoading(true);
        setError(false);
        const res = await fetchPhotos(topic, page);
        setPhotos((prevState) => [...prevState, ...res.photos]);
        setTotalPages(res.totalPages);
      } catch (error) {
        setError(true);
      } finally {
        setLoading(false);
      }
    }

    getPhotos();
  }, [page, topic]);

  const handleSearch = (newTopic) => {
    setTopic(newTopic);
    setPage(1);
    setPhotos([]);
  };

  const handleLoadMore = () => {
    setPage(page + 1);
  };
  return (
    <div>
      <SearchBar onSearch={handleSearch} />
      {photos.length > 0 && <ArticleList items={photos} />}

      {page >= totalPages && <b>END OF COLLECTION!!!!</b>}

      {error && <b>ERROR!!!</b>}

      {loading && <b>LOADING...</b>}

      {photos.length > 0 && !loading && (
        <button onClick={handleLoadMore}>Load more</button>
      )}
    </div>
  );
}

export default App;
