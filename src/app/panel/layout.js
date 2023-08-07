// import GetUser from "../lib/GetUser";
// new Next syntax for import
import GetUser from "@/lib/GetUser";

const PanelLayout = async (props) => {
  let isAdmin = await GetUser();
  return (
    <div id="PanelLayout">
      <h1>Panel Layout</h1>
      {props.children}
      {isAdmin ? props.adminpanel : props.userpanel}
    </div>
  );
};

export default PanelLayout;
