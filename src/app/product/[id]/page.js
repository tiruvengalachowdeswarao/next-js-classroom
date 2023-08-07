export default function ProductDetails(props) {
  return (
    <div>
      <h1>Product Details page</h1>
      <h3>Product details ID: {props.params.id}</h3>
    </div>
  );
}
