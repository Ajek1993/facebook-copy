import Shorts from "@/components/Shorts/Shorts";
import LeftSideBar from "@/components/SideBars/LeftSideBar";
import RightSideBar from "@/components/SideBars/RightSideBar";

export default function App() {
  return (
    <>
      <main className="w-full flex justify-between ">
        <LeftSideBar />
        <section className="mx-16 max-w-[1000px] bg-slate-400 relative">
          <Shorts />
        </section>

        <RightSideBar />
      </main>
    </>
  );
}
