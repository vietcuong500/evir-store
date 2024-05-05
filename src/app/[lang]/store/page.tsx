import StoreCard from "./components/StoreCart";

export default function StorePage() {
  return (
    <div className="container mx-auto grid grid-cols-1 lg:grid-cols-3 gap-8 my-8">
      <StoreCard />
      <StoreCard />
      <StoreCard />
      <StoreCard />
    </div>
  );
}
