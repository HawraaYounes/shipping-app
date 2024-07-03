import React, { useState } from "react";
import Modal from "../components/Modal";
import Input from "../components/Input";
import Button from "../components/Button";
import AuthService from "../services/AuthService";
import { useNavigate } from "react-router-dom";
import styles from "../style";
import { discount, robot } from "../assets";
// import GetStarted from "./GetStarted";

const Hero = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalContent, setModalContent] = useState(null);
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleOpenModal = (content) => {
    setModalContent(content);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setUsername("");
    setEmail("");
    setPassword("");
    setError("");
  };

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.login(email, password);
      localStorage.setItem("token", response.token); // Storing the token
      navigate("/dashboard");
      handleCloseModal();
    } catch (error) {
      setError("Invalid email or password");
      console.error("Login Error:", error);
    }
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    try {
      const response = await AuthService.register(username, email, password);
      localStorage.setItem("token", response.token); // Storing the token
      navigate("/dashboard");
      handleCloseModal();
    } catch (error) {
      setError("Registration Error");
      console.error("Register Error:", error);
    }
  };

  const renderForm = () => (
    <form onSubmit={modalContent === "login" ? handleLogin : handleRegister}>
      {error && <p style={{ color: "red" }}>{error}</p>}
      {modalContent === "register" && (
        <Input
          type="text"
          placeholder="Username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      )}
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <Input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      <Button type="submit">
        {modalContent === "login" ? "Login" : "Register"}
      </Button>
    </form>
  );

  return (
    <section>
     
        <div
          id="home"
          className={`flex md:flex-row flex-col ${styles.paddingY}`}
        >
          <div
            className={`flex-1 ${styles.flexStart} flex-col xl:px-0 sm:px-16 `}
          >
            <div className="flex flex-row justify-between items-center w-full">
              <h1 className="flex-1 font-poppins font-semibold ss:text-[72px] text-[52px] text-white ss:leading-[100.8px] leading-[75px]">
                Fast Shipping  <br className="sm:block hidden" />{" "}
                <span className="text-gradient"> With Quality</span>{" "}
              </h1>
              {/* <div className="ss:flex hidden md:mr-4 mr-0">
            <GetStarted />
          </div> */}
            </div>

            <h1 className="font-poppins font-semibold ss:text-[68px] text-[52px] text-white ss:leading-[100.8px] leading-[75px] w-full">
              Service.
            </h1>
            <p className={`${styles.paragraph} max-w-[470px] mt-5`}>
              Experience top-notch shipping solutions tailored to meet your
              needs. Join us to enjoy reliable, efficient, and secure shipping
              services with unmatched customer support.
            </p>
          </div>

          <div
            className={`flex-1 flex ${styles.flexCenter} md:my-0 my-10 relative`}
          >
            <img
              src={robot}
              alt="billing"
              className="w-[100%] h-[100%] relative z-[5]"
            />

            {/* gradient start */}
            <div className="absolute z-[0] w-[40%] h-[35%] top-0 pink__gradient" />
            <div className="absolute z-[1] w-[80%] h-[80%] rounded-full white__gradient bottom-40" />
            <div className="absolute z-[0] w-[50%] h-[50%] right-20 bottom-20 blue__gradient" />
            {/* gradient end */}
          </div>


        </div>
        {/* ------------------------------------------------------------ */}
        <div className={`flex md:flex-row flex-col ${styles.paddingY} xl:px-0 sm:px-16 px-6 `}>
        <Button onClick={() => handleOpenModal("login")}>Login</Button>
        <Button onClick={() => handleOpenModal("register")}>Register</Button>
        <Modal
          isOpen={isModalOpen}
          onClose={handleCloseModal}
          title={modalContent === "login" ? "Login" : "Register"}
          actions={<Button onClick={handleCloseModal}>Close</Button>}
        >
          {renderForm()}
        </Modal>
     </div>
    </section>
  );
};

export default Hero;
