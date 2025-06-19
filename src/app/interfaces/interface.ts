export interface Joke {
  type: string;
  setup: string;
  punchline: string;
  id: number;
}

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