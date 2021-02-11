export interface SearchResponse {
  data: Song[];
  total: number;
  next: string;
}

export interface Song {
  id: number;
  readable: boolean;
  title: string;
  titleShort: string;
  titleVersion: TitleVersion;
  link: string;
  duration: number;
  rank: number;
  explicitLyrics: boolean;
  explicitContentLyrics: number;
  explicitContentCover: number;
  preview: string;
  md5Image: string;
  artist: Artist;
  album: Album;
  type: DatumType;
}

export interface Album {
  id: number;
  title: string;
  cover: string;
  coverSmall: string;
  coverMedium: string;
  coverBig: string;
  coverXl: string;
  md5Image: string;
  tracklist: string;
  type: AlbumType;
}

export enum AlbumType {
  Album = "album",
}

export interface Artist {
  id: number;
  name: Name;
  link: string;
  picture: string;
  pictureSmall: string;
  pictureMedium: string;
  pictureBig: string;
  pictureXl: string;
  tracklist: string;
  type: ArtistType;
}

export enum Name {
  Eminem = "Eminem",
}

export enum ArtistType {
  Artist = "artist",
}

export enum TitleVersion {
  Empty = "",
  From8MileSoundtrack = '(From "8 Mile" Soundtrack)',
  MusicFromTheMotionPicture = "(Music From The Motion Picture)",
  SoundtrackVersion = "(Soundtrack Version)",
}

export enum DatumType {
  Track = "track",
}
