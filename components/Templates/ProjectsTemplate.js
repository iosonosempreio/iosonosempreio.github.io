import { Col, Container, Row } from "react-bootstrap";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";

export default function ProjectTemplate({ data }) {
	return (
		<>
			<Container>
				<Row>
					<Col>
						{data.map((d) => (
							<div key={d.id}>
								<div style={{ position: "relative", width: "100%", height: 0, paddingBottom: "56%" }}>
									<ExportedImage
										// src="images/projects/data-wikilovesmonumens-it/overview.png"
										src={"images/projects/data-wikilovesmonumens-it/"+d.images[0]}
										alt="Large Image"
										layout="fill"
										objectFit="cover"
										useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
										className=""
									/>
								</div>
								<Link href={"projects/"+d.id}>{d.title}</Link>
							</div>
						))}
					</Col>
				</Row>
			</Container>
		</>
	);
}
