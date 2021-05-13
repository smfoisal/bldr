import { ReactNode, createContext, useContext, useState } from "react";
import { IBuildDetails } from "types";

interface IBuilderContextProps {
  builds: IBuildDetails[];
  activeBuild?: IBuildDetails | null;
  setActiveBuildIndex: (index: number) => void;
  addNewBuild: (build: IBuildDetails) => void;
}

const BuilderContext = createContext<IBuilderContextProps>({
  builds: [],
  activeBuild: null,
  addNewBuild: (build: IBuildDetails) => {},
  setActiveBuildIndex: (index: number) => {}
});

interface BuilderProps {
  children: ReactNode | string;
}

function BuilderProvider({ children }: BuilderProps) {
  const [builds, setBuilds] = useState<IBuildDetails[]>([]);
  const [activeBuildIndex, setActiveBuildIndex] = useState<number>(0);

  /**
   *
   */
  function addNewBuild(build: IBuildDetails): void {
    setBuilds([...builds, build]);
  }

  return (
    <BuilderContext.Provider
      value={{
        builds,
        activeBuild: builds[activeBuildIndex],
        addNewBuild,
        setActiveBuildIndex
      }}
    >
      {children}
    </BuilderContext.Provider>
  );
}

const useBuilder = () => useContext(BuilderContext);

export { BuilderProvider, useBuilder };
