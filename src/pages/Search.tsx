import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Search: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data.slice(0, 20)))
      .catch((err) => console.error(err));
  }, []);

  const filteredPosts = posts.filter((post) =>
    post.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div>
      <h1>Search Posts</h1>
      <input
        type="text"
        placeholder="Search by title..."
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
      />
      <ul>
        {filteredPosts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> <br />
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Search;
