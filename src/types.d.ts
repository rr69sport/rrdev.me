export interface ProjectType {
  title: string;
  description: string;
  screenshot: string;
  built: string[];
  links: Link[];
}

export interface LinkType {
  text: string;
  url: string;
}
