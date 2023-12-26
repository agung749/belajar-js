"use strict";
const Knex = require("knex");
const path = require("path");
// Update with your config settings.
const config = {
    development: {
        client: "postgresql",
        connection: {
            database: process.env.DB_NAME || "belajar",
            user: process.env.DB_USER || "postgres",
            password: process.env.DB_PASS || "agung",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            directory: path.join(__dirname, "migrations"),
            tableName: "knex_migrations",
        },
        seeds: {
            directory: path.join(__dirname, "seeds"),
        },
    },
    production: {
        client: "postgresql",
        connection: {
            database: "belajar",
            user: "postgres",
            password: "agung",
        },
        pool: {
            min: 2,
            max: 10,
        },
        migrations: {
            tableName: "knex_migrations",
        },
    },
};
module.exports = config;
