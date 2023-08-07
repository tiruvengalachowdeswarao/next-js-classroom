export default function GameLayout(props) {
  return (
    <div id="GameLayout">
      {/* game layout */}
      <h1>GameLayout</h1>
      {props.children}

      {props.team}
      {props.analytics}
    </div>
  );
}
