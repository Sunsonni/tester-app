export interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

//Artist obj
export interface Artist {
  external_urls: Externalurls;
  followers: Followers;
  genres: any[];
  href: string;
  id: string;
  images: Image[];
  name: string;
  popularity: number;
  type: string;
  uri: string;
}

export interface Image {
  url: string;
  height: number;
  width: number;
}

interface Followers {
  href: null;
  total: number;
}

interface Externalurls {
  spotify: string;
}

// Albums
export interface RootObject {
  href: string;
  limit: number;
  next: string;
  offset: number;
  previous: null;
  total: number;
  items: Item[];
}

export interface Item {
  album_type: string;
  total_tracks: number;
  available_markets: string[];
  external_urls: Externalurls;
  href: string;
  id: string;
  images: Image[];
  name: string;
  release_date: string;
  release_date_precision: string;
  type: string;
  uri: string;
  artists: Artist[];
  album_group: string;
}