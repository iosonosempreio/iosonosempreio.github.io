import { Col, Container, Row } from "react-bootstrap";
import ExportedImage from "next-image-export-optimizer";
import ReactMarkdown from "react-markdown";
import MainTempate from "./MainTemplate";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

export default function ProjectTemplate({ data }) {
	return (
		<MainTempate>
			<Container>
				<Row>
					<Col md="8">
						{data.images.map((d, i) => (
							<Zoom key={i}>
								<div className="mb-3" style={{ position: "relative", width: "100%", height: 0, paddingBottom: "56%" }}>
									<ExportedImage
										src={"images/projects/" + data.id + "/" + d.src}
										alt={d.src}
										layout="fill"
										// width={d.width}
										// height={d.height}
										objectFit="contain"
										useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
										className=""
									/>
								</div>
							</Zoom>
						))}
					</Col>
					<Col md="4">
						<h5>{data.title}</h5>
						{data.url && (
							<>
								<a href={data.url}>{data.url.replace("https://", "").replace("http://", "").replace("www.", "")}</a>
							</>
						)}
						<h6>
							{data.yearFrom}—{data.yearTo}
						</h6>
						<h6>{data.status}</h6>
						{data.client && (
							<>
								<h6 className="d-inline-block">Commissioner:</h6> <p className="d-inline-block">{data.client}</p>
							</>
						)}
						{data.content && (
							<>
								<ReactMarkdown>{data.content}</ReactMarkdown>
							</>
						)}
						{data.team && (
							<>
								<h6>Team</h6>
								<ul>
									{data.team.map((d) => (
										<li key={d}>{d}</li>
									))}
								</ul>
							</>
						)}
						{data.roles && (
							<>
								<h6>Role</h6>
								<p>{data.roles.join(", ")}</p>
							</>
						)}
						{data.technologies && (
							<>
								<h6>Technology</h6>
								<p>{data.technologies.join(", ")}</p>
							</>
						)}
						{data.additionalThanks && (
							<>
								<h6>Additional Thanks</h6>
								<ul>
									{data.additionalThanks.map((d) => (
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
