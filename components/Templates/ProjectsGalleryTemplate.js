import { Col, Container, Row } from "react-bootstrap";
import ExportedImage from "next-image-export-optimizer";
import Link from "next/link";
import MainTemplate from "./MainTemplate";
import classNames from "classnames";

export default function ProjectsGalleryTemplate({ data }) {
	return (
		<MainTemplate>
			<Container>
				<Row>
					{data.map((d) => (
						<Col md="6" key={d.id} className={classNames("mb-4")}>
							<Link href={"/projects/" + d.id}>
								<div
									style={{ position: "relative", width: "100%", height: 0, paddingBottom: "56%", cursor: "pointer" }}
									className={classNames("zoomableImage")}
								>
									<ExportedImage
										src={"images/projects/" + d.id + "/" + d.images[0]}
										alt="Large Image"
										layout="fill"
										width={d.images[0].width}
										height={d.images[0].height}
										objectFit="cover"
										useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
										className=""
									/>
								</div>
							</Link>
						</Col>
					))}
					<p className="mt-3">
						You can browse other projects at my profile page at{" "}
						<a href="https://densitydesign.org/person/tommaso-elli/" target="_blank" rel="noreferrer">
							densitydesign.org
						</a>{" "}
						or my (old) <a href="https://www.behance.net/tommasoelli" target="_blank" rel="noreferrer">Behance profile</a>.
					</p>
				</Row>
			</Container>
		</MainTemplate>
	);
}
