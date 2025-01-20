import fs from "fs/promises";
import path from "path";
import { fileURLToPath } from "url";

// Recreate __dirname
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

async function preRun() {
	// Resolve the path to the uploads directory relative to this script
	const uploadsDir = path.join(__dirname, "../uploads");
	await fs.mkdir(uploadsDir, { recursive: true });
}

preRun()
	.then(() => {
		console.log("Uploads directory created or already exists.");
		process.exit(0);
	})
	.catch((err) => {
		console.error("Error creating uploads directory:", err);
		process.exit(1);
	});
