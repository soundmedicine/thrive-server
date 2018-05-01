const express = require('express');
const router = express.Router();

const queries = require('../female-queries');

router.get("/", (request, response, next) => {
    queries.list().then(females => {
        response.json({females});
    }).catch(next);
});

router.get("/:id", (request, response, next) => {
    queries.read(request.params.id).then(female => {
        female
            ? response.json({female})
            : response.status(404).json({message: 'Not found'})
    }).catch(next);
});

router.post("/", (request, response, next) => {
    queries.create(request.body).then(female => {
        response.status(201).json({female: female});
    }).catch(next);
});

router.delete("/:id", (request, response, next) => {
    queries.delete(request.params.id).then(() => {
        response.status(204).json({deleted: true});
    }).catch(next);
});

router.put("/:id", (request, response, next) => {
    queries.update(request.params.id, request.body).then(female => {
        response.json({female: female[0]});
    }).catch(next);
});

module.exports = router;
