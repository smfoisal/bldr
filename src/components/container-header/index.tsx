import { Button } from "evergreen-ui";
import { Container } from "../root";

const ContainerHeader = () => (
  <Container.Header
    title={"Build your own PC"}
    action={
      <Button size={"large"} appearance="primary">
        Create New
      </Button>
    }
  />
);

export default ContainerHeader;
