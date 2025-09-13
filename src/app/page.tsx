import StreetView from "../components/StreetView";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen p-8">
      <h1 className="text-2xl font-bold mb-4">Street View Demo</h1>
      {/* Example: Statue of Liberty */}
      <StreetView lat={40.689247} lng={-74.044502} />
    </main>
  );
}