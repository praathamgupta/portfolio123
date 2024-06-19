import { motion } from "framer-motion";

const Hero = () => {
  const handleDownloadResume = () => {
    // Add logic here to trigger the download of your PDF resume.
    // You may want to use a library like 'file-saver' or create an endpoint on your server to serve the PDF.
    // For now, we'll just simulate it by opening a new tab with a sample PDF file.
    const cvUrl = 'https://drive.google.com/file/d/1rAZtmyyqIqtV44VYzeCgTzfTPAjEDzLM/view?usp=sharing';
    window.open(cvUrl, '_blank');
  };

  return (
    <section className="relative w-full h-screen mx-auto overflow-hidden">
      <div className="absolute inset-0 flex flex-row items-center justify-center">
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          className="text-white text-center z-10 relative">
          <h1 className="text-6xl font-extrabold tracking-tight text-[#915EFF]">
            Hi, I'm <span className="text-[#F49D37]">Pratham</span>
          </h1>
          <p className="text-xl mt-4 text-gray-300">
           Competitive Programmer || Web Developer
            <br className="sm:block hidden" />
          </p>
          <motion.a
            onClick={handleDownloadResume}
            whileHover={{ scale: 1.05 }}
            className="mt-8 inline-block px-6 py-3 text-lg font-semibold rounded-full bg-[#F49D37] text-white hover:bg-opacity-80 transition duration-300 ease-in-out cursor-pointer">
            Download CV/Resume
          </motion.a>
        </motion.div>
      </div>
      {/* Creative Background */}
      <div className="absolute inset-0 z-0">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 2, delay: 0.5 }}
          className="absolute inset-0 bg-gradient-to-b from-[#1E1E2B] to-black animate-gradient"></motion.div>
      </div>
      {/* Bouncing Arrow */}
      <div className="absolute bottom-0 w-full text-center pb-8">
        <a href="#about">
          <motion.div
            initial={{ y: 0 }}
            animate={{ y: [0, 20, 0] }}
            transition={{ duration: 1.5, repeat: Infinity, repeatType: "loop" }}
            className="w-3 h-3 rounded-full bg-[#915EFF] inline-block mx-auto mb-1"></motion.div>
        </a>
      </div>
    </section>
  );
};

export default Hero;
