export type DynamicKey<T> = { [x: string]: T };

export interface RepositoryType {
  id: number;
  full_name: string;
  description: string;
  stargazers_count: number;
  language: string;
  html_url: string;
  owner: {
    id: number;
    login: string;
    avatar_url: string;
  };
}
