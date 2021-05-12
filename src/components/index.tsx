import Header from "./header";
import { Pane } from "evergreen-ui";
import { BuilderProvider } from "./builder-context";
import { Container } from "./root";

export const App = () => (
  <Pane
    display="flex"
    flexDirection={"column"}
    background="tint2"
    width={"100%"}
    height={"100vh"}
  >
    <Header />
    <BuilderProvider>
      <Container paddingY>asdasdasd</Container>
    </BuilderProvider>
  </Pane>
);

export default App;
