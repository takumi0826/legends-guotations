export type CategoryType = {
  entertainer: Entertainer;
  athlete: Athlete;
  comedian: Comedian;
  creater: Creater;
  anonymous: Anonymous;
};

export type Entertainer = {
  default: string;
  singer: string;
};

export type Athlete = {
  default: string;
  baseball: string;
  soccer: string;
  tennis: string;
};

export type Comedian = {
  default: string;
  lyricist: string;
  writer: string;
  manga: string;
};

export type Creater = {
  default: string;
};

export type Anonymous = {
  default: string;
};
