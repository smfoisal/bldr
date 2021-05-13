import { ReactNode } from "react";
import { Pane, Heading } from "evergreen-ui";

interface ContainerProps {
  children: ReactNode | string;
  paddingY?: boolean;
}

export const Container = ({ children, paddingY = false }: ContainerProps) => (
  <Pane
    flex={1}
    display={"flex"}
    flexDirection={"column"}
    width={1440}
    maxWidth={1440}
    marginX={"auto"}
    paddingY={paddingY ? 20 : 0}
  >
    {children}
  </Pane>
);

interface ContainerHeaderProps {
  title: string;
  action?: ReactNode;
}

Container.Header = ({ title, action }: ContainerHeaderProps) => (
  <Pane display={"flex"} marginBottom={20} alignItems={"center"}>
    <Heading size={700} fontWeight={300} textTransform={"capitalize"}>
      {title}
    </Heading>
    <Pane marginLeft={"auto"}>{action}</Pane>
  </Pane>
);

interface ContainerGenProps {
  children: ReactNode | string;
}

Container.Row = ({ children }: ContainerGenProps) => (
  <Pane display={"flex"} flexDirection={"row"} flex={1}>
    {children}
  </Pane>
);
