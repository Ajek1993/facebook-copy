import AddPost from "@/components/AddPost/AddPost";
import Posts from "@/components/Posts/Posts";
import Shorts from "@/components/Shorts/Shorts";
import LeftSideBar from "@/components/SideBars/LeftSideBar";
import RightSideBar from "@/components/SideBars/RightSideBar";

export default function App() {
  return (
    <>
      <main className="flex justify-between">
        <LeftSideBar />
        <div className="w-[300px] hidden xl:block"></div>
        <section className="max-w-[800px] min-w-[350px] relative">
          <Shorts />
          <AddPost />
          <Posts />
        </section>
        <div className="w-[400px] hidden lg:block"></div>
        <RightSideBar />
      </main>
    </>
  );
}
