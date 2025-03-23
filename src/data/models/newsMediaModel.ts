export interface MediaModel {
  caption: string;
  copyright: string;
  approved_for_syndication: number;
  'media-metadata': MediaMetadatumModel[];
}

export interface MediaMetadatumModel {
  url: string;
  height: number;
  width: number;
}
