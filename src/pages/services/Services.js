import Service from "./Service";

const Services = () => {
    const services = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div>
      <h1 className="text-lg lg:text-3xl font-bold text-secondary text-center py-10">My Services</h1>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 md:grid-cols-1 py-10">
        {services.map((service) => <Service key={service.id} service={service}></Service> )}
      </div>
    </div>
  );
};

export default Services;
