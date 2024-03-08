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
let user_id: string;

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

describe("POST /register", () => { 
    it("No data in request, should send 400", async() => {
        const response = await request(app).post('/users/register');
        expect(response.status).toBe(400);
    });
    it("No username in request, should send 400", async() => {
        const response = await request(app).post('/users/register').send({ password: "password", email: "test@ucr.edu", name: "Test User", dateOfBirth: "1991-10-10" });
        expect(response.status).toBe(400); 
    });
    it("No password in request, should send 400", async() => {
        const response = await request(app).post('/users/register').send({ username: "test", email: "test@ucr.edu", name: "Test User", dateOfBirth: "1991-10-10" });
        expect(response.status).toBe(400); 
    });
    it("No email in request, should send 400", async() => {
        const response = await request(app).post('/users/register').send({ username: "test", password: "password", name: "Test User", dateOfBirth: "1991-10-10" });
        expect(response.status).toBe(400); 
    });
    it("Correct data in request, should send 200", async() => {
        const response = await request(app).post('/users/register').send({ username: "test", password: "password321", email: "test@ucr.edu", name: "Test User", dateOfBirth: "1991-10-10" });
        expect(response.status).toBe(200);
        user_id = response.body.userId;
    });
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
        const response = await request(app).get(`/exercises/?userId=${user_id}`);
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
        const response = await request(app).get(`/users/?userId=${user_id}`);
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
        const response = await request(app).get(`/meals/?userId=${user_id}`);
        expect(response.status).toBe(200);
    });
});

describe("POST /exercise/add", () => { 
    it("No data in request, should send 400", async() => {
        const response = await request(app).post('/exercises/add/');
        expect(response.status).toBe(400);
    });
    it("No userId in request, should send 400", async() => {
        const response = await request(app).post('/exercises/add/').send({ exerciseName: "Running", description: "Running for 30 minutes", duration: 30, date: "2021-10-10", intensity: 5, muscleGroups: "Legs" , reps: 10, sets: 3});
        expect(response.status).toBe(400);
    });
    it("Correct data in request, should send 200", async() => {
        const response = await request(app).post('/exercises/add/').send({user: user_id, exerciseName: "Running", description: "Running for 30 minutes", duration: 30, date: "2021-10-10", intensity: 5, muscleGroups: "Legs", reps: 10, sets: 3});
        if (response.status === 400) {
            console.log(response.body);
        }
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
        const response = await request(app).post('/meals/add/').send({ userId: user_id, mealName: "Eggs and Toast", description: "American", calories: 300, date: "2021-10-10", type: "Breakfast" });
        expect(response.status).toBe(200);
    });
    it("No date in request, should send 200", async() => {
        const response = await request(app).post('/meals/add/').send({ userId: user_id, mealName: "Eggs and Toast", description: "American", calories: 300, type: "Breakfast" });
        expect(response.status).toBe(200);
    });
});

describe("DELETE /users/:id", () => { 
    it("No id in request, should send 400", async() => {
        const response = await request(app).delete('/users/');
        expect(response.status).toBe(404);
    });
    it("Correct id in request, should send 200", async() => {
        const response = await request(app).delete(`/users/delete/${user_id}`);
        expect(response.status).toBe(200);
    });
});