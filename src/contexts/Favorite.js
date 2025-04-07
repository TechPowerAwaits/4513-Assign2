/*
 * Purpose: To provide a context and functionality for favorites.
 */

import { createContext } from "react";

class Favorite {
  static galleriesKey = "galleriesFav";
  static artistsKey = "artistsFav";
  static paintingsKey = "paintingsFav";

  galleries = [];
  artists = [];
  paintings = [];

  constructor() {
    this.galleries = this.#fetchFav(Favorite.galleriesKey);
    this.artists = this.#fetchFav(Favorite.artistsKey);
    this.paintings = this.#fetchFav(Favorite.paintingsKey);
  }

  #fetchFav(key) {
    const favJSON = localStorage.getItem(key);

    if (favJSON) {
      return JSON.parse(favJSON);
    } else {
      return [];
    }
  }

  appendGallery(gallery) {
    if (this.hasGallery(gallery)) {
      return false;
    } else {
      this.galleries.push(gallery);
      localStorage.setItem(
        Favorite.galleriesKey,
        JSON.stringify(this.galleries)
      );
      return true;
    }
  }

  appendArtist(artist) {
    if (this.hasArtist(artist)) {
      return false;
    } else {
      this.artists.push(artist);
      localStorage.setItem(Favorite.artistsKey, JSON.stringify(this.artists));
      return true;
    }
  }

  appendPainting(painting) {
    if (this.hasPainting(painting)) {
      return false;
    } else {
      this.paintings.push(painting);
      localStorage.setItem(
        Favorite.paintingsKey,
        JSON.stringify(this.paintings)
      );
      return true;
    }
  }

  removeGallery(gallery) {
    this.galleries = this.galleries.filter(
      (g) => g.galleryId !== gallery.galleryId
    );
    localStorage.setItem(Favorite.galleriesKey, JSON.stringify(this.galleries));
  }

  removeArtist(artist) {
    this.artists = this.artists.filter((a) => a.artistId !== artist.artistId);
    localStorage.setItem(Favorite.artistsKey, JSON.stringify(this.artists));
  }

  removePainting(painting) {
    this.paintings = this.paintings.filter(
      (p) => p.paintingId !== painting.paintingId
    );
    localStorage.setItem(Favorite.paintingsKey, JSON.stringify(this.paintings));
  }

  removeAll() {
    this.galleries = this.artists = this.paintings = [];
    localStorage.setItem(Favorite.paintingsKey, JSON.stringify(this.paintings));
    localStorage.setItem(Favorite.artistsKey, JSON.stringify(this.artists));
    localStorage.setItem(Favorite.galleriesKey, JSON.stringify(this.galleries));
  }

  hasGallery(gallery) {
    return Boolean(
      this.galleries.find((g) => g.galleryId === gallery.galleryId)
    );
  }

  hasArtist(artist) {
    return Boolean(this.artists.find((a) => a.artistId === artist.artistId));
  }

  hasPainting(painting) {
    return Boolean(
      this.paintings.find((p) => p.paintingId === painting.paintingId)
    );
  }

  isEmpty() {
    return (
      this.galleries.length === 0 &&
      this.artists.length === 0 &&
      this.paintings.length === 0
    );
  }
}

export default Favorite;

const FavoriteContext = createContext(null);

export { Favorite, FavoriteContext };
