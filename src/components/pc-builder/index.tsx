import { Card, Heading } from "evergreen-ui";
import ContainerHeader from "../container-header";

const PCBuilder = () => (
  <>
    <ContainerHeader />
    <Card border={true} background={"white"} padding={16}>
      <Heading size={100}>Your Saved Builds</Heading>
    </Card>
  </>
);

export default PCBuilder;
