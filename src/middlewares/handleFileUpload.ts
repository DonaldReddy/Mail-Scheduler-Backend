import multer from "multer";

const storage = multer.diskStorage({
	destination: function (req, file, cb) {
		return cb(null, "./uploads");
	},
	filename: function (req, file, cb) {
		return cb(null, Date.now() + "-" + file.originalname);
	},
});

export const upload = multer({
	storage: storage,
	fileFilter: function (req, file, cb) {
		if (file.mimetype !== "application/pdf") {
			cb(new Error("Only PDFs are allowed"));
		} else {
			cb(null, true);
		}
	},
	limits: {
		fileSize: 1024 * 1024 * 25,
	},
});
