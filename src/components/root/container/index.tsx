import { ReactNode } from "react";
import { Pane } from "evergreen-ui";

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
