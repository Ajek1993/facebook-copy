import PrivateRoute from "@/components/PrivateRoute";

export default function page() {
  return (
    <PrivateRoute>
      <div>In progress: friends</div>
    </PrivateRoute>
  );
}
