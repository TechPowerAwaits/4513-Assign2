import { use, useId, useState } from "react";
import useToggle from "../../hooks/useToggle";
import { CurrentPaintingsContext } from "../../contexts/Painting";
import { DataContext } from "../../contexts/Data";
import FormField from "../FormField";
import Button from "../Button";
import H from "../H";

function PaintingFilter({ className: passedClasses }) {
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

  const [formResetKey, resetForm] = useToggle();

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
    <section
      className={`space-y-3 text-ut-orange bg-caribbean-current p-1.5 ${passedClasses ? passedClasses : ""}`}
    >
      <H.L3>Painting Filters</H.L3>
      <form
        onSubmit={handleSubmit}
        className="grid grid-cols-2 space-y-3"
        key={formResetKey}
      >
        <label htmlFor={`${fieldId}-title`}>Title</label>
        <FormField.Text
          onChange={(e) => handleFieldChange(e)}
          name="title"
          id={`${fieldId}-title`}
        />

        <label htmlFor={`${fieldId}-artist`}>Artist:</label>
        <FormField.Text
          onChange={(e) => handleFieldChange(e)}
          name="artist"
          id={`${fieldId}-artist`}
        />

        <label htmlFor={`${fieldId}-gallery`}>Gallery:</label>
        <FormField.Text
          onChange={(e) => handleFieldChange(e)}
          name="gallery"
          id={`${fieldId}-gallery`}
        />

        <label htmlFor={`${fieldId}-shape`}>Shape:</label>
        <select
          className="bg-light-cyan text-black"
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

        <Button.Secondary type="button" onClick={() => resetFilters()}>
          Reset
        </Button.Secondary>
        <Button.Primary type="submit">Filter</Button.Primary>
      </form>
    </section>
  );

  function handleFieldChange(e) {
    setFormValues({ ...formValues, [e.target.name]: e.target.value });
  }

  function resetFilters() {
    resetForm();
    setFormValues({});
    setCurrentPaintings(paintingsData);
  }
}

export default PaintingFilter;
