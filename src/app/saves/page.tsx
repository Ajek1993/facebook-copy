import PrivateRoute from "@/components/PrivateRoute";

export default function page() {
  return (
    <PrivateRoute>
      <div>In progress: saves</div>
    </PrivateRoute>
  );
}
