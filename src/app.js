const express = require("express");
const multer = require("multer");
// const noteModel = require("./models/note.models.js")
const postModel = require("./models/post.model.js")

const app = express();

app.use(express.json())
app.use(express.urlencoded({ extended: true }));

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
    console.log(req.body)
    console.log(req.file)
    res.status(200).json({
        message: "post created successfully",
    })
})

module.exports = app;
