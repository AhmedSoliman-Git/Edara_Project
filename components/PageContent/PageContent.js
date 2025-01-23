import Lines from "./Lines/ssLines";
import ConstructionText from "./DiscoverMoreSec/ConstructionText";
import Idea from "./IdeasSec/Idea";
import Services from "./ServicesSec/Services";
import Benefits from './EradaBenefits/Benefits'
export default function PageContent() {
  return (
    <main className="overflow-hidden">
      <Lines />
      <ConstructionText />
      <Idea />
      <Services />
      <Benefits />
    </main>
  );
}
