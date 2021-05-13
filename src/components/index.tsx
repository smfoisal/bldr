import Header from "./header";
import { Pane } from "evergreen-ui";
import { BuilderProvider } from "./builder-context";
import { Container } from "./root";
import BuildList from "./build-list";
import PCBuilder from "./pc-builder";

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
      <Container paddingY>
        <Container.Row>
          <Pane
            display="flex"
            flexDirection={"column"}
            width={"20%"}
            paddingRight={20}
          >
            <BuildList />
          </Pane>
          <Pane display="flex" flexDirection={"column"} width={"80%"}>
            <PCBuilder />
          </Pane>
        </Container.Row>
      </Container>
    </BuilderProvider>
  </Pane>
);

export default App;
