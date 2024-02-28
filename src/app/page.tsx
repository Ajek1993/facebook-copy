import LeftSideBar from "@/components/SideBars/LeftSideBar";

export default function App() {
  return (
    <>
      <main className="w-full">
        <aside className="h-screen max-w-[280px] hidden md:block">
          <LeftSideBar />
        </aside>
      </main>
      <aside></aside>
    </>
  );
}
