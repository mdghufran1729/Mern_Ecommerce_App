import React from "react";
import Layout from "../components/Layout/Layout";

const About = () => {
  return (
    <Layout>
      <div className="row contactus">
        <div className="col-md-6">
          <img
            src="images/about.jpeg"
            alt="contactus"
            style={{ width: "100%" }}
          />
        </div>
        <div className="col-md-4">
          <h1 className="bg-darkp-2 text-white text-center">CONTACT US</h1>
          <p className="text-justify mt-2">
            Any query and info about product feel free to call anytime we 24x7
            availabe lorem ipsum jkk j khbhbh hjuhj hjhj hjjkkjkjjkkjg uiuii
            uiui uio ioo ioio jkj ioio jkjjkjkkj opopopop opoopp popoojuhhj
            tty7yy
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default About;
