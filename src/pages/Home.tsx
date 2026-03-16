import { useEffect, useRef } from "react";
import { useUpdateProjectDetails } from "../hooks/appHooks";
import Animate from "../utils/animations/Animate";
import { ABOUT_ME, NAME } from "../utils/AppConstants";
import { useAppContext } from "../utils/AppContext";
import DownwArrow from "../utils/DownArraow";
import ExpertiseCard from "../utils/ExpertiseCard";
import NavBar from "../utils/NavBar";
import BottomNav from "./homeutils/BottomNav";
import Experience from "./homeutils/Experience";
import Projects from "./homeutils/Projects";
import AchievementsSection from "./homeutils/AchievementsSection";
import CertificationsSection from "./homeutils/Certifications";
import SkillsSection from "./homeutils/Skills";

function Home() {
  const { updateProjectDetails } = useUpdateProjectDetails();

  const expertise = [
    {
      icon: "AI",
      desc: "Build intelligent systems using machine learning and deep learning models for prediction, automation, and decision making.",
      heading: "Artificial",
      headingContemt: "Intelligence",
    },
    {
      icon: "NLP",
      desc: "Experienced in NLP preprocessing, sentiment analysis, NER, summarization, and transformer-based models like BERT.",
      heading: "Natural Language",
      headingContemt: "Processing",
    },
    {
      icon: "ML",
      desc: "Develop ML models including Logistic Regression, SVM, Naive Bayes, Random Forest and optimize them using hyperparameter tuning.",
      heading: "Machine",
      headingContemt: "Learning",
    },
    {
      icon: "DATA",
      desc: "Analyze datasets using Pandas, NumPy and create interactive visualizations with Plotly and Streamlit dashboards.",
      heading: "Data",
      headingContemt: "Science",
    },
    {
      icon: "WEB",
      desc: "Develop AI powered web applications using Flask, Streamlit and modern frontend frameworks.",
      heading: "AI Web",
      headingContemt: "Applications",
    },
    {
      icon: "DEPLOY",
      desc: "Deploy AI and ML applications using GitHub, Vercel and cloud platforms with scalable architecture.",
      heading: "AI Model",
      headingContemt: "Deployment",
    },
  ];

  const { scrollView, dispatch } = useAppContext();
  const targetDivRef = useRef<HTMLDivElement>(null);
  const resumeRef = useRef<HTMLAnchorElement>(null);

  useEffect(() => {
    const temp = scrollView;
    if (targetDivRef.current) {
      targetDivRef.current.scrollIntoView({ behavior: "smooth" });
      dispatch({ type: "setScrollView", payload: undefined });
    }
    localStorage.setItem("selectedProject", "");
    dispatch({ type: "setScrollView", payload: temp });
  }, [scrollView, targetDivRef]);

  function handleHireMeClick() {
    if (resumeRef?.current) {
      (resumeRef as any).current.click();
    }
  }

  return (
    <div className="w-full h-full flex flex-col">

      {/* HERO SECTION WITH COVER IMAGE */}
      <div className="min-h-[100vh] flex flex-col bg-[url('/cover.png')] bg-cover bg-center bg-no-repeat relative">

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/50"></div>

        <NavBar />

        <div className="relative p-3 flex flex-col justify-between py-10 h-[85vh]">
          <div className="flex flex-col justify-center gap-3 mt-[25vh] lg:mt-[15vh] items-center">

            <Animate delay={450}>
              <h1 className="typewriter text-[40px] font-bold lg:text-[150px]">
                {NAME.toUpperCase()}
              </h1>
            </Animate>

            <Animate delay={600}>
              <p className="w-[70vw] text-xl text-center lg:text-2xl lg:-mt-10">
                {ABOUT_ME}
              </p>
            </Animate>

          </div>

          {/* RESUME */}
          <div className="flex justify-center w-full">

            <Animate delay={400}>
              <div
                onClick={handleHireMeClick}
                className="hover:lg:scale-110 hover:lg:bg-[#02ffff]/90 bg-[#02ffff] w-fit px-6 lg:px-12 lg:text-xl cursor-pointer py-2 lg:py-3 flex items-center rounded-full text-black"
              >
                Download Resume
              </div>
            </Animate>

            <a
              href="/resume.pdf"
              download={true}
              ref={resumeRef}
              className="hidden"
            >
              Resume
            </a>

          </div>

          {/* SCROLL */}
          <Animate delay={750}>
            <div
              className="w-full flex items-center justify-center"
              onClick={() => {
                dispatch({ type: "setScrollView", payload: "EXPERTISE" });
                setTimeout(() => {
                  dispatch({ type: "setScrollView", payload: undefined });
                }, 400);
              }}
            >
              <DownwArrow />
            </div>
          </Animate>

        </div>
      </div>

      {/* REST OF THE PAGE */}
      <div className="bg-black -mt-4 lg:-mt-0 w-full">

        <div
          ref={scrollView === "EXPERTISE" ? targetDivRef : null}
          className="mt-[20vh] font-bold w-full flex items-center justify-center text-4xl"
        >
          <Animate delay={250} type="slideLeft">
            <h1>My Expertise</h1>
          </Animate>
        </div>

        <div className="px-4 mt-[8vh]">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {expertise?.map((item, index) => (
              <ExpertiseCard
                key={index}
                icon={item.icon as never}
                heading={item.heading as never}
                headingContemt={item.headingContemt as never}
                desc={item.desc as never}
                delay={index * 100}
              />
            ))}
          </div>
        </div>

        <div ref={scrollView === "SKILLS" ? targetDivRef : null}>
          <SkillsSection />
        </div>

        <div className="pb-[5vh]">
          <Projects />
        </div>

        <div ref={scrollView === "ACHIEVEMENTS" ? targetDivRef : null}>
          <AchievementsSection />
        </div>

        <div ref={scrollView === "CERTIFICATIONS" ? targetDivRef : null}>
          <CertificationsSection />
        </div>

        <div ref={scrollView === "EXPERIENCE" ? targetDivRef : null}>
          <Experience />
        </div>

        <div ref={scrollView === "CONTACT" ? targetDivRef : null}>
          <BottomNav />
        </div>

      </div>
    </div>
  );
}

export default Home;