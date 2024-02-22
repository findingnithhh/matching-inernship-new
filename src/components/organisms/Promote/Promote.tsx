import React from "react";
import {
  Button,
  Typography,
  Input,
  InputSearch,
  Icon,
  Select,
  CardTips,
  Search,
  Navbar,
  Banner,
} from "@/components";
const Promote = () => {
  return (
    <>
      <div className="flex justify-center items-center mt-10">
  <Button colorOutline="primary" size="md">
    See more
  </Button>
</div>
<div className="w-full md:w-[1200px] md:h-[131px] shadow-lg mx-auto my-10 rounded-xl flex flex-col md:flex-row justify-between items-center px-4 md:px-20">
  <div className="mb-4 md:mb-0 md:mr-16">
    <Typography
      fontSize="2xl"
      variant="bold"
      className="text-[#4B9960] text-center md:text-left"
    >
      500+
    </Typography>
    <Typography fontSize="sm" className="text-[#4B9960] text-center md:text-left">
      Post dreams internship
    </Typography>
  </div>
  <div className="mb-4 md:mb-0 md:mx-16">
    <Typography
      fontSize="2xl"
      variant="bold"
      className="text-[#4B9960] text-center md:text-left"
    >
      50+
    </Typography>
    <Typography fontSize="sm" className="text-[#4B9960] text-center md:text-left">
      Companies
    </Typography>
  </div>
  <div className="md:ml-16 md:mb-4">
    <Typography
      fontSize="2xl"
      variant="bold"
      className="text-[#4B9960] text-center md:text-left"
    >
      1200+
    </Typography>
    <Typography fontSize="sm" className="text-[#4B9960] text-center md:text-left">
      Seekers
    </Typography>
  </div>
</div>
    </>
  );
};

export { Promote };
