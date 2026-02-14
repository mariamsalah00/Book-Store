
const CustomerSupport = ({ heading , icon }) => {
  return (
    <div className="w-100 flex flex-col items-start container mx-auto gap-4 py-10">
      {/* icon  */}
      <div className="icon">
        {icon}
      </div>

      <h1 className="text-2xl font-bold">{heading}</h1>
      <p className="text-[#22222280] text-lg">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sint
        voluptatibus quas tempora ut, nihil veritatis doloremque, in cum optio
        error accusamus consequatur iusto labore voluptas dicta quam minus
        sapiente nesciunt.
      </p>
    </div>
  );
};

export default CustomerSupport;
