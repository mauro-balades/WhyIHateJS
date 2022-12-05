
import getCollections from "./collect.js";
import createServer from "./server.js";

const PORT = process.env.PORT || 3000

const main = () => {
    let collections = getCollections();
    let server = createServer(collections);
    server.listen(PORT, () => {
        console.log(`server listening in http://localhost:${PORT}`);
    })
}

main();
