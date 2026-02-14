import CustomerSupport from "./CustomerSupport";
import {
  FaCreditCard,
  FaHeadset,
  FaRegWindowRestore,
  FaTruckFast,
} from "react-icons/fa6";
const Support = () => {
  return (
    <div className="container mx-auto flex flex-col md:flex-row  items-center justify-center gap-5">
      <CustomerSupport
        heading="Fast & Reliable Shipping"
        icon={<FaTruckFast className="text-[#22222280] w-10 h-10" />}
      />
      <CustomerSupport
        heading="Secure Payment"
        icon={<FaCreditCard className="text-[#22222280] w-10 h-10" />}
      />
      <CustomerSupport
        heading="Easy Returns"
        icon={<FaRegWindowRestore className="text-[#22222280] w-10 h-10" />}
      />
      <CustomerSupport
        heading="24/7 Customer Support"
        icon={<FaHeadset className="text-[#22222280] w-10 h-10" />}
      />
    </div>
  );
};

export default Support;
