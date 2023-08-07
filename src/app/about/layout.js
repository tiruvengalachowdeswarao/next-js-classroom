import Home from "../page";
const AboutLayout = (props) => {
  return (
    <div id="AboutLayout">
      {/* <Home></Home> */}
      {props.children}
    </div>
  );
};
export default AboutLayout;
