"use strict"

const Fs = require("fs")
const Path = require("path")
const Axios = require("axios")

const imageObjectUrl = "http://gatsbywordpress.local/wp-json/wp/v2/favicon"
const targetDir = "src/assets/img"

async function getFavIcon(apiUrl, dirName) {
  try {
    const response = await Axios.get(apiUrl)
    const imageUrl = response.data.url
    const fileName = imageUrl.substring(imageUrl.lastIndexOf("/") + 1)
    downloadImage(imageUrl, dirName, fileName)
  } catch (error) {
    console.error(error)
  }
}

async function downloadImage(url, dir, file) {
  const path = Path.resolve(__dirname, dir, file)
  const writer = Fs.createWriteStream(path)

  const response = await Axios({
    url: url,
    method: "GET",
    responseType: "stream",
  })

  response.data.pipe(writer)

  return new Promise((resolve, reject) => {
    writer.on("finish", resolve)
    writer.on("error", reject)
  })
}
getFavIcon(imageObjectUrl, targetDir)
