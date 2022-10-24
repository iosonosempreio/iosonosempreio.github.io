import { Col, Container, Row } from "react-bootstrap";
import ExportedImage from "next-image-export-optimizer";
import ReactMarkdown from "react-markdown";
import MainTempate from "./MainTemplate";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";
import classNames from "classnames";

export default function ProjectTemplate({ data }) {
	return (
		<MainTempate>
			<Container>
				<Row>
					<Col md="8">
						<Row>
							{data.images.map((d, i) => (
								<Col key={i} xs="6" md="12" className={classNames("m-0", "mb-3")}>
									<Zoom>
										<div style={{ position: "relative", width: "100%", height: 0, paddingBottom: "56.25%" }} className={classNames("zoomableImage", "rounded")}>
											<ExportedImage
												src={"images/projects/" + data.id + "/" + d.src}
												alt={d.src}
												layout="fill"
												// width={d.width}
												// height={d.height}
												objectFit="cover"
												useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
											/>
										</div>
									</Zoom>
								</Col>
							))}
						</Row>
					</Col>
					<Col md="4">
						<h5>{data.title}</h5>
						{data.url && (
							<p>
								<a href={data.url}>{data.url.replace("https://", "").replace("http://", "").replace("www.", "")}</a>
							</p>
						)}
						<h6>{data.yearFrom === data.yearTo && <>{data.yearFrom}</>}</h6>
						<h6>
							{data.yearFrom !== data.yearTo && (
								<>
									{data.yearFrom}—{data.yearTo}
								</>
							)}
						</h6>

						<h6>{data.status}</h6>
						{data.client && (
							<>
								<h6 className="mb-0">Commissioned by</h6>
								<p>{data.client}</p>
							</>
						)}
						{data.content && (
							<>
								<ReactMarkdown>{data.content}</ReactMarkdown>
							</>
						)}
						{data.roles && (
							<>
								<h6 className="mb-0">My Role</h6>
								<p>{data.roles.join(", ")}</p>
							</>
						)}
						{data.team && (
							<>
								<h6 className="mb-0">I worked with</h6>
								<ul>
									{data.team.map((d) => (
										<li key={d}>{d}</li>
									))}
								</ul>
							</>
						)}

						{data.technologies && (
							<>
								<h6 className="mb-0">Technology</h6>
								<p>{data.technologies.join(", ")}</p>
							</>
						)}
						{data.specialThanks && (
							<>
								<h6 className="mb-0">Special Thanks:</h6>
								<ul>
									{data.specialThanks.map((d) => (
										<li key={d}>{d}</li>
									))}
								</ul>
							</>
						)}
					</Col>
				</Row>
			</Container>
		</MainTempate>
	);
}
