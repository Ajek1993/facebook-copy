interface Post {
  _id: number | string;
  user: Person;
  caption?: string;
  image?: StaticImport;
  whoLikes: Array;
  likes: number;
  comments: number;
  shares: number;
  createdAt: Date;
  updatedAt: Date;
}
