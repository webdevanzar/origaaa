import AnimatedBlobBackground from "@/components/shared/AnimatedBlobBackground";
import { FeaturedWorks } from "@/components/works/featuredworks";
import { WorksBanner } from "@/components/works/worksBanner";
import { fetchProjects } from "@/utils/fetchprojects";

const WorksPage = async () => {
  const projects = await fetchProjects();

  return (
    <div className="overflow-x-hidden">
      <WorksBanner />

      <AnimatedBlobBackground uniqueId="featured work">
        <FeaturedWorks projects={projects} />
      </AnimatedBlobBackground>
    </div>
  );
};

export default WorksPage;
