import { motion } from 'framer-motion';
const ServiceCard = ({ icon, image, title, description }) => {
   return (
      <motion.div
         initial={{ y: 100, opacity: 0 }}
         whileInView={{ y: 0, opacity: 1 }}
         transition={{ ease: "easeOut", duration: 1 }}
         viewport={{ once: true }}
         className="mt-12 md:mt-16 bg-serviceCardBackground border-[1px] sm:border-2 border-golden text-white rounded-lg w-40 md:w-72 md:h-56 h-44 shadow-md flex flex-col justify-center items-center">
         <div className="w-10/12 bg-serviceCardBackground border-2 rounded-lg border-golden flex items-center space-x-3 mt-[-50px] md:mt-[-70px]">
            <div className="flex justify-center items-center p-3 ml-2 ">
               <img src={icon} alt="icon" />
            </div>
            <div>
               <img src={image} alt="image" />
            </div>
         </div>
         <div className="px-4 py-2 md:p-6 text-center">
            <h3 className="text-sm md:text-base pb-0 sm:pb-3 font-bold">{title}</h3>
            <p className="text-[11px] md:text-sm text-gray-300 font-semibold">{description}</p>
         </div>
      </motion.div>
   );
};


export default ServiceCard;