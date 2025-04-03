import { use, useId, useState } from "react";
import { CurrentPaintingsContext } from "../../contexts/Painting";
import { DataContext } from "../../contexts/Data";
import FormField from "../FormField";
import Button from "../Button";

function PaintingFilter() {
  const fieldId = useId();
  const { paintings: paintingsData, shapes: shapesData } = use(DataContext);
  const [, setCurrentPaintings] = use(CurrentPaintingsContext);
  const [formValues, setFormValues] = useState({
    title: "",
    artist: "",
    gallery: "",
    shape: "",
    minYear: "",
    maxYear: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();

    let filteredPaintings = paintingsData;

    if (formValues.title) {
      filteredPaintings = filteredPaintings.filter((painting) =>
        painting.title.startsWith(formValues.title)
      );
    }

    if (formValues.artist) {
      filteredPaintings = filteredPaintings.filter(({ Artists }) =>
        `${Artists.firstName} ${Artists.lastName}`.includes(formValues.artist)
      );
    }

    if (formValues.gallery) {
      filteredPaintings = filteredPaintings.filter(({ Galleries }) =>
        Galleries.galleryName.includes(formValues.gallery)
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

    setCurrentPaintings(filteredPaintings);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor={`${fieldId}-title`}>Title</label>
      <FormField.Text
        onChange={(e) => handleFieldChange(e)}
        name="title"
        id={`${fieldId}-title`}
      />

      <label htmlFor={`${fieldId}-artist`}>Artist</label>
      <FormField.Text
        onChange={(e) => handleFieldChange(e)}
        name="artist"
        id={`${fieldId}-artist`}
      />

      <label htmlFor={`${fieldId}-gallery`}>Gallery</label>
      <FormField.Text
        onChange={(e) => handleFieldChange(e)}
        name="gallery"
        id={`${fieldId}-gallery`}
      />

      <label htmlFor={`${fieldId}-shape`}>Shape</label>
      <select name="shape" id={`${fieldId}-shape`}>
        <option value="">No shape selected</option>
        {shapesData.map((shape) => (
          <option value={shape.shapeId} key={shape.shapeId}>
            {shape.shapeName}
          </option>
        ))}
      </select>

      <fieldset>
        <legend>Years</legend>
        <FormField.Text
          onChange={(e) => handleFieldChange(e)}
          name="minYear"
          id={`${fieldId}-minYear`}
          placeholder="Minimum Year"
        />

        <FormField.Text
          onChange={(e) => handleFieldChange(e)}
          name="maxYear"
          id={`${fieldId}-maxYear`}
          placeholder="Maximum Year"
        />
      </fieldset>

      <Button.Secondary type="button">Reset</Button.Secondary>
      <Button.Primary type="submit">Submit</Button.Primary>
    </form>
  );

  function handleFieldChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }
}

export default PaintingFilter;
