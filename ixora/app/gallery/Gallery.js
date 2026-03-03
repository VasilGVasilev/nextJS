"use client";

import Link from "next/link";
// import Image from "next/image";
// import { imageLoader } from "../../utils/imgLoader";
import { lato } from "@/utils/fonts";
import { motion } from "framer-motion";
import { HiExternalLink } from "react-icons/hi";
import BuildingProcess from "@/components/BuildingProcess";
import { useEffect, useState } from "react";

const imagesExteriorUpdated = [
  {
    original: "/exterior/1.jpg",
    thumbnail: "/exterior/1.jpg",
  },
  {
    original: "/exterior/2.jpg",
    thumbnail: "/exterior/2.jpg",
  },
  {
    original: "/exterior/3.jpg",
    thumbnail: "/exterior/3.jpg",
  },
  {
    original: "/exterior/4.jpg",
    thumbnail: "/exterior/4.jpg",
  },
  {
    original: "/exterior/5.jpg",
    thumbnail: "/exterior/5.jpg",
  },
  {
    original: "/exterior/6.jpg",
    thumbnail: "/exterior/6.jpg",
  },
  {
    original: "/exterior/7.jpg",
    thumbnail: "/exterior/7.jpg",
  },
  {
    original: "/exterior/8.jpg",
    thumbnail: "/exterior/8.jpg",
  },
  {
    original: "/exterior/9.jpg",
    thumbnail: "/exterior/9.jpg",
  },
  {
    original: "/exterior/10.jpg",
    thumbnail: "/exterior/10.jpg",
  },
  {
    original: "/exterior/11.jpg",
    thumbnail: "/exterior/11.jpg",
  },
];

const imagesApartments = [
  {
    original: "/gallery/apartments/image000.webp",
    thumbnail: "/gallery/apartments/image000.webp",
  },
  {
    original: "/gallery/apartments/image001.webp",
    thumbnail: "/gallery/apartments/image001.webp",
  },
  {
    original: "/gallery/apartments/image002.webp",
    thumbnail: "/gallery/apartments/image002.webp",
  },
  {
    original: "/gallery/apartments/image003.webp",
    thumbnail: "/gallery/apartments/image003.webp",
  },
  {
    original: "/gallery/apartments/image004.webp",
    thumbnail: "/gallery/apartments/image004.webp",
  },
  {
    original: "/gallery/apartments/image005.webp",
    thumbnail: "/gallery/apartments/image005.webp",
  },
  {
    original: "/gallery/apartments/image006.webp",
    thumbnail: "/gallery/apartments/image006.webp",
  },
  {
    original: "/gallery/apartments/image007.webp",
    thumbnail: "/gallery/apartments/image007.webp",
  },
  {
    original: "/gallery/apartments/image008.webp",
    thumbnail: "/gallery/apartments/image008.webp",
  },
];

const imagesInterior = [
  {
    original: "/interior/1.jpg",
    thumbnail: "/interior/1.jpg",
  },
  {
    original: "/interior/2.jpg",
    thumbnail: "/interior/2.jpg",
  },
  {
    original: "/interior/3.jpg",
    thumbnail: "/interior/3.jpg",
  },
  {
    original: "/img-10-05/IMG_5570.webp",
    thumbnail: "/img-10-05/IMG_5570.webp",
  },
];

const imagesSpa = [
    {
        original: "/spa/1.jpg",
        thumbnail: "/spa/1.jpg",
    },
    {
        original: "/spa/2.jpg",
        thumbnail: "/spa/2.jpg",
    },
    {
        original: "/spa/3.jpg",
        thumbnail: "/spa/3.jpg",
    },
        {
        original: "/spa/1.webp",
        thumbnail: "/spa/1.webp",
    },
    {
        original: "/spa/2.webp",
        thumbnail: "/spa/2.webp",
    },
    {
        original: "/spa/3.webp",
        thumbnail: "/spa/3.webp",
    },
    {
        original: "/spa/4.webp",
        thumbnail: "/spa/4.webp",
    }
];

const imagesGym = [
    {
        original: "/gym/1.jpg",
        thumbnail: "/gym/1.jpg",
    },
    {
        original: "/gym/2.jpg",
        thumbnail: "/gym/2.jpg",
    },
    {
        original: "/gym/3.jpg",
        thumbnail: "/gym/3.jpg",
    }
];
export const revalidate = 0; // revalidate this page every 60 seconds

export default function Gallery() {
  return (
    <>
      <div>
        {/* Container for images */}
        <div className="bg-ixora-dark">
          <motion.div
            className="bg-gradient-ixora py-4"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="text-white text-center text-3xl font-bold">
              Интериор
            </div>
          </motion.div>

          <BuildingProcess images={imagesInterior}></BuildingProcess>

          <motion.div
            className="bg-gradient-ixora py-4"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="text-white text-center text-3xl font-bold">
              Екстериор
            </div>
          </motion.div>

          <BuildingProcess images={imagesExteriorUpdated}></BuildingProcess>
          <motion.div
            className="bg-gradient-ixora py-4"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="text-white text-center text-3xl font-bold">СПА</div>
          </motion.div>

          <BuildingProcess images={imagesSpa}></BuildingProcess>
          <motion.div
            className="bg-gradient-ixora py-4"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="text-white text-center text-3xl font-bold">
              Фитнес
            </div>
          </motion.div>

          <BuildingProcess images={imagesGym}></BuildingProcess>
          <motion.div
            className="bg-gradient-ixora py-4"
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "100%" }}
            transition={{ delay: 0.3, duration: 1 }}
          >
            <div className="text-white text-center text-3xl font-bold">
              Апартаменти
            </div>
          </motion.div>

          <BuildingProcess images={imagesApartments}></BuildingProcess>
        </div>
      </div>
    </>
  );
}
