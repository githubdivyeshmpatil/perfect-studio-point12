import React, { useEffect } from "react";
import Navbar from "../Header/Navbar";
import AllBg from "../background/AllBg";
import AOS from "aos";
import "aos/dist/aos.css";
import BackToTopButton from "../Components/BackToTopButton";

function Bookung_contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  useEffect(() => {
    AOS.init({
      duration: 1000,
      easing: "ease-in-out",
      once: true,
    });
  }, []);
  return (
    <>
      <Navbar />
      <AllBg hed="Contact" title="home" main="/ contact" />
      <div className="contact-container">
        <div data-aos="fade-up" className="contact-card">
          <h3 data-aos="zoom-in" className="address-header">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M45.7353 35.0564C45.026 34.6668 44.1354 34.9259 43.7461 35.6349C43.3565 36.344 43.6155 37.2346 44.3246 37.624C46.0695 38.5826 47.0703 39.6453 47.0703 40.5397C47.0703 41.6335 45.5205 43.3288 41.1706 44.8066C36.8732 46.2668 31.1304 47.0708 25 47.0708C18.8696 47.0708 13.1268 46.2668 8.82939 44.8066C4.47949 43.3289 2.92969 41.6335 2.92969 40.5397C2.92969 39.6453 3.93047 38.5826 5.67539 37.6239C6.38447 37.2345 6.64346 36.3439 6.25391 35.6348C5.86436 34.9258 4.97402 34.6667 4.26475 35.0563C2.31924 36.1251 0 37.944 0 40.5397C0 42.5293 1.36836 45.366 7.88691 47.5807C12.4799 49.1411 18.5574 50.0005 25 50.0005C31.4426 50.0005 37.5201 49.1411 42.1131 47.5807C48.6316 45.366 50 42.5293 50 40.5397C50 37.944 47.6808 36.1251 45.7353 35.0564Z"
                fill="#4b98cb"
              />
              <path
                d="M13.9396 42.6887C16.9133 43.5287 20.8409 43.9914 24.999 43.9914C29.1571 43.9914 33.0848 43.5288 36.0584 42.6887C39.6964 41.661 41.541 40.1733 41.541 38.2673C41.541 36.3611 39.6964 34.8736 36.0584 33.846C35.2508 33.6179 34.3725 33.4178 33.4387 33.2471C32.914 34.1529 32.3827 35.0549 31.8446 35.9529C32.8782 36.108 33.8486 36.2981 34.7299 36.5227C37.4072 37.2046 38.3854 37.9723 38.5864 38.2674C38.3853 38.5626 37.4073 39.3303 34.73 40.0121C32.1959 40.6575 28.9355 41.0257 25.5017 41.0586C25.3344 41.0712 25.1667 41.0776 24.999 41.0778C24.8302 41.0778 24.6627 41.0709 24.4963 41.0586C21.0624 41.0257 17.8021 40.6576 15.268 40.0121C12.5906 39.3303 11.6126 38.5625 11.4115 38.2674C11.6126 37.9723 12.5907 37.2046 15.2681 36.5227C16.1493 36.2982 17.1197 36.108 18.1534 35.9529C17.5979 35.0252 17.0665 34.1231 16.5594 33.2471C15.6256 33.4179 14.7472 33.6179 13.9396 33.846C10.3017 34.8736 8.45703 36.3612 8.45703 38.2673C8.45703 40.1733 10.3017 41.6609 13.9396 42.6887Z"
                fill="#4b98cb"
              />
              <path
                d="M25 38.1479C26.304 38.1479 27.4885 37.4834 28.1688 36.3704C32.9354 28.5719 38.6172 18.2939 38.6172 13.6171C38.6172 6.10859 32.5086 0 25 0C17.4914 0 11.3828 6.10859 11.3828 13.6171C11.3828 18.2939 17.0647 28.5719 21.8313 36.3704C22.5115 37.4834 23.6961 38.1479 25 38.1479ZM19.5267 12.6821C19.5267 9.66426 21.982 7.20898 25 7.20898C28.018 7.20898 30.4733 9.66426 30.4733 12.6821C30.4733 15.7001 28.018 18.1554 25 18.1554C21.982 18.1554 19.5267 15.7002 19.5267 12.6821Z"
                fill="#4b98cb"
              />
            </svg>
          </h3>
          <h6 id="em">Email Us</h6>
          <p>
            Shop no 107, shreeji arcade, Aas Pass Rd, Patel Nagar, Khodiyar
            Nagar, char rasta, Godadara, Surat, Gujarat 395010
          </p>
        </div>
        <div data-aos="fade-up" className="contact-card">
          <h3 data-aos="zoom-in" className="address-header">
            <svg
              width="50"
              height="50"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M12 13.5l-8-5h16l-8 5z" fill="#738ea5" />
              <path
                d="M22 4H2c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h20c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 16H2V8l10 6 10-6v12z"
                fill="#4b98cb"
              />
            </svg>
          </h3>
          <h6 id="em">Email Us</h6>
          <p>sunilpatil76148@gmail.com</p>
        </div>
        <div data-aos="fade-up" className="contact-card">
          <h3 data-aos="zoom-in" className="address-header">
            <svg
              width="50"
              height="50"
              viewBox="0 0 50 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M48.9161 38.1429C47.3554 36.8339 38.2018 31.0375 36.6804 31.3036C35.9661 31.4304 35.4196 32.0393 33.9571 33.7839C33.2808 34.6427 32.538 35.4469 31.7357 36.1893C30.2657 35.8342 28.8427 35.3067 27.4964 34.6179C22.2166 32.0473 17.9511 27.7806 15.3821 22.5C14.6933 21.1537 14.1658 19.7307 13.8107 18.2607C14.5531 17.4584 15.3573 16.7156 16.2161 16.0393C17.9589 14.5768 18.5696 14.0339 18.6964 13.3161C18.9625 11.7911 13.1607 2.64107 11.8571 1.08036C11.3107 0.433929 10.8143 0 10.1786 0C8.33571 0 0 10.3071 0 11.6429C0 11.7518 0.178571 22.4821 13.7304 36.2696C27.5179 49.8214 38.2482 50 38.3571 50C39.6929 50 50 41.6643 50 39.8214C50 39.1857 49.5661 38.6893 48.9161 38.1429ZM37.5 23.2143H41.0714C41.0672 19.4268 39.5607 15.7956 36.8825 13.1175C34.2044 10.4393 30.5732 8.93283 26.7857 8.92857V12.5C29.6264 12.5028 32.35 13.6326 34.3587 15.6413C36.3674 17.65 37.4972 20.3736 37.5 23.2143Z"
                fill="#4b98cb"
              />
            </svg>
          </h3>
          <h6 id="em">Call Now</h6>
          <p>9075483028</p>
        </div>
      </div>
      {/* ///map------------------------section--------------------------- */}
      <div className="flex flex-col md:flex-row h-full">
        {/* Left Column: Full Screen Map */}
        <div className="md:w-2/3 w-full h-[60vh]">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3536.5420795493947!2d72.8720184!3d21.1668774!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be04f691c455021%3A0x402914344f5ad2c4!2sPerfect%20studio%20point!5e1!3m2!1sen!2sin!4v1728980345545!5m2!1sen!2sin"
            className="w-full h-full"
            allowFullScreen=""
            loading="lazy"
          />
        </div>

        {/* Right Column: Form */}
        <div className="md:w-1/3 w-full bg-gray-100 p-6">
          <h2 className="text-2xl font-bold mb-4">Ask a Question</h2>
          <form>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="text"
                id="name"
                placeholder="Your Name"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 border border-gray-300 rounded"
                type="email"
                id="email"
                placeholder="Your Email"
              />
            </div>

            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                htmlFor="question"
              >
                Question
              </label>
              <textarea
                className="w-full px-3 py-2 border border-gray-300 rounded"
                id="question"
                placeholder="Your Question"
              />
            </div>

            <button className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600">
              Submit
            </button>
          </form>
        </div>
      </div>
      <BackToTopButton />
    </>
  );
}

export default Bookung_contact;

