const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Article = sequelize.define("article", {
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },

        isi: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Article
}