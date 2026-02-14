import BestSeller from "../components/books/BestSeller";
import RecommendedBooks from "../components/books/RecommendedBooks";
import Support from "../components/customer-support/Support";

const HomePage = () => {
  return (
    <>
      <Support />
      <BestSeller />
      <RecommendedBooks />
    </>
  );
};

export default HomePage;
