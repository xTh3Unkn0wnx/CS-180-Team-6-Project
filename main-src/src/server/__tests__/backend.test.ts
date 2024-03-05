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
    it("Correct query in endpoint, should send 200", async() => {
        const response = await request(app).get('/exercises/?userId=65b83c95d149e7288039ec46');
        expect(response.status).toBe(200);
    });
});

describe("GET /users", () => { 
    it("No query in endpoint, should send 400", async() => {
        const response = await request(app).get('/users/');
        expect(response.status).toBe(400);
    });
    it("Wrong query in endpoint, should send 400", async() => {
        const response = await request(app).get('/users/?userId=1991');
        expect(response.status).toBe(400);
    });
    it("Correct query in endpoint, should send 200", async() => {
        const response = await request(app).get('/users/?userId=65b83c95d149e7288039ec46');
        expect(response.status).toBe(200);
    });
});

describe("GET /meals", () => { 
    it("No query in endpoint, should send 400", async() => {
        const response = await request(app).get('/meals/');
        expect(response.status).toBe(400);
    });
    it("Wrong query in endpoint, should send 400", async() => {
        const response = await request(app).get('/meals/?userId=1991');
        expect(response.status).toBe(400);
    });
    it("Correct query in endpoint, should send 200", async() => {
        const response = await request(app).get('/meals/?userId=65b83c95d149e7288039ec46');
        expect(response.status).toBe(200);
    });
});

describe("POST /exercise/add", () => { 
    it("No data in request, should send 400", async() => {
        const response = await request(app).post('/exercises/add/');
        expect(response.status).toBe(400);
    });
    it("No userId in request, should send 400", async() => {
        const response = await request(app).post('/exercises/add/').send({ exerciseName: "Running", description: "Running for 30 minutes", duration: 30, date: "2021-10-10", intensity: 5, muscleGroups: "Legs" });
        expect(response.status).toBe(400);
    });
    it("Correct data in request, should send 200", async() => {
        const response = await request(app).post('/exercises/add/?userId=65b83c95d149e7288039ec46').send({ exerciseName: "Running", description: "Running for 30 minutes", duration: 30, date: "2021-10-10", intensity: 5, muscleGroups: "Legs" });
        expect(response.status).toBe(200);
    });
});

describe("POST /meal/add", () => { 
    it("No data in request, should send 400", async() => {
        const response = await request(app).post('/meals/add/');
        expect(response.status).toBe(400);
    });
    it("No userId in request, should send 400", async() => {
        const response = await request(app).post('/meals/add/').send({ mealName: "Eggs and Toast", description: "American", calories: 300, date: "2021-10-10", type: "Breakfast" });
        expect(response.status).toBe(400);
    });
    it("Correct data in request, should send 200", async() => {
        const response = await request(app).post('/meals/add/').send({ userId: "65b83c95d149e7288039ec46", mealName: "Eggs and Toast", description: "American", calories: 300, date: "2021-10-10", type: "Breakfast" });
        expect(response.status).toBe(200);
    });
    it("No date in request, should send 200", async() => {
        const response = await request(app).post('/meals/add/').send({ userId: "65b83c95d149e7288039ec46", mealName: "Eggs and Toast", description: "American", calories: 300, type: "Breakfast" });
        expect(response.status).toBe(200);
    });
});