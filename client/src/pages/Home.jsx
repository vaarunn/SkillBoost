import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  checkUser,
  resetErrorMessage,
  resetSuccessMessage,
} from "../redux/slices/userSlice";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate } from "react-router-dom";
import { toast } from "react-hot-toast";
import { Player } from "@lottiefiles/react-lottie-player";
import lottieHero from "../assets/lottieCourse.json";
import Carasoul from "../components/Carasoul";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useAnimation } from "framer-motion";

const Home = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user, isLoading, successMessage } = useSelector(
    (state) => state.user
  );

  const { ref, inView } = useInView({ threshold: 0.2 });
  const animation = useAnimation();
  const secondAnimation = useAnimation();

  const getUser = async () => {
    dispatch(checkUser());
  };

  useEffect(() => {
    getUser();
  }, []);

  // useEffect(() => {
  //   if (successMessage) {
  //     toast.success(successMessage);
  //     navigate("/courses");
  //     dispatch(resetSuccessMessage());
  //   }
  // }, [successMessage]);

  useEffect(() => {
    console.log(inView);
    if (inView) {
      animation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
      secondAnimation.start({
        x: 0,
        transition: { type: "spring", duration: 1, bounce: 0.3 },
      });
    }
    if (!inView) {
      animation.start({ x: -100 });
      secondAnimation.start({ x: -100 });
    }
  }, [inView]);

  if (isLoading) {
    return <ClipLoader />;
  }

  // return user ? <h1>{user.user.name}</h1> : "";
  return (
    <div>
      <div className="z-0 rounded-div my-2 md:flex justify-between items-center">
        <motion.div ref={ref} animate={animation}>
          <h1 className="font-poppy text-secondary font-[700] text-4xl my-4">
            Launch Your Dev Career With{" "}
            <span className="text-accent">Project-Based</span> Coaching
          </h1>
          <h3 className="font-poppy text-xl my-4">
            Showcase your skills with practical development experience and land
            the coding career of your dreams
          </h3>
          <button className="button">Explore Courses</button>
        </motion.div>

        <motion.div ref={ref} animate={secondAnimation} className="my-2 ">
          <Player
            className="bg-red-500 rounded-xl"
            src={lottieHero}
            loop
            autoplay
          />
        </motion.div>
      </div>
      <div>
        <Carasoul />
      </div>

      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus a, at
        consectetur voluptas blanditiis sunt corporis eius, officia pariatur
        omnis, esse vel ipsam magnam reprehenderit laboriosam laborum
        praesentium! Est saepe illo soluta, nesciunt similique magni nam
        voluptatibus dolorum quos, ullam distinctio commodi fuga, velit
        voluptate reiciendis ad ex doloribus id! Deleniti sed in blanditiis
        maiores, fugiat officia nam sequi iste saepe consequatur laboriosam
        dignissimos magnam. Incidunt expedita ipsum magni reprehenderit tempora
        fugiat corrupti voluptates porro harum quaerat tenetur, obcaecati est
        fuga sed, fugit ex? Placeat repellat vel amet possimus facilis commodi
        impedit nostrum modi velit dicta! Libero a blanditiis sapiente.
      </div>
      <div>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Delectus a, at
        consectetur voluptas blanditiis sunt corporis eius, officia pariatur
        omnis, esse vel ipsam magnam reprehenderit laboriosam laborum
        praesentium! Est saepe illo soluta, nesciunt similique magni nam
        voluptatibus dolorum quos, ullam distinctio commodi fuga, velit
        voluptate reiciendis ad ex doloribus id! Deleniti sed in blanditiis
        maiores, fugiat officia nam sequi iste saepe consequatur laboriosam
        dignissimos magnam. Incidunt expedita ipsum magni reprehenderit tempora
        fugiat corrupti voluptates porro harum quaerat tenetur, obcaecati est
        fuga sed, fugit ex? Placeat repellat vel amet possimus facilis commodi
        impedit nostrum modi velit dicta! Libero a blanditiis sapiente.
      </div>
    </div>
  );
};

export default Home;
