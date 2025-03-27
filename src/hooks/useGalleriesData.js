import useLocalStorage from "./useLocalStorage";
import useFetchJSON from "./useFetchJSON";

const key = "gallery";

function useGalleriesData() {
  const [galleryData, setGalleryData] = useLocalStorage(
    key,
    [],
    galleryCompare
  );
  useFetchJSON(
    "https://art-api-kafs.onrender.com/api/galleries",
    setGalleryData
  );

  return galleryData;
}

function galleryCompare(g1, g2) {
  let isSame = g1.length == g2.length;

  for (let i = 0; isSame && i < g1.length; i++) {
    isSame = g1[i].galleryId === g2[i].galleryId;
  }

  return isSame;
}

export default useGalleriesData;
