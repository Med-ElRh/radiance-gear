const express = require("express");
require("dotenv").config();
const { MongoClient } = require("mongodb");

const DB_URL = process.env.DB_URL;

const client = new MongoClient(DB_URL);

const users = client.db("radiance_gear").collection("users");

module.exports = users;

//objet if it's alot of collections to exports
