interface Post {
  _id: number | string;
  user: Person;
  caption?: string;
  image?: StaticImport;
  likes: number;
  comments: number;
  shares: number;
  createdAt: Date;
  updatedAt: Date;
}
