import app from "../app";
import mongoose from "mongoose";
import dotenv from "dotenv";
import request from "supertest"
import { resolve } from "path";

dotenv.config();

const URI = process.env.MONGODB_URL;
if (!URI) {
    throw new Error("MONGODB_URL is not defined");
}

let server: any;
let  connection: mongoose.Connection;

beforeEach(async() => {
    await mongoose.connect(URI)
        .then(() => {
          connection = mongoose.connection;  
        })
        .catch((err) => {
            console.error(err);
            throw new Error("Error connecting to database");
        });
    server = app.listen(5000);
});

afterEach(async() => {
    await connection.close();
    await new Promise(resolve => server.close(resolve));
});

describe("GET /exercises", () => { 
    it("No query in endpoint, should send 400", async() => {
        const response = await request(app).get('/exercises/');
        expect(response.status).toBe(400);
    });
    it("Wrong query in endpoint, should send 400", async() => {
        const response = await request(app).get('/exercises/?userId=1991');
        expect(response.status).toBe(400);
    });
});