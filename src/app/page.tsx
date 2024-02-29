import AddPost from "@/components/AddPost/AddPost";
import Posts from "@/components/Posts/Posts";
import Shorts from "@/components/Shorts/Shorts";
import LeftSideBar from "@/components/SideBars/LeftSideBar";
import RightSideBar from "@/components/SideBars/RightSideBar";

export default function App() {
  return (
    <>
      <main className="w-full flex justify-between ">
        <LeftSideBar />
        <section className="mx-16 max-w-[800px]relative">
          <Shorts />
          <AddPost />
          <Posts />
        </section>
        <RightSideBar />
      </main>
    </>
  );
}
