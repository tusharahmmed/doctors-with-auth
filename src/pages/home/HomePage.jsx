import {
  Appointments,
  Blog,
  Department,
  Doctors,
  Service,
  Testimonial,
} from "../../components/Home";

const HomePage = () => {
  return (
    <>
      <Service />
      <Department />
      <Doctors />
      <Blog />
      <Testimonial />
      <Appointments />
    </>
  );
};

export default HomePage;
