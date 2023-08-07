import Home from "../page";
const GreetingsLayout = (props) => {
  return (
    <div id="GreetingsLayout">
      {/* <Home></Home> */}
      {props.children}
    </div>
  );
};
export default GreetingsLayout;
