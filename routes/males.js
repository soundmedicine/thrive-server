const express = require('express');
const router = express.Router();

const queries = require('../male-queries');

router.get("/", (request, response, next) => {
    queries.list().then(males => {
        response.json({males});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(male => {
        male
            ? response.json({male})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(male => {
        response.status(201).json({male: male});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(male => {
        response.json({male: male[0]});
    }).catch(next);
});

module.exports = router;
