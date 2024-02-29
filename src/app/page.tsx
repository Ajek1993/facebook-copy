import Shorts from "@/components/Shorts/Shorts";
import LeftSideBar from "@/components/SideBars/LeftSideBar";
import RightSideBar from "@/components/SideBars/RightSideBar";

export default function App() {
  return (
    <>
      <main className="w-full flex justify-between">
        <LeftSideBar />
        <section className="px-16 mx-20">
          <Shorts />
        </section>

        <RightSideBar />
      </main>
    </>
  );
}
