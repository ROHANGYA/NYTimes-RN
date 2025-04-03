export interface MediaModel {
  caption: string;
  copyright: string;
  url: string;
  'media-metadata'?: MediaMetadatumModel[];
}

export interface MediaMetadatumModel {
  url: string;
  height: number;
  width: number;
}
