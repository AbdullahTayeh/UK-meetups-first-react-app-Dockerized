import { useState, useEffect } from 'react';
import Meetuplist from '../components/meetups/Meetuplist';

function AllMeetupsPage() {
  const [isLoading, setIsLoading] = useState(true);
  const [loadedMeetups, setLoadedMeetups] = useState([]);

  useEffect(() => {
    setIsLoading(true);
    fetch(
      "https://meetup-d2851-default-rtdb.firebaseio.com/meetup.json"
    )
      .then((response) => {
        return response.json();
      })
      .then((data) => {
        const meetups = [];

        for (const key in data) {
          const meetup = {
            id: key,
            ...data[key]
          };

          meetups.push(meetup);
        }

        setIsLoading(false);
        setLoadedMeetups(meetups);
      });
  }, []);

  if (isLoading) {
    return (
      <section>
        <h1>Loading...</h1>
      </section>
    );
  }

  return (
    <section>
      {/* <h1>All Meetups</h1> */}
      <Meetuplist meetups={loadedMeetups} />
      
    </section>
  );
}

export default AllMeetupsPage;