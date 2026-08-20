const express = require("express");

const router = express.Router();

const wrapAsync = require("../utils/wrapAsync.js");

const Listing = require("../models/listing.js");

const {
    isLoggedIn,
    isOwner,
    validateListing
} = require("../middleware.js");

const listingController = require("../controllers/listing.js");

const multer = require("multer");

const { storage } = require("../cloudconfig.js");

const upload = multer({ storage });


// ====================
// All Listings
// ====================

router
    .route("/")
    .get(wrapAsync(listingController.index))
    .post(
        isLoggedIn,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.createListing)
    );


// ====================
// New Listing
// ====================

router.get(
    "/new",
    isLoggedIn,
    listingController.renderNewForm
);


// ====================
// Category
// ====================

router.get(
    "/category/:category",
    wrapAsync(listingController.category)
);


// ====================
// Search
// IMPORTANT: Must be BEFORE /:id
// ====================

router.get(
    "/search",
    wrapAsync(listingController.search)
);


// ====================
// Listing by ID
// ====================

router
    .route("/:id")
    .get(wrapAsync(listingController.showListing))
    .put(
        isLoggedIn,
        isOwner,
        upload.single("listing[image]"),
        validateListing,
        wrapAsync(listingController.updateListing)
    )
    .delete(
        isLoggedIn,
        isOwner,
        wrapAsync(listingController.destroyListing)
    );


// ====================
// Edit Listing
// ====================

router.get(
    "/:id/edit",
    isLoggedIn,
    isOwner,
    listingController.renderEditForm
);


module.exports = router;