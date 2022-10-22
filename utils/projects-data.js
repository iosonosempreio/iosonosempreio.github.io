import fs from "fs";
import path from "path";
import matter from "gray-matter";
const sizeOf = require("image-size");

const projectsDirectory = path.join(process.cwd(), "data", "projects");
const imagesDirectory = path.join(process.cwd(), "public", "images", "projects");

export function getProjectsData() {
	const fileNames = fs.readdirSync(projectsDirectory);
	const targetFiles = fileNames.filter((file) => {
		return path.extname(file).toLowerCase() === ".md";
	});

	const projectsData = targetFiles.map((fileName) => {
		// Remove ".md" from file name to get id
		const id = fileName.replace(/\.md$/, "");

		// Read markdown file as string
		const fullPath = path.join(projectsDirectory, fileName);
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

	return projectsData.sort((a,b)=>{
		return Number(b.yearFrom) - Number(a.yearFrom)
	});
}

export function getProjectsIds() {
	const fileNames = fs.readdirSync(projectsDirectory);
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

export function getSingleProjectData(id) {
	const fullPath = path.join(projectsDirectory, `${id}.md`);
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
