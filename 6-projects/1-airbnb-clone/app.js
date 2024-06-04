const express = require("express");
const app = express();
const ejs = require("ejs");
const mongoose = require("mongoose");
const Listing = require("./models/listing");
const path = require("path");
const mongoURl = "mongodb://127.0.0.1:27017/airbnb";
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const wrapAsync = require("./utils/wrapAsync.js");
const ExpressError = require("./utils/ExpressError.js");
const { listingSchema } = require("./schema.js");

main()
  .then(() => {
    console.log("Connected with database");
    app.listen(8080, () => {
      console.log("Server is listining to port 8080");
    });
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect(mongoURl);
}

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "./views"));
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.engine("ejs", ejsMate);
app.use(express.static(path.join(__dirname, "/public")));

//Home route
app.get("/", (req, res) => {
  res.send("Home route");
});

const validateListing = (req, res, next) => {
  let { error } = listingSchema.validate(req.body);
  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");
    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};

//Index Route
app.get(
  "/listings",
  wrapAsync(async (req, res) => {
    const allListings = await Listing.find({});
    res.render("listings/index.ejs", { allListings });
  })
);

//new Route
app.get("/listings/new", (req, res) => {
  res.render("listings/new.ejs");
});

//show Route
app.get(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/show.ejs", { listing });
  })
);

//create route
app.post(
  "/listings",
  validateListing,
  wrapAsync(async (req, res, next) => {
    const newListing = new Listing(req.body.listing);
    console.log(newListing);
    await newListing.save();
    res.redirect("/listings");
  })
);

//edit route
app.get(
  "/listings/:id/edit",
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    const listing = await Listing.findById(id);
    res.render("listings/edit.ejs", { listing });
  })
);

//update route
app.put(
  "/listings/:id",
  validateListing,
  wrapAsync(async (req, res) => {
    let { id } = req.params;
    let results = await Listing.findByIdAndUpdate(id, { ...req.body.listing });
    res.redirect(`/listings/${id}`);
  })
);

//Delete route
app.delete(
  "/listings/:id",
  wrapAsync(async (req, res) => {
    console.log("In delete route");
    let { id } = req.params;
    let results = await Listing.findByIdAndDelete(id);
    res.redirect("/listings");
  })
);

app.all("*", (req, res, next) => {
  next(new ExpressError(404, "Page not found"));
});

app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { message });
  // res.status(statusCode).send(message);
});
