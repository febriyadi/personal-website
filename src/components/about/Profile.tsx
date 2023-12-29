// Import Images
import profilePhoto from "../../assets/profilePhoto.png";

const Profile: React.FC = () => {
  return (
    <section className="bg-white dark:bg-slate-700 shadow-md rounded-[10px] p-5 md:w-[888px] md:h-[470px] h-[450px]">
      <div className="flex flex-col md:text-left text-center md:gap-5 gap-3">
        <h2 className="md:text-4xl text-2xl font-bold text-primaryBlue dark:text-primaryPurple">
          Profile
        </h2>
        <p className="font-medium md:text-lg text-xs md:leading-normal leading-5 text-primaryBlack dark:text-white">
        I am a student of the Informatics Engineering Study Program at Tadulako University, currently in Semester 5. My main focus lies in mobile development, front-end web using JavaScript, and UI/UX design with Figma. Currently, I am joining the Self-Study program at Bangkit Academy, organized by Google, GoTo, & Traveloka, as a Mobile Development Cohort.
        </p>
      </div>
      <img
      src={profilePhoto}alt="profile photo"
      className="md:w-56 w-32 m-auto mt-8 rounded-full shadow-lg drop-shadow-lg border-4 border-primaryGreen"
/>

    </section>
  );
};

export default Profile;
