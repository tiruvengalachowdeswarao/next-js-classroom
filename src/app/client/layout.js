import Home from "../page";
const ClientLayout = (props) => {
  return (
    <div id="ClientLayout">
      {/* <Home></Home> */}
      {props.children}
    </div>
  );
};
export default ClientLayout;
