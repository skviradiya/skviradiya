import { projects } from "@/data/projects";
import ProjectPage from "./ProjectPage";

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.id, // Replace `id` with the actual key used for the slug
  }));
}
interface ProjectPageProps {
  params: Promise<{
    slug: string; // slug is the dynamic parameter from the URL
  }>;
}

export default function Page({ params }: ProjectPageProps) {
  return <ProjectPage params={params} />;
}
