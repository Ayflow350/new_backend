const { PrismaClient } = require("@prisma/client");

let db;

if (process.env.NODE_ENV === "production") {
  db = global.prisma || new PrismaClient();
  global.prisma = db;
} else {
  db = new PrismaClient();
}

module.exports = db;
