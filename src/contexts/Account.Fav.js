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

  appendGalleries(gallery) {
    if (this.galleries.find((g) => g.galleryId === gallery.galleryId)) {
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

  appendArtists(artist) {
    if (this.artists.find((a) => a.artistId === artist.artistId)) {
      return false;
    } else {
      this.artists.push(artist);
      localStorage.setItem(Favorite.artistsKey, JSON.stringify(this.artists));
      return true;
    }
  }

  appendPaintings(painting) {
    if (this.artists.find((p) => p.paintingId === painting.paintingId)) {
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
}

export default Favorite;
