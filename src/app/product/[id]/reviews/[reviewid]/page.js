export default function ProductReview(props) {
  return (
    <div>
      <h1>Product Review page</h1>
      <h3>Product Review ID: {props.params.reviewid}</h3>
    </div>
  );
}
