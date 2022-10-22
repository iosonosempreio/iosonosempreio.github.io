import ProjectTemplate from "../../components/Templates/ProjectTemplate";
import { getProjectsIds, getSingleProjectData } from "../../utils/projects-data";

export default function Project({data}) {
  return <ProjectTemplate data={data}/>
}

export async function getStaticPaths() {
  const paths = getProjectsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = getSingleProjectData(params.id);
  return {
    props: {
      data,
    },
  };
}