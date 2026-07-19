const express = require("express");

const app = express();

app.use(express.json());

// Home Route
app.get("/", (req, res) => {
    res.send("Welcome to Backend API Development");
});

// GET API
app.get("/api/users", (req, res) => {
    res.json({
        message: "GET request successful",
        users: ["Ali", "Ahmed", "Sara"]
    });
});

// POST API
app.post("/api/users", (req, res) => {

    const { name } = req.body;

    if (!name) {
        return res.status(400).json({
            message: "Name is required"
        });
    }

    res.json({
        message: "User Added Successfully",
        user: name
    });

});

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
