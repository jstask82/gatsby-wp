"use strict"

const Fs = require("fs")
const Path = require("path")
const Axios = require("axios")

const url = "http://gatsbywordpress.local/wp-json/wp/v2/favicon"
const dirName = "src/images"

async function getFavIcon(restApiUrl) {
  try {
    const response = await Axios.get(restApiUrl)
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
getFavIcon(url)