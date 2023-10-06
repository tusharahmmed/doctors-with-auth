import ScrollToTop from "react-scroll-to-top";
import {FaArrowAltCircleUp} from "react-icons/fa";

const ScrollUp = () => {
  return (
    <ScrollToTop
      smooth
      top={200}
      component={<FaArrowAltCircleUp size={24} color={"#01974D"} />}
    />
  );
};

export default ScrollUp;
