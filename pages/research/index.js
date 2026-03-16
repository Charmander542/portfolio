import { RESEARCH } from "../../constants";
import ProgressIndicator from "@/components/ProgressIndicator/ProgressIndicator";
import Nav from "@/components/Header/Nav";
import Research from "@/components/Research/Research";

export default function ResearchIndex() {
  return (
    <div className="min-h-screen bg-gray-dark-5">
      <Nav />
      <ProgressIndicator />
      <main className="pt-24">
        <Research />
      </main>
    </div>
  );
}

