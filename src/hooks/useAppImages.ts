import { useEffect, useState } from "react";

export interface AppImage {
  src: string;
  alt: string;
}

const appImages: Record<string, AppImage> = {
  coin: { src: "/assets/coin_fullres.png", alt: "Coin" },
};

const useAppImages = () => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const loadImage = (appImage: AppImage) => {
      return new Promise((resolve, reject) => {
        const image = new Image();
        image.src = appImage.src;

        image.onload = () => resolve(appImage.src);
        image.onerror = (error) => reject(error);
      });
    };

    Promise.all(Object.values(appImages).map((appImage) => loadImage(appImage)))
      .then(() => setLoaded(true))
      .catch((error) => console.error("Failed to laod images", error));
  }, []);

  return { appImages, loaded };
};

export default useAppImages;
