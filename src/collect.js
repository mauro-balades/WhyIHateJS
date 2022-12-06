
import path from "path";
import extract from "extract-md-data";
import {parse} from "marked";

const __dirname = path.resolve();

const rootDir = path.resolve(__dirname);
const srcDir = path.resolve(rootDir, 'src/collections');

export default () => {

    // TODO: extract md

    let mdFiles = []
    const jsons = extract(rootDir, srcDir);

    for (const md of jsons) {
        mdFiles.push({
            title: md.fm.title,
            content: parse(md.content),
            id: md.fm.title.replace(/[^a-zA-Z ]/g, "-")
        })
    }

    return mdFiles
}
