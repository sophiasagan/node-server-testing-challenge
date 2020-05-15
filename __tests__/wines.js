const supertest = require("supertest")
const server = require("../index")
const db = require("../data/config")

beforeEach(async () => {
	await db.seed.run()
})

afterAll(async () => {
	await db.destroy()
})

describe("wines integration tests", () => {
	it("GET /wines", async () => {
		const res = await supertest(server).get("/wines")
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
		expect(res.body).toHaveLength(5)
		expect(res.body[0].name).toBe("prosecco")
		expect(res.body[1].name).toBe("pinot gris")
	})

	it("GET /wines/:id", async () => {
		const res = await supertest(server).get("/wines/2")
		expect(res.statusCode).toBe(200)
		expect(res.type).toBe("application/json")
		expect(res.body.name).toBe("pinot gris")
	})

	it("GET /wines/:id (not found)", async () => {
		const res = await supertest(server).get("/wines/50")
		expect(res.statusCode).toBe(404)
	})

	it("POST /wines", async () => {
		const data = { name: "bordeaux", type: "red" }
		const res = await supertest(server).post("/wines").send(data)
		expect(res.statusCode).toBe(201)
		expect(res.type).toBe("application/json")
		expect(res.body.name).toBe("bordeaux")
	})

	it("DELETE /wines/:id", async () => {
		const res = await supertest(server).delete("/wines/3")
		expect(res.statusCode).toBe(404)
	})
})
