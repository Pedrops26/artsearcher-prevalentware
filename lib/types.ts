export interface ArtObject {
    id: string;
    title: string;
    webImage: {
      url: string;
    };
  }
  
  export interface ArtworksResponse {
    artObjects: ArtObject[];
  }
  