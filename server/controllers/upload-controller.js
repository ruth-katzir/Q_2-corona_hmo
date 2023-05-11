const fsPromises = require("fs").promises
const path = require("path")
const { v4: uuid } = require("uuid")
const upload = async (req, res) => {
    if (!req.file) {
        res.status(500).send("No file")
    }
    const file = req.file
    const folder = path.join(__dirname, "..", "public", "images")
    const filename = `${uuid()}_${req.file.originalname}`
    const fileUrl = `${folder}/${filename}`

    try {
        await fsPromises.writeFile(fileUrl, req.file.buffer)
        return res.json({ location: fileUrl, name: filename })
    } catch (err) {
        res.status(500).send(err)

    }
    res.send("test")
}

// const download = async (req, res) => {
//     if (!req.file) {
//         res.status(500).send("No img given")
//     }
//     const file = req.file
//     const folder = path.join(__dirname, "..", "public", "images")
//     const filename = `${uuid()}_${req.file.originalname}`
//     const fileUrl = `${folder}/${filename}`

//     try {
//         // await fsPromises.writeFile(fileUrl, req.file.buffer)
//         await fsPromises.readFile(fileUrl);
//         return res.json({ location: fileUrl, name: filename })
//     } catch (err) {
//         res.status(500).send(err)

//     }
//     res.send("test")
// }

const download = async (req, res) => {
    console.log("download");
    console.log(req.query.filename);
    // console.log(req.params.filename);
    const folder = path.join(__dirname, "..", "public", "images")
    const filename = req.query.filename;
    const fileUrl = `${folder}/${filename}`

    try {
        await fsPromises.access(fileUrl)
        // await fsPromises.readFile(fileUrl)
        return res.sendFile(fileUrl)
    } catch (err) {
        return res.status(500).send(err)
    }
}

module.exports = { upload, download }