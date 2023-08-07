import Link from "next/link";
import { comments } from "./comments";
export default async function CommentsPage() {
  // const response = await fetch("https://jsonplaceholder.typicode.com/comments");
  // const comments = await response.json();

  return (
    <div>
      <h1>Comments page</h1>
      <h2>Comments List</h2>
      <ul>
        {comments.map((comment) => {
          return (
            <li key={comment.id}>
              <Link href={`comments/${comment.id}`}>{comment.name}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}
