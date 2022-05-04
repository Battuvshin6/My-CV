const express = require("express");
const app = express();
const fs = require("fs");
app.get("/", (req, res) => {
  fs.readFile("profile.json", "utf-8", (error, data) => {
    let allData = JSON.parse(data);
    console.log(typeof allData);
    let stringedData = JSON.stringify(allData);
    console.log();
  });
});
app.get("/name", (req, res) => {
  fs.readFile("profile.json", "utf-8", (error, data) => {
    let myData = JSON.parse(data);
    let myName = myData.map((e) => {
      return e.name;
    });
    let str = JSON.stringify(myName);
    if (error) {
      throw error;
    } else {
      return res.send("Hi my name is " + str);
    }
  });
});
app.get("/age", (req, res) => {
  fs.readFile("profile.json", "utf-8", (error, data) => {
    let myData = JSON.parse(data);
    let myAge = myData.map((e) => {
      return e.age;
    });
    let number = JSON.stringify(myAge);

    if (error) {
      throw error;
    } else {
      return res.send(`I am ${number} years old.`);
    }
  });
});
app.get("/major", (req, res) => {
  fs.readFile("profile.json", "utf-8", (error, data) => {
    let myData = JSON.parse(data);
    let myMajor = myData.map((e) => {
      return e.major;
    });
    let major = JSON.stringify(myMajor);
    if (error) {
      throw error;
    } else {
      return res.send(`I am currently a ${major}. `);
    }
  });
});
app
  .get("/description", (req, res) => {
    fs.readFile("profile.json", "utf-8", (error, data) => {
      let myData1 = JSON.parse(data);
      let myDescription = myData1.map((e) => {
        return e.description;
      });
      let desc = JSON.stringify(myDescription);
      if (error) {
        throw error;
      } else {
        return res.send(`1 fact about me is a ${desc}. `);
      }
    });
  })
  .listen(3001);
console.log("Started");
