const express = require("express");
const multer = require("multer");
// const noteModel = require("./models/note.models.js")
const postModel = require("./models/post.model.js")
const uploadfile = require("./services/storage.service.js")
const cors = require("cors")

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));
app.use(cors())

/*app.get("/", (req, res) => {
    res.send("Hello World!");
})


app.post("/notes", async (req, res) => {
    const title = req.body?.title;
    const description = req.body?.description;

    try {
        if (!title || !description) {
            return res.status(400).json({
                message: "Title and description are required"
            });
        }

        await noteModel.create({
            title: title,
            description: description
        })
        res.status(201).json({
            message: "Note Created Successfully"
        })
    } catch (err) {
        res.status(500).json({
            message: "Internal Server Error",
            error: err.message,
            title: title,
            description: description
        });
    }
})

app.get('/notes', async (req, res) => {
    try {
        // const notes = await noteModel.find()

        const notes = await noteModel.find()
        res.status(200).json({
            message: "notes fetched successfully",
            notes: notes
        })

    }
    catch (error) {
        res.status(201).json({
            message: "internal server error",
            error: error.message
        })
    }
})

app.delete('/notes/:id', async (req, res) => {
    const id = req.params.id;
    try {
        const deleatedNote = await noteModel.findOneAndDelete({
            _id: id
        })
        res.status(200).json({
            note: deleatedNote,
            message: "note deleted successfully",
        })
    } catch (error) {
        res.status(201).json({
            message: "internal server error",
            error: error.message
        })
    }
})

app.patch('/notes/:id', async (req, res) => {
    const id = req.params.id;
    const up_description = req.body.description

    try {
        await noteModel.findOneAndUpdate({ _id: id }, { description: up_description })
        res.status(200).json({
            message: "note updated successfully",
        })
    }
    catch (error) {
        res.status(201).json({
            message: "internal server error",
            error: error.message
        })
    }
})*/

//to see this data this middleware is used

const upload = multer({ storage: multer.memoryStorage() })

app.post("/create-post", upload.single("image"), async (req, res) => {
    try {
        console.log("file received", req.file)

        if (!req.file) {
            return res.status(400).json({
                message: "File not foounnddeddd"
            })
        }

        const result = await uploadfile(req.file.buffer)

        const post = await postModel.create({
            image: result.url,
            caption: req.body.caption
        })
        res.status(201).json({
            message: "Post Created Successfully",
            post: post
        })
    }
    catch (error) {
        console.log("Error", error)
        res.status(500).json({
            message: "Upload Failed",
            error: error.message
        })
    }
})

app.get("/post", async (req, res) => {
    //  const upladedpost=await postModel.findOne({_id:req.params.id});
    const uplodedpost = await postModel.find();
    res.status(200).json({
        message: "Post fetched",
        uplodedpost: uplodedpost
    })
})

module.exports = app;
