export interface ArtworksResponse {
  artObjects: Artwork[];
}

export interface Artwork {
  id: string;
  title: string;
  longTitle: string;
  webImage: {
    url: string;
  };
  principalOrFirstMaker: string;
}

export interface ArtistsResponse {
  terms: Artist[];
}

export interface Artist {
  id: string;
  name: string;
}
