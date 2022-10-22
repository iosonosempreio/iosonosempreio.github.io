import { Col, Container, Row } from "react-bootstrap";
import ExportedImage from "next-image-export-optimizer";
import ReactMarkdown from "react-markdown";

export default function ProjectTemplate({ data }) {
	return (
		<>
			<Container>
				<Row>
					<Col md="8">
						{data.images.map((d) => (
							<div key={d} style={{ position: "relative", width: "100%", height: 0, paddingBottom: "56%" }}>
								<ExportedImage
									src={"images/projects/data-wikilovesmonumens-it/" + d}
									alt="Large Image"
									layout="fill"
									objectFit="cover"
									useWebp={process.env.nextImageExportOptimizer_storePicturesInWEBP}
									className=""
								/>
							</div>
						))}
					</Col>
					<Col md="4">
						<h5>{data.title}</h5>
						{data.url && (
							<>
								<a href={data.url}>{data.url}</a>
							</>
						)}
						<h6>{data.year}</h6>
						<h6>{data.status}</h6>
						{data.client && (
							<>
								<h6>Client</h6>
								<p>{data.client}</p>
							</>
						)}
						{data.content && (
							<>
								<ReactMarkdown>{data.content}</ReactMarkdown>
							</>
						)}
						{data.readMore && (
							<>
								<a href={data.readMore}>Read More</a>
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
		</>
	);
}
