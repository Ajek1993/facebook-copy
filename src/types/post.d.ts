interface Post {
  _id: number;
  user: Person;
  caption?: string;
  image?: StaticImport;
  likes: number;
  comments: number;
  shares: number;
  createdAt: Date;
  updatedAt: Date;
}
