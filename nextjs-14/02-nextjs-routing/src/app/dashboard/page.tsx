import LineCharts from "./line-charts";

function BarCharts() {
  return <h1>Bar Charts</h1>;
}

export default function Dashboard() {
  return (
    <>
      <h1>Dashboard</h1>
      <BarCharts />
      <LineCharts />
    </>
  );
}
