import { SplitScreen } from "./SplitScreen";

const LeftHandComponent = ({name}) => {
    return <h1 style={{ backgroundColor: "green"}}>{name}</h1>
}
const RightHandComponent = ({message}) => {
    return <p style={{ backgroundColor: 'red'}}>{message}</p>
}
function App() {
  return (
      <SplitScreen left={LeftHandComponent} right={RightHandComponent} >
        <LeftHandComponent name="Justin"/>
        <RightHandComponent message="Hello"/>
      </SplitScreen>
  );
}

export default App;
