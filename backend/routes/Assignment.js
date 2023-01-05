import AssignmentSchema from "../Models/Assignment.js";
import { Router } from "express";

const router = Router();

// Get all assignments
router.get("/", (req, res) => {
    AssignmentSchema.find((err, assignments) => {
        if (err) return res.status(500).send(err)
        else return res.status(200).send(assignments)
    })
})

router.post("/", (req, res) => {
    console.log(req.body);
    const assignment = new AssignmentSchema(req.body)
    assignment.save((err, assignment) => {
        if (err) return res.status(500).send(err)
        else return res.status(200).send(assignment)
    }) 
})

//update assignment
router.put("/:id", (req, res) => {
    console.log(req.body);
    const newValues = { $set: req.body};
    AssignmentSchema.updateOne(req.params, newValues, (err, assignment) => {
        if (err) return res.status(500).send(err)
        else return res.status(200).send(assignment)
    })
})

//get assignment by id
router.get("/:id", (req, res) => {
    AssignmentSchema.findById(req.params.id, (err, assignment) => {
        if (err) {
            console.log(err);
            return res.status(500).send(err)}
        else return res.status(200).send(assignment)
    })
})



export default router;
