import { Feature } from "./Feature";

const features = [
  {
    title: "Integration Ecosystem",
    description:
      "Enhance your productivity by connecting with your tools, keeping your essentials in one place.",
  },
  {
    title: "Goal Setting and Tracking",
    description:
      "Define and track your goals, breaking down objectives into achievable tasks to keep your targets in sight.",
  },
  {
    title: "Secure Data Encryption",
    description:
      "With end-to-end encryption, your data is securely stored and protected from unauthorized access.",
  },
];

export const Features = () => {
  return (
    <div className="bg-black text-white py-[72px] sm:py-24 ">
      <div className="container">
        <h2 className=" text-4xl font-bold sm:text-6xl text-center">
          Everything you need
        </h2>
        <div className="max-w-xl mx-auto">
          <p className="text-xl mt-6 tracking-tighter text-center text-white text-opacity-70">
            Enjoy customizable lists, team work tools, and smart tracking all in
            one place. Set tasks, get reminders, and see your progress simply
            and quickly.
          </p>
        </div>
        <div className="py-2 flex flex-col mt-16 gap-4 sm:flex-row flex-1">
          {features.map(({ title, description }) => (
           <Feature title={title} description={description} key={title}/>
          ))}
        </div>
      </div>
    </div>
  );
};
