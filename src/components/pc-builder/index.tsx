import { useEffect } from "react";
import { Card } from "evergreen-ui";
import ContainerHeader from "../container-header";
import urlMetadata from "url-metadata";

const PCBuilder = () => {
  function cardClick() {
    console.log("c");
  }

  return (
    <>
      <ContainerHeader />
      <Card
        width={100}
        height={100}
        border={true}
        padding={16}
        onClick={cardClick}
      >
        asd
      </Card>
    </>
  );
};
export default PCBuilder;
