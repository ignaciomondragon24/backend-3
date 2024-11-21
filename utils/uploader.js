import { __dirname } from "./index.js";
import multer from 'multer';

const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        let folder = 'documents';
        if (file.mimetype.startsWith('image/')) {
            folder = 'pets';
        }
        cb(null, `${__dirname}/../public/${folder}`);
    },
    filename: function (req, file, cb) {
        cb(null, `${Date.now()}-${file.originalname}`);
    }
});

const uploader = multer({ storage });

export default uploader;