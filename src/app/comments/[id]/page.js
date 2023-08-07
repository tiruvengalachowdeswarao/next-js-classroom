export default async function CommentDetailsPage(props) {
  //   const response = await fetch(
  //     `https://jsonplaceholder.typicode.com/comments/${props.params.id}`
  //   );
  //   const comment = await response.json();
  return (
    <div>
      <h1>Comment Details page: {props.params.id}</h1>
      {/* <h3>Comment details: {JSON.stringify(comment)}</h3> */}
      {/* <br></br>
      <div>
        <h4>Comment ID: {comment.id}</h4>
        <h4>Comment Name: {comment.name}</h4>
        <h4>Comment Body: {comment.body}</h4>
        <h4>Comment Email: {comment.email}</h4>
      </div> */}
    </div>
  );
}

// //SSG (Static Site Generation)
// export async function generateStaticParams() {
//   const response = await fetch(`https://jsonplaceholder.typicode.com/comments`);
//   const comments = await response.json();

//   return comments.map((comment) => {
//     //slug or id should be always  a string
//     let id = comment.id.toString();
//     return {
//       id,
//     };
//   });
// }
