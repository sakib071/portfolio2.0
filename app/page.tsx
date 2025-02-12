import ArticlePage from "./articles/page";
import HomePage from "./profile/page";
import ProjectsPage from "./projects/page";
import WorkPage from "./work-experience/page";

export default function Home() {
  return (
    <div className="">
      <HomePage />
      <ProjectsPage />
      <WorkPage />
      <ArticlePage />
    </div>
  );
}
