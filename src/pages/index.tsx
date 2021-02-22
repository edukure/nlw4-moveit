
import ExperienceBar from "../components/ExperienceBar";

export default function Home() {
  return (
    <div className="flex flex-col items-center">
      <h1>Hello World</h1>

      <ExperienceBar currentExp={200} maxExp={1000} />
    </div>
  );
}
