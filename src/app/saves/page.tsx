import Navbar from "@/components/Navbar/Navbar";
import PrivateRoute from "@/components/PrivateRoute";

export default function page() {
  return (
    <PrivateRoute>
      <Navbar />
      <div>In progress: saves</div>
    </PrivateRoute>
  );
}
