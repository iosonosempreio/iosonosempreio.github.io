import { ProjectsGalleryTemplate } from "../components/Templates";
import { getProjectsData } from "../utils/projects-data";

export default function Projects({ projectsData }) {
	return (
		<>
			<ProjectsGalleryTemplate data={projectsData} />
		</>
	);
}

export async function getStaticProps() {
	const projectsData = getProjectsData();
	return {
		props: {
			projectsData,
		},
	};
}
