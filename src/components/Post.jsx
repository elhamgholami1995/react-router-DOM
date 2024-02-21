import { Link, useParams } from "react-router-dom";
const posts = [
  { id: 1, title: "TiTle One", body: "Body One" },
  { id: 2, title: "TiTle Two", body: "Body Two" },
  { id: 3, title: "TiTle Three", body: "Body Three" },
];
function Post() {
  const { id } = useParams();
  const post = posts.find((p) => p.id === Number(id));
  return (
    <div>
      <h1>single Post</h1>
      <div>post id: {post.id}</div>
      <p>{post.title}</p>
      <p>{post.body}</p>
      <Link to="/app/posts"> go to posts?</Link>
    </div>
  );
}

export default Post;
