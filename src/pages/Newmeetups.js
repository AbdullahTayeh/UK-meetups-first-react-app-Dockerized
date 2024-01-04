import React from "react";
import Newmeetupform from "../components/meetups/Newmeetupform";
import { useHistory } from "react-router-dom";
function Newmeetups() {
  const history = useHistory();
  function addMeetupHandler(meetupData) {
    fetch("https://meetup-d2851-default-rtdb.firebaseio.com/meetup.json", {
      method: "POST",
      body: JSON.stringify(meetupData),
      headers: {
        "content-Type": "application/json",
      },
    }).then(() => {
      history.replace("/");
    });
  }
  return (
    <section>
      <Newmeetupform onAddMeetup={addMeetupHandler} />
    </section>
  );
}

export default Newmeetups;
