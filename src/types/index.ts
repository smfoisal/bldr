export interface IMetaData {
  url: string;
  title: string;
  description: string;
  bannerUrl: string;
}

export interface IBuild {
  processor?: IMetaData;
  cpuCooler?: IMetaData;
  motherboard?: IMetaData;
  ram?: IMetaData[];
  hdd?: IMetaData[];
  ssd?: IMetaData[];
  gpu?: IMetaData[];
  case?: IMetaData;
  psu?: IMetaData;
  monitor?: IMetaData[];
  keyboard?: IMetaData[];
  mouse?: IMetaData[];
  speaker?: IMetaData;
  headPhone?: IMetaData;
}

export interface IBuildDetails {
  title: string;
  budget: string;
  build: IBuild;
}
