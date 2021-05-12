import { Pane, Heading } from "evergreen-ui";
import { Container } from "../root";
const Header = () => (
  <Pane
    padding={16}
    height={56}
    maxHeight={56}
    flex={1}
    alignItems="center"
    display="flex"
    elevation={1}
    justifyContent={"center"}
  >
    <Container>
      <Heading fontWeight={500} textTransform={"uppercase"}>
        Bldr
      </Heading>
    </Container>
  </Pane>
);

export default Header;
