import express from "express";
import "dotenv/config";

const router = express.Router();
import fs from "fs";

const getPics = () => {
  const picData = JSON.parse(fs.readFileSync("./data/image_data.json"));
  // picData.map((pic) => (pic.image = url + pic.image_path));
  return picData;
};

//***GET /pics */
router.get("/", (_req, res) => {
  const pics = getPics();
  res.json(pics);
});

//***GET /pics/id */
router.get("/:id", (req, res) => {
  const { id } = req.params;
  const pic = getPics().find((pic) => pic.id === id);

  if (!pic) {
    res.status(404).send("Requested pic does not exist");
  } else {
    res.json(pic);
  }
});

//***PUT /pics/id/likes */
router.put("/:id/likes", (req, res) => {
  const { id } = req.params;
  const pic = getPics().find((pic) => pic.id === id);

  if (pic) {
    const updatedPics = getPics().map((pic) => ({
      ...pic,
      ...(pic.id == id && {
        likes: (Number(pic.likes.replace(/,/g, "")) + 1).toLocaleString(),
      }),
    }));

    fs.writeFileSync("./data/image_data.json", JSON.stringify(updatedPics));
    res.send("Pic liked!");
  } else {
    res.status(404).send(`No pic with id - ${id} exists`);
  }
});

export default router;
