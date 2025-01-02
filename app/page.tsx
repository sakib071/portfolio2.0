import ArticlePage from "./articles/page";
import HomePage from "./home/page";
import ProjectsPage from "./projects/page";
import WorkPage from "./work/page";

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
