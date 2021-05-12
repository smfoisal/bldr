import { Pane, Heading } from "evergreen-ui";

const Header = () => (
  <Pane
    display="flex"
    background="tint2"
    borderRadius={0}
    width={"100%"}
    height={"100vh"}
  >
    <Pane
      padding={16}
      height={48}
      flex={1}
      alignItems="center"
      display="flex"
      elevation={1}
      justifyContent={"center"}
    >
      <Pane flex={1} display={"flex"} maxWidth={1440}>
        <Heading size={400} textTransform={"uppercase"}>
          Bldr
        </Heading>
      </Pane>
    </Pane>
  </Pane>
);

export default Header;
