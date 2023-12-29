// Import Images
import untadLogo from "../../assets/untadlogo.png";

const Education: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-700 shadow-md rounded-[10px] p-5 md:w-[888px] md:h-[470px] h-[450px] text-primaryBlack dark:text-white">
      <h2 className="md:text-4xl text-2xl md:text-left text-center font-bold text-primaryBlue dark:text-primaryPurple">
        Education
      </h2>
      <div className="flex md:flex-row flex-col justify-between md:items-center">
        <div className="flex items-center gap-5">
          <img
            src={untadLogo}
            alt="Untad Logo"
            className="md:w-16 w-14 m-auto md:my-5 my-2 rounded-full shadow-lg drop-shadow-lg"
          />
          <div className="md:text-left text-right ">
            <h3 className="md:text-3xl font-bold">Tadulako University</h3>
            <p className="font-medium md:text-base text-xs">
              Bachelor of Computer Science
            </p>
          </div>
        </div>
        <div className="font-medium text-right md:text-sm text-xs md:pb-0 pb-2">
          <p>Palu, Indonesia</p>
          <p>Excepted 05/2025</p>
        </div>
      </div>
      <hr className="border-primaryBlack" />
      <div className="my-5 flex flex-col gap-5 font-medium">
        <p className="font-medium md:text-lg text-xs md:leading-normal leading-5">
        Majoring in Information Technology who learns about Algorithms, Data Structures, Calculus, Web Fundamentals, Machine Learning, Android Fundamentals, Micro Services, and Application Programming Interfaces (API).
        </p>
        <ul>
          <li className="font-medium md:text-lg text-xs md:leading-normal leading-5">
            ⚪ Creativity Department - Himpunan Mahasiswa Informatika Universitas Tadulako
          </li>
          <li className="font-medium md:text-lg text-xs md:leading-normal leading-5">
            ⚪ Public Relation - Programming Tadulako University
          </li>
          <li className="font-medium md:text-lg text-xs md:leading-normal leading-5">
            ⚪ Mobile Development Learning Path - Bangkit 2023
          </li>
        </ul>
      </div>
    </section>
  );
};

export default Education;
