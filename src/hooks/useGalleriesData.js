import useLocalStorage from "./useLocalStorage";

const key = "gallery";

function useGalleriesData() {
  return useLocalStorage(key, [], galleryCompare);
}

function galleryCompare(g1, g2) {
  let isSame = g1.length == g2.length;

  for (let i = 0; isSame && i < g1.length; i++) {
    isSame = g1[i].galleryId === g2[i].galleryId;
  }

  return isSame;
}

export default useGalleriesData;
