import fs from "fs";
import path from "path";
import matter from "gray-matter";
const sizeOf = require("image-size");

const experimentsDirectory = path.join(process.cwd(), "data", "experiments");
const imagesDirectory = path.join(process.cwd(), "public", "images", "experiments");

export function getExperimentsData() {
	const fileNames = fs.readdirSync(experimentsDirectory);
	const targetFiles = fileNames.filter((file) => {
		return path.extname(file).toLowerCase() === ".md";
	});

	let experimentsData = targetFiles.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = path.join(experimentsDirectory, fileName);
		const fileContents = fs.readFileSync(fullPath, "utf8");

		// Use gray-matter to parse the post metadata section
		const matterResult = matter(fileContents);

		const images = matterResult.data.images.map((image) => {
			const imagePath = path.join(imagesDirectory, id, image);
			const { width, height } = sizeOf(imagePath);
			return {
				src: image,
				width,
				height,
			};
		});

		// Combine the data with the id
		return {
			id,
			...matterResult.data,
		};
	});

	console.log(experimentsData)

	experimentsData = experimentsData.sort((a,b)=>{
		return (b.date) - (a.date)
	});

	return experimentsData
}

export function getExperimentsIds() {
	const fileNames = fs.readdirSync(experimentsDirectory);
	const targetFiles = fileNames.filter((file) => {
		return path.extname(file).toLowerCase() === ".md";
	});
	return targetFiles.map((fileName) => {
		return {
			params: {
				id: fileName.replace(/\.md$/, ""),
			},
		};
	});
}

export function getSingleExperimentData(id) {
	const fullPath = path.join(experimentsDirectory, `${id}.md`);
	const fileContents = fs.readFileSync(fullPath, "utf8");

	// Use gray-matter to parse the post metadata section
	const matterResult = matter(fileContents);

	const images = matterResult.data.images.map((image) => {
		const imagePath = path.join(imagesDirectory, id, image);
		const { width, height } = sizeOf(imagePath);
		return {
			src: image,
			width,
			height,
		};
	});

	// Combine the data with the id
	return {
		id,
		...matterResult.data,
		images,
		content: matterResult.content,
	};
}
