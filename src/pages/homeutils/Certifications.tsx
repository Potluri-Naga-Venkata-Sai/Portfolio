import { useEffect, useRef } from "react";
import {
  Award,
  CheckCircle,
  BookOpen,
  GraduationCap,
  Sparkles,
  ChevronRight,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const certifications = [
  {
    id: 1,
    title: "AI-Powered NLP",
    issuer: "Algo Tutor Academy",
    description:
      "Advanced Natural Language Processing including transformers, BERT and GPT.",
    link: "https://drive.google.com/file/d/1V1HVTE3zrIMYQIKZXIZdO76EbUbc242a/view",
    skills: ["NLP", "Transformers", "BERT", "GPT"],
    gradient: "from-cyan-500 to-blue-600",
    icon: Sparkles,
    year: "2025",
  },
  {
    id: 2,
    title: "Advanced Data Science & Generative AI",
    issuer: "Algo Tutor Academy",
    description:
      "Training in data science and generative AI including LLMs.",
    link: "https://drive.google.com/file/d/1otyST5U66PkFttnxZDMoGQ7wi-T4U4wu/view",
    skills: ["Data Science", "GenAI", "LLMs", "ML"],
    gradient: "from-purple-500 to-pink-600",
    icon: GraduationCap,
    year: "2025",
  },
  {
    id: 3,
    title: "SQL (Basic)",
    issuer: "HackerRank",
    description:
      "Foundational SQL including queries, joins and aggregations.",
    link: "https://www.hackerrank.com/certificates/4621d25512c0",
    skills: ["SQL", "Queries", "Joins", "Database"],
    gradient: "from-emerald-500 to-teal-600",
    icon: Award,
    year: "2024",
  },
  {
    id: 4,
    title: "Mastering in C: Basic to Beyond",
    issuer: "CSE Pathsha",
    description:
      "Complete C programming including pointers and memory management.",
    link: "https://drive.google.com/file/d/17ycX1pjFxjqAMOJ-VjUvlFGSiyQP9h4u/view",
    skills: ["C", "Pointers", "Memory", "DSA"],
    gradient: "from-orange-500 to-red-600",
    icon: BookOpen,
    year: "2024",
  },
  {
    id: 5,
    title: "Introduction to Python",
    issuer: "Programming Course",
    description:
      "Python fundamentals including data structures and OOP.",
    link: "https://drive.google.com/file/d/1zaF6bS78tecpmGl7vj-j4YwLOfECXofy/view",
    skills: ["Python", "OOP", "Data Structures"],
    gradient: "from-yellow-500 to-amber-600",
    icon: Award,
    year: "2024",
  },
  {
    id: 6,
    title: "Responsive Web Design",
    issuer: "freeCodeCamp",
    description:
      "Modern responsive design using HTML, CSS, Flexbox and Grid.",
    link: "https://www.freecodecamp.org/certification/nagavenkatasaipotluri/responsive-web-design",
    skills: ["HTML5", "CSS3", "Flexbox", "Grid"],
    gradient: "from-indigo-500 to-violet-600",
    icon: CheckCircle,
    year: "2024",
  },
];

function CertificationsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".cert-card",
        { y: 60, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.7,
          stagger: 0.15,
          scrollTrigger: {
            trigger: ".certifications-grid",
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section
      ref={sectionRef}
      id="certifications"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">

        <h2 className="text-5xl font-bold mb-4">
          Professional <span className="text-cyan-400">Certifications</span>
        </h2>

        <p className="text-gray-400">
          Verified credentials demonstrating expertise in AI and programming
        </p>

      </div>

      <div className="certifications-grid grid md:grid-cols-2 lg:grid-cols-3 gap-6">

        {certifications.map((cert) => (
          <div
            key={cert.id}
            className="cert-card group rounded-2xl border border-gray-700 p-6 bg-black/40 hover:scale-[1.03] transition"
          >
            <div className="flex justify-between mb-4">

              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center bg-gradient-to-r ${cert.gradient}`}
              >
                <cert.icon className="text-white" size={22} />
              </div>

              <span className="text-xs text-gray-400">{cert.year}</span>

            </div>

            <h3 className="text-lg font-bold mb-1">{cert.title}</h3>

            <p
              className={`text-sm font-medium bg-gradient-to-r ${cert.gradient} bg-clip-text text-transparent`}
            >
              {cert.issuer}
            </p>

            <p className="text-sm text-gray-400 mt-2">{cert.description}</p>

            <div className="flex flex-wrap gap-1.5 mt-4">

              {cert.skills.map((skill) => (
                <span
                  key={skill}
                  className="px-2 py-0.5 text-xs rounded-full bg-gray-800 text-gray-300"
                >
                  {skill}
                </span>
              ))}

            </div>

            <a
              href={cert.link}
              target="_blank"
              className="flex items-center justify-between mt-5 border border-gray-600 py-2 px-3 rounded-lg hover:bg-gray-800 transition"
            >
              <span className="flex items-center gap-2">
                <CheckCircle size={16} className="text-green-400" />
                View Certificate
              </span>

              <ChevronRight size={16} />
            </a>

          </div>
        ))}
      </div>
    </section>
  );
}

export default CertificationsSection;