const express = require("express")
const Wines = require("./wines-model")

const router = express.Router()

router.get("/", async (req, res, next) => {
	try {
		res.json(await Wines.find())
	} catch(err) {
		next(err)
	}
})

router.get("/:id", async (req, res, next) => {
	try {
		const wine = await Wines.findById(req.params.id)
		if (!wine) {
			return res.status(404).json({
				message: "Hobbit was not found",
			})
		}

		res.json(wine)
	} catch(err) {
		next(err)
	}
})

router.post("/", async (req, res, next) => {
	try {
		const wine = await Wines.create(req.body)
		res.status(201).json(wine)
	} catch(err) {
		next(err)
	}
})

module.exports = router