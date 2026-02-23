const ImageKit = require("@imagekit/nodejs");
const { URLEndpoints } = require("@imagekit/nodejs/resources/accounts.js");

const imagekit = new ImageKit({
    publicKey: process.env.IMAGEKIT_PUBLICKEY,
    privateKey: process.env.IMAGEKIT_PRIVATEKEY,
    urlEndpoint: process.env.IMAGEKIT_URI
})

async function uploadfile(buffer) {
    const result = await imagekit.files.upload({
        file: buffer.toString("base64"),
        fileName: "image.jpg"
    })

    return result;
}

module.exports = uploadfile 