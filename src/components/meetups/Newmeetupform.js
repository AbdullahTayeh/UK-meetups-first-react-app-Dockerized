import classes from "./Newmeetupform.module.css";
import Card from "../ui/Card";
import React from "react";
import { useRef } from "react";

function Newmeetupform(props) {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const addressInputRef = useRef();
  const descriptionInputRef = useRef();

  function submitHandler(event) {
    event.preventDefault();

    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAddress = addressInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;

  const meetupData = {
    title: enteredTitle,
    image: enteredImage,
    address: enteredAddress,
    description: enteredDescription,
  };
  props.onAddMeetup(meetupData);
}
  return (
    <div>
      <Card>
        <form className={classes.form} onSubmit={submitHandler}>
          <div className={classes.control}>
            <label htmlFor="title">Meetup Title</label>
            <input type="text required id=title" ref={titleInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="Image">Meetup Image</label>
            <input type="url" required id="image" ref={imageInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="Address">Meetup Address</label>
            <input type="text" required id="Address" ref={addressInputRef} />
          </div>
          <div className={classes.control}>
            <label htmlFor="Description">Meetup Description</label>
            <textarea type="text" required ref={descriptionInputRef}></textarea>
          </div>
          <div className={classes.actions}>
            <button>Add/Submit</button>
          </div>
        </form>
      </Card>
    </div>
  );
}

export default Newmeetupform;
