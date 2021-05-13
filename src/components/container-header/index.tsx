import { Button } from "evergreen-ui";
import { Container } from "../root";

const ContainerHeader = () => (
  <Container.Header
    title={"Build your own PC"}
    action={<Button size={"large"}>Create New</Button>}
  />
);

export default ContainerHeader;
