import { useEffect, useRef } from "react";
import {
  Trophy,
  Medal,
  Code,
  Award,
  ExternalLink,
  Flame,
  Target,
  Zap,
  Star,
} from "lucide-react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const achievements = [
  {
    id: 1,
    title: "LeetCode 50 Days Badge",
    subtitle: "Consistent Problem Solver",
    description:
      "Achieved the 50 Days coding badge on LeetCode through consistent daily problem solving.",
    icon: Flame,
    platform: "LeetCode",
    link: "https://leetcode.com/u/Naga_Venkata_Sai/",
    gradient: "from-amber-500 to-orange-600",
    stats: { problems: "200+", streak: "50 days", rank: "Top 15%" },
  },
  {
    id: 2,
    title: "Gold Badge - Python",
    subtitle: "Expert Level Proficiency",
    description:
      "Earned Gold Badge in Python programming demonstrating strong programming skills.",
    icon: Medal,
    platform: "HackerRank",
    link: "https://www.hackerrank.com/profile/nagavenkatasaip1",
    gradient: "from-yellow-400 to-amber-500",
    stats: { stars: "5/5", level: "Gold", percentile: "Top 5%" },
  },
  {
    id: 3,
    title: "Gold Badge - Problem Solving",
    subtitle: "Algorithm Expert",
    description:
      "Gold badge in Problem Solving demonstrating strong algorithmic thinking.",
    icon: Target,
    platform: "HackerRank",
    link: "https://www.hackerrank.com/profile/nagavenkatasaip1",
    gradient: "from-emerald-400 to-teal-500",
    stats: { stars: "5/5", level: "Gold", challenges: "100+" },
  },
  {
    id: 4,
    title: "Gold Badge - C++",
    subtitle: "Systems Programming Expert",
    description:
      "Earned Gold Badge in C++ demonstrating proficiency in data structures and OOP.",
    icon: Code,
    platform: "HackerRank",
    link: "https://www.hackerrank.com/profile/nagavenkatasaip1",
    gradient: "from-blue-400 to-indigo-500",
    stats: { stars: "5/5", level: "Gold", percentile: "Top 5%" },
  },
];

function AchievementsSection() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".achievement-card",
        { y: 80, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.8,
          stagger: 0.2,
          scrollTrigger: {
            trigger: ".achievements-grid",
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
      id="achievements"
      className="py-24 px-6 max-w-7xl mx-auto"
    >
      <div className="text-center mb-16">
        <h2 className="text-5xl font-bold mb-4">
          Awards & <span className="text-yellow-400">Achievements</span>
        </h2>

        <p className="text-gray-400">
          Recognized excellence in competitive programming
        </p>
      </div>

      <div className="achievements-grid grid md:grid-cols-2 gap-6">
        {achievements.map((a) => (
          <div
            key={a.id}
            className="achievement-card group rounded-2xl border border-gray-700 p-6 bg-black/40 hover:scale-[1.02] transition"
          >
            <div className="flex items-start gap-4">
              <div
                className={`w-14 h-14 rounded-xl flex items-center justify-center bg-gradient-to-r ${a.gradient}`}
              >
                <a.icon className="text-white" size={28} />
              </div>

              <div>
                <span className="text-xs text-gray-400">{a.platform}</span>

                <h3 className="text-xl font-bold">{a.title}</h3>

                <p className="text-sm text-gray-400">{a.subtitle}</p>
              </div>
            </div>

            <p className="text-gray-400 text-sm mt-4">{a.description}</p>

            <div className="grid grid-cols-3 gap-2 mt-4">
              {Object.entries(a.stats).map(([key, value]) => (
                <div
                  key={key}
                  className="text-center p-2 rounded-lg bg-gray-900"
                >
                  <div className="text-sm font-bold text-yellow-400">
                    {value}
                  </div>
                  <div className="text-xs text-gray-400 capitalize">
                    {key}
                  </div>
                </div>
              ))}
            </div>

            <a
              href={a.link}
              target="_blank"
              className="flex items-center justify-center gap-2 mt-5 border border-gray-600 py-2 rounded-lg hover:bg-gray-800 transition"
            >
              View Profile <ExternalLink size={16} />
            </a>
          </div>
        ))}
      </div>

      <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Badges", value: "4+", icon: Award },
          { label: "Problems Solved", value: "200+", icon: Code },
          { label: "Platforms", value: "3+", icon: Zap },
          { label: "Ranking", value: "Top 10%", icon: Star },
        ].map((stat) => (
          <div
            key={stat.label}
            className="text-center p-4 rounded-xl border border-gray-700"
          >
            <stat.icon className="mx-auto mb-2 text-yellow-400" />
            <div className="text-2xl font-bold">{stat.value}</div>
            <div className="text-xs text-gray-400">{stat.label}</div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default AchievementsSection;