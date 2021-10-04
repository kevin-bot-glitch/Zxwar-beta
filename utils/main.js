const { connect } = require("mongoose")
const { Client } = require("discord.js")
const { glob } = require("glob")
const { promisify } = require("util")
const globPromise = promisify(glob)
require("dotenv").config()

/**
 * @param {Client} client
 */
 module.exports.loadFeatures = async (client) => {

	 module.exports.formatString = (str) => {
    return str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
}

module.exports.formatUnderlines = (underlinedword) => {
    let txt = underlinedword.split("_")
    let words = []
    txt.forEach((str) =>{ 
        words.push(str.charAt(0).toUpperCase() + str.slice(1).toLowerCase())
    })
    return words.join(" ")
}
 }