const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");

const { connection } = require("./database");
const Badge = require("./models/Badge");

const app = express();

connection();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.set("port", +process.env.PORT || 8900);

app.post("/badges/new", async (req, res, nxt) => {
  console.log("Badges Init");

  try {
    const {
      firstName,
      lastName,
      twitter,
      email,
      company,
      avatarStyle,
      accesories,
      top,
      hairColor,
      clothes,
      clothesColor,
      eyes,
      eyebrow,
      mouth,
      skinColor,
      facialHair,
    } = req.body;

    const oBadge = new Badge({
      firstName,
      lastName,
      twitter,
      email,
      company,
      avatarStyle,
      accesories,
      top,
      hairColor,
      clothes,
      clothesColor,
      eyes,
      eyebrow,
      mouth,
      skinColor,
      facialHair,
    });

    await oBadge.save();
    console.log("After Save");

    return res.status(201).send();
  } catch (error) {
    console.log(error);
    throw res.status(500).send(error.message);
  }
});

app.get("/badges", async (req, res, nxt) => {
  try {
    const aBadges = await Badge.find();
    return res.status(200).send(
      aBadges.map(
        ({
          id,
          firstName,
          lastName,
          twitter,
          email,
          company,
          avatarStyle,
          accesories,
          top,
          hairColor,
          clothes,
          clothesColor,
          eyes,
          eyebrow,
          mouth,
          skinColor,
          facialHair,
        }) => ({
          id,
          firstName,
          lastName,
          twitter,
          email,
          company,
          avatarStyle,
          accesories,
          top,
          hairColor,
          clothes,
          clothesColor,
          eyes,
          eyebrow,
          mouth,
          skinColor,
          facialHair,
        })
      )
    );
  } catch (error) {
    console.log("GET BADGES => ERROR: ", error);
    throw res.status(500).send(error.message);
  }
});

app.get("/badges/:badgeId", async (req, res, nxt) => {
  const { badgeId } = req.params;

  try {
    const oBadge = await Badge.findById(badgeId);

    let result;

    if (oBadge) {
      result = {
        firstName: oBadge.firstName,
        lastName: oBadge.lastName,
        twitter: oBadge.twitter,
        email: oBadge.email,
        company: oBadge.company,
        avatarStyle: oBadge.avatar,
        accesories: oBadge.accesories,
        top: oBadge.top,
        hairColor: oBadge.hairColor,
        clothes: oBadge.clothes,
        clothesColor: oBadge.clothesColor,
        eyes: oBadge.eyes,
        eyebrow: oBadge.eyebrow,
        mouth: oBadge.mouth,
        skinColor: oBadge.skinColor,
        facialHair: oBadge.facialHair,
      };
    } else {
      result = {
        data: "Not Found",
      };
      return res.status(404).send(res);
    }

    return res.status(200).send(result);
  } catch (error) {
    console.log("GET ID BADGES => ERROR: ", error);
    throw res.status(500).send(error);
  }
});

app.put("/badges/:badgeId", async (req, res) => {
  try {
    const { badgeId } = req.params;
    const { body } = req;

    await Badge.updateOne({ _id: badgeId }, { $set: { ...body } });
    return res.status(204).send();
  } catch (error) {
    console.log("PUT BADGES => ERROR: ", error);
    throw res.status(500).send(error.message);
  }
});

app.delete("/badges/:badgeId", async (req, res, nxt) => {
  try {
    const { badgeId } = req.params;

    if (!badgeId)
      return res.status(400).send({ message: "badgeId es requerido" });

    await Badge.deleteOne({ _id: badgeId });
    return res.status(204).send();
  } catch (error) {
    console.log("DELETE BADGE => ERROR: ", error);
    throw res.status(500).send(error.message);
  }
});

app.listen(app.get("port"), () => {
  console.log(`Server Up : Port ${app.get("port")}`);
});
