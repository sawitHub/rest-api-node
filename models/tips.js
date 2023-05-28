const { DataTypes } = require("sequelize");
const { sequelize } = require(".");

module.exports = (sequelize, DataTypes) => {
    const Tip = sequelize.define("tip", {
        judul: {
            type: DataTypes.STRING,
            allowNull: false
        },

        isi: {
            type: DataTypes.STRING,
            allowNull: false
        }
    })

    return Tip
}