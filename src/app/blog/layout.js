import Home from "../page";
const BlogLayout = (props) => {
  return (
    <div id="BlogLayout">
      {/* <Home></Home> */}
      {props.children}
    </div>
  );
};
export default BlogLayout;
