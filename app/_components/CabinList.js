import { getCabins } from "../_lib/data-service";
import CabinCard from "./CabinCard";

export default async function CabinList({ capacity }) {
  const cabins = await getCabins();

  const filteredCabins = cabins.filter((cabin) => {
    if (capacity === "small") return cabin.maxCapacity <= 3;
    if (capacity === "medium")
      return cabin.maxCapacity > 3 && cabin.maxCapacity <= 6;
    if (capacity === "large") return cabin.maxCapacity > 6;
    return cabins;
  });

  if (!cabins.length) return null;

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12 xl:gap-14">
      {filteredCabins.map((cabin) => (
        <CabinCard cabin={cabin} key={cabin.id} />
      ))}
    </div>
  );
}
