import { useEffect, useState } from "react";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
}

const Listing: React.FC = () => {
  const [posts, setPosts] = useState<Post[]>([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/posts")
      .then((res) => setPosts(res.data.slice(0, 10)))
      .catch((err) => console.error(err));
  }, []);

  return (
    <div>
      <h1>Posts Listing</h1>
      <ul>
        {posts.map((post) => (
          <li key={post.id}>
            <strong>{post.title}</strong> <br />
            {post.body}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Listing;
