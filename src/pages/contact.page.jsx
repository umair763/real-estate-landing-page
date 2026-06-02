export const ContactPage = () => {
  return (
    <section className="py-20 bg-[#F7E6CA]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-[#000000] mb-4">Contact Us</h1>
        <p className="text-lg text-[#464646] max-w-3xl">
          Have questions? We're here to help. Reach out to our team for assistance with your property journey.
        </p>
        <div className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-[#000000] mb-2">Email</h3>
            <p className="text-[#464646]">contact@estatepro.com</p>
          </div>
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-[#000000] mb-2">Phone</h3>
            <p className="text-[#464646]">+1 (555) 123-4567</p>
          </div>
          <div className="bg-[#FFFFFF] p-6 rounded-lg shadow">
            <h3 className="font-semibold text-[#000000] mb-2">Office</h3>
            <p className="text-[#464646]">123 Real Estate Ave, City</p>
          </div>
        </div>
      </div>
    </section>
  );
};
