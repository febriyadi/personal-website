// Images About Page
const Kotlin = require("./assets/about/kotlin.png");
const jactpack = require("./assets/about/jetpack_compose.png");
const android = require("./assets/about/android_studio.png");
const dart = require("./assets/about/dart.png");
const git = require("./assets/about/git.png");
const firebase = require("./assets/about/firebase.png");
const js = require("./assets/about/js.png");
const flutter = require("./assets/about/flutter.png");
// Images Projects Page
const project1 = require("./assets/jactpack.png");
const project2 = require("./assets/story.png");
const project3 = require("./assets/stroko.png");

export const dataExperience = {
  datas: [
    {
      id: 0,
      company: "Bangkit Academy",
      date: "August 2023 - Present",
      title: "Mobile Development Learning Path",
      desc: "Build android applications that are relevant to current technology, collaboration between learning paths namely android, cloud computing, and machine learning.",
    },
    {
      id: 1,
      company: "IDCamp 2023 ",
      date: "August 2023 - November 2023",
      title: "Multi-platform App Developer",
      desc: "Learn and build multiplatform apps using Dart and Flutter",
    },
    {
      id: 2,
      company: "Hammer Code ",
      date: "October 2022 - Present",
      title: "Frontend Web Developer",
      desc: "Develop the frontend of web applications to ensure that the web will be a responsive user interface using React.js and Tailwind.CSS",
    },
      // {
      //   id: 3,
      //   company: "Bangkit Academy 2022",
      //   date: "February 2022 - July 2022",
      //   title: "Cloud Computing Learning Path",
      //   desc: "Learn Cloud Computing Fundamental using Google Cloud Platform, Softskills, and got friends from all over Indonesia",
      // },
  ],
};

export const dataSkills = {
  datas: [
    {
      id: 0,
      image_url: Kotlin,
      title: "Kotlin",
    },
    {
      id: 1,
      image_url: js,
      title: "Javascript",
    },
    {
      id: 2,
      image_url: jactpack,
      title: "Compose",
    },
    {
      id: 3,
      image_url: android,
      title: "Android",
    },
    {
      id: 4,
      image_url: git,
      title: "Git",
    },
    {
      id: 5,
      image_url: firebase,
      title: "Firebase",
    },
    {
      id: 5,
      image_url: dart,
      title: "Dart",
    },
    {
      id: 6,
      image_url: flutter,
      title: "Flutter",
    },
  ],
};

export const projectCards = {
  datas: [
    {
      id: 0,
      image_url: project1,
      project_name: "Travelog Sulteng",
      desc: "Develop a project that uses Jectpack Compose",
    },
    {
      id: 1,
      image_url: project2,
      project_name: "Stroy With API",
      desc: "Develop a project, integrating API, Camera, Maps and applying Android Architecture Model-View-ViewModel (MVVM).",
    },
    {
      id: 2,
      image_url: project3,
      project_name: "Stroko",
      desc: "Capstone Project Collaboration between learning path.",
    },
  ],
};
