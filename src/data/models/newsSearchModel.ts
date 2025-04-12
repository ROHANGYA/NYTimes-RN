export interface NewsSearchModel {
  abstract: string;
  headline: Headline;
  //  _id: string;
  multimedia: Multimedia;
  pub_date: string;
  //  section_name: string;
  //   snippet: string;
  //   uri: string;
  //   web_url: string;
  //   word_count: number;
}

export interface Headline {
  main: string;
  kicker: string;
  print_headline: string;
}

export interface Multimedia {
  caption: string;
  credit: string;
  default: Default;
  thumbnail: Default;
}

export interface Default {
  url: string;
  height: number;
  width: number;
}
