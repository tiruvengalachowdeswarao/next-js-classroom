import { ClientComponent } from "./components/ClientComponent";
import ServerComponent from "./components/ServerComponent";

export default function client() {
  return (
    <div>
      <h1>Server page</h1>
      <ClientComponent>
        <ServerComponent />
      </ClientComponent>
    </div>
  );
}
