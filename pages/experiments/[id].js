import PostTemplate from "../../components/Templates/PostTemplate";
import { getExperimentsIds, getSingleExperimentData } from "../../utils/experiments-data";

export default function Project({data}) {
  return <PostTemplate data={data}/>
}

export async function getStaticPaths() {
  const paths = getExperimentsIds();
  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const data = getSingleExperimentData(params.id);
  return {
    props: {
      data,
    },
  };
}