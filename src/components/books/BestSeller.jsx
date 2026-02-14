import { useEffect } from "react";
import { useAllBookStore } from "../../store/state";
import EmblaCarousel from "../ui/emblaCarousel/EmblaCarousel";
import Button from "../ui/Button";

const BestSeller = () => {
  const { AllBooks, isLoading, error, fetchAllBooks } = useAllBookStore();

  useEffect(() => {
    fetchAllBooks();
  }, [fetchAllBooks]);

  console.log(AllBooks);
  if (isLoading) return <div className="text-center p-8">Loading...</div>;
  if (error) return <div className="text-center p-8 text-red-500">{error}</div>;

  return (
    <div className="text-white bg-[#3B2F4A] py-20">
      <div className="flex flex-col justify-center items-center ">
        <h1 className="text-3xl font-bold mb-4">Best Seller</h1>
        <p className="w-140 text-center text-gray-400">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Est hic
          earum quaerat ipsum rem inventore quisquam! Porro ipsum corrupti
          nihil.
        </p>
      </div>

      {/* carousel dasiy ui have an ugly carousel i used embla carousel instead  */}
      <EmblaCarousel slides={AllBooks} options={{ loop: true }} />
      <div className="flex justify-center mt-8">
        <Button isMainBtn={true}>Shop now</Button>
      </div>
    </div>
  );
};

export default BestSeller;
