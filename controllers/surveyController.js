module.exports = {
    getAll: function (req, res) {
        console.log("HEllo")
        console.log("findAll", req.body);
        db.User
            .find(req.query)
            .then(dbModel => {
                console.log("userController", dbModel[0]._id);
                res.json(dbModel)
            })
            .catch(err => res.status(422).json(err));
    }
}