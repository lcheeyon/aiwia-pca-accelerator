
const CompanyValues = () => {
  const values = [
    {
      title: "Integrity",
      description: "We maintain the highest ethical standards in all our consulting practices",
      color: "bg-aiwia-black"
    },
    {
      title: "Trust", 
      description: "Building lasting partnerships through transparent and reliable solutions",
      color: "bg-aiwia-blue"
    },
    {
      title: "Innovation",
      description: "Accelerating digital adoption with cutting-edge AI technologies",
      color: "bg-aiwia-green"
    }
  ];

  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-aiwia-black mb-4">
            Our Values
          </h2>
          <p className="text-xl text-aiwia-gray-dark">
            The principles that guide our mission to accelerate responsible AI adoption
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {values.map((value, index) => (
            <div key={index} className="text-center group">
              <div className={`w-20 h-20 ${value.color} rounded-full mx-auto mb-6 flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                <span className="text-white text-2xl font-bold">
                  {value.title.charAt(0)}
                </span>
              </div>
              <h3 className="text-2xl font-bold text-aiwia-black mb-4">
                {value.title}
              </h3>
              <p className="text-aiwia-gray-dark leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CompanyValues;
