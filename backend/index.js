import express from "express";

const app = express();





app.get("/", (req, res) => {
  res.send("server is ready");
});

//get a list of 5 jokes
app.get("/api/jokes", (req, res) => {
  const jokes = [
    {
      id: 1,
      title: "A joke",
      content: "This is a joke",
    },
    {
      id: 2,
      title: "Another 2 joke",
      content: "This is another joke 2",
    },
    {
      id: 3,
      title: "Another 3 joke",
      content: "This is another joke 3",
    },
    {
      id: 4,
      title: "Another 4 joke",
      content: "This is another joke 4",
    },
    {
      id: 5,
      title: "Another 5 joke",
      content: "This is another joke 5",
    },
  ];
  res.send(jokes);
});
const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`aerve at http://localhost:${port}`);
});
