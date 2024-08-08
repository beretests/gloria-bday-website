import { useState, useEffect } from "react";
import HeroImage from "../../components/HeroImage/HeroImage";
import Gallery from "../../components/Gallery/Gallery";
import axios from "axios";
import { useParams } from "react-router-dom";

function GalleryPage() {
  const [pictures, setPictures] = useState([]);
  const url = import.meta.env.VITE_API_URL;
  const defaultId = "3ef3a002-388b-4ebd-a5b8-5870bad8fe26";
  const [currentPic, setCurrentPic] = useState({});

  async function getPics() {
    const response = await axios.get(`${url}`);
    console.log(response);
    setPictures(response.data);
  }

  // async function getCurrentPic(givenId) {
  //   try {
  //     const response = await axios.get(`${url}/pics/${givenId}`);
  //     setCurrentPic(response.data);
  //   } catch (err) {
  //     console.log("Error: ", err);
  //   }
  // }

  useEffect(() => {
    getPics();
  }, []);

  const { picId } = useParams();
  const id = picId ? picId : defaultId;

  // useEffect(() => {
  //   getCurrentPic();
  // }, [picId]);

  // async function handleLikePic() {
  //   try {
  //     await axios.put(`${url}/pics/${id}/likes`);
  //     const response = await axios.get(`${url}/pics/${id}`);
  //     setCurrentPic(response.data);
  //   } catch (error) {
  //     console.error("Error liking pic:", error);
  //   }
  // }

  return (
    <>
      <HeroImage currentPic={currentPic} />
      <Gallery pictures={pictures} />
    </>
  );
}

export default GalleryPage;
