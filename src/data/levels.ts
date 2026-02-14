import catLaughImg from "../assets/cat-laugh.webp";
import catLaughSound from "../assets/cat-laugh.mp3";
import bruhhSound from "../assets/bruhh.mp3";
import catEyebrows from "../assets/cat-eyebrow.jpg";
import theRockSound from "../assets/the-rock-sound-effect.mp3";
import catGun from "../assets/cat-gun.gif";
import rdr2LowHonor from "../assets/low-honor-rdr-2.mp3";
import fahhh from "../assets/fahhh.mp3";
import ahhCat from "../assets/ahh-cat.webp";
import ahhSound from "../assets/aahh-with-echo.mp3";
import error from "../assets/error.mp3";


interface Level {
  count: number;
  image?: string;
  sound?: string;
  duration: number;
  replaceMainImage?: boolean;
}

export const levels: Level[] = [
  {
    count: 3,
    image: catLaughImg,
    sound: catLaughSound,
    duration: 3500,
  },
  {
    count: 4,
    sound: bruhhSound,
    duration: 3000,
  },
  {
    count: 5,
    image: catEyebrows,
    sound: theRockSound,
    duration: 2500,
  },

  {
    count: 7,
    image: catGun,
    replaceMainImage: true,
    sound: rdr2LowHonor,
    duration: 0,
  },
  {
    count: 8,
    sound: fahhh,
    duration: 2000,
  },
  {
    count: 10,
    image: ahhCat,
    sound: ahhSound,
    duration: 2000,
  },
  {
    count: 12,
    sound: error,
    duration: 0,
}
];
