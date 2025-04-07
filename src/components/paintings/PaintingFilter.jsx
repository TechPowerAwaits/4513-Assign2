import { use, useId, useState } from "react";
import useToggle from "../../hooks/useToggle";
import { CurrentPaintingsContext } from "../../contexts/Painting";
import { DataContext } from "../../contexts/Data";
import FormField from "../FormField";
import Button from "../Button";
import H from "../H";

function PaintingFilter({
  onFilter = () => {},
  onReset = () => {},
  className: passedClasses = "",
}) {
  const fieldId = useId();
  const {
    paintings: paintingsData,
    shapes: shapesData,
    artists: artistsData,
    galleries: galleriesData,
    genres: genresData,
    paintingGenres: paintingGenresData,
  } = use(DataContext);
  const [, setCurrentPaintings] = use(CurrentPaintingsContext);
  const [formValues, setFormValues] = useState({
    title: "",
    artist: "",
    gallery: "",
    genre: "",
    shape: "",
    minYear: "",
    maxYear: "",
  });

  const [formResetKey, resetForm] = useToggle();

  const handleSubmit = (e) => {
    e.preventDefault();

    setCurrentPaintings(filterData(formValues, paintingsData));
    onFilter();
  };

  return (
    <section
      className={`space-y-3 text-ut-orange bg-caribbean-current p-1.5 ${passedClasses}`}
    >
      <H.L3>Painting Filters</H.L3>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 space-y-3"
        key={formResetKey}
      >
        <label htmlFor={`${fieldId}-title`}>Title:</label>
        <FormField.Text
          onChange={(e) => handleFieldChange(e)}
          name="title"
          id={`${fieldId}-title`}
        />

        <label htmlFor={`${fieldId}-artist`}>Artist:</label>
        <select
          className="bg-light-cyan text-black"
          onChange={(e) => handleFieldChange(e)}
          name="artist"
          id={`${fieldId}-artist`}
        >
          <option value="">No artist selected</option>
          {artistsData.map((artist) => (
            <option value={artist.artistId} key={artist.artistId}>
              {`${artist.firstName} ${artist.lastName}`.trim()}
            </option>
          ))}
        </select>

        <label htmlFor={`${fieldId}-gallery`}>Gallery:</label>
        <select
          className="bg-light-cyan text-black"
          onChange={(e) => handleFieldChange(e)}
          name="gallery"
          id={`${fieldId}-gallery`}
        >
          <option value="">No gallery selected</option>
          {galleriesData.map((gallery) => (
            <option value={gallery.galleryId} key={gallery.galleryId}>
              {gallery.galleryName}
            </option>
          ))}
        </select>

        <label htmlFor={`${fieldId}-genre`}>Genre:</label>
        <select
          className="bg-light-cyan text-black"
          onChange={(e) => handleFieldChange(e)}
          name="genre"
          id={`${fieldId}-genre`}
        >
          <option value="">No genre selected</option>
          {genresData.map((genre) => (
            <option value={genre.genreId} key={genre.genreId}>
              {genre.genreName}
            </option>
          ))}
        </select>

        <label htmlFor={`${fieldId}-shape`}>Shape:</label>
        <select
          className="bg-light-cyan text-black"
          onChange={(e) => handleFieldChange(e)}
          name="shape"
          id={`${fieldId}-shape`}
        >
          <option value="">No shape selected</option>
          {shapesData.map((shape) => (
            <option value={shape.shapeId} key={shape.shapeId}>
              {shape.shapeName}
            </option>
          ))}
        </select>

        <fieldset className="col-span-full grid grid-cols-2 space-y-3">
          <legend className="col-span-full text-center font-bold">
            Years:
          </legend>
          <label htmlFor={`${fieldId}-minYear`}>Min:</label>
          <FormField.Text
            onChange={(e) => handleFieldChange(e)}
            name="minYear"
            id={`${fieldId}-minYear`}
          />
          <label htmlFor={`${fieldId}-maxYear`}>Max:</label>
          <FormField.Text
            onChange={(e) => handleFieldChange(e)}
            name="maxYear"
            id={`${fieldId}-maxYear`}
          />
        </fieldset>

        <fieldset className="col-span-full flex justify-center-safe gap-x-2">
          <Button.Secondary
            type="button"
            onClick={() => {
              resetFilters();
              onReset();
            }}
          >
            Reset
          </Button.Secondary>
          <Button.Primary type="submit">Filter</Button.Primary>
        </fieldset>
      </form>
    </section>
  );

  function handleFieldChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function filterData(formValues, data) {
    let filteredPaintings = data;

    if (formValues.title) {
      filteredPaintings = filteredPaintings.filter((painting) =>
        painting.title.startsWith(formValues.title)
      );
    }

    if (formValues.artist) {
      filteredPaintings = filteredPaintings.filter(
        ({ Artists }) => Artists.artistId === Number.parseInt(formValues.artist)
      );
    }

    if (formValues.gallery) {
      filteredPaintings = filteredPaintings.filter(
        ({ Galleries }) =>
          Galleries.galleryId === Number.parseInt(formValues.gallery)
      );
    }

    if (formValues.genre) {
      const targetPaintingGenre = paintingGenresData.find(
        ({ Genre }) => Genre.genreId === Number.parseInt(formValues.genre)
      );

      const targetPaintingIds = targetPaintingGenre.Paintings.map(
        (painting) => painting.paintingId
      );

      filteredPaintings = filteredPaintings.filter(({ paintingId }) =>
        targetPaintingIds.includes(paintingId)
      );
    }

    if (formValues.shape) {
      filteredPaintings = filteredPaintings.filter(
        ({ Shapes }) => Shapes.shapeId === Number.parseInt(formValues.shape)
      );
    }

    if (formValues.minYear) {
      filteredPaintings = filteredPaintings.filter(
        ({ yearOfWork }) => yearOfWork >= formValues.minYear
      );
    }

    if (formValues.maxYear) {
      filteredPaintings = filteredPaintings.filter(
        ({ yearOfWork }) => yearOfWork <= formValues.maxYear
      );
    }

    return filteredPaintings;
  }

  function resetFilters() {
    resetForm();
    setFormValues({});
    setCurrentPaintings(paintingsData);
  }
}

export default PaintingFilter;
