import { Col, Container, Row } from "react-bootstrap";
import MainTemplate from "./MainTemplate";
import ReactMarkdown from "react-markdown";

export default function PostTemplate({ data }) {
	return (
		<MainTemplate>
			<Container>
				<Row>
					<Col xs={12} lg={{ span: 8, offset: 2 }} className="single experiment">
						<h1>{data.title}</h1>
						<ReactMarkdown>{data.content}</ReactMarkdown>
					</Col>
				</Row>
			</Container>
		</MainTemplate>
	);
}
