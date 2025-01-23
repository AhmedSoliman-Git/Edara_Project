import Lines from "./Lines/ssLines";
import ConstructionText from "./DiscoverMoreSec/ConstructionText";
import Idea from "./IdeasSec/Idea";
import Services from "./ServicesSec/Services";
export default function PageContent() {
  return (
    <section className="overflow-hidden">
      <Lines />
      <ConstructionText />
      <Idea />
      <Services />
    </section>
  );
}
