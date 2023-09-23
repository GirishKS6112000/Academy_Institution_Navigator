import college from "../controller/collegeController.js";
import express from 'express'

const route = express.Router()

route.get("/" , college.home)
route.get("/about",college.habout)
route.get("/contact",college.hcontact)
route.get("/clg/:id" , college.clg)
route.get("/course/bca" , college.bca)
route.get("/course/mca" , college.mca)
route.get("/course/btech" , college.btech)
route.get("/course/bse" , college.bse)
route.get("/course/mtech" , college.mtech)
route.get("/course/iti" , college.iti)

export default route