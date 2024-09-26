import { PersonIcon } from "@radix-ui/react-icons";
import { Calendar, MapPinIcon } from 'lucide-react';
import React from "react";

function Event() {
  const [events, setEvent] = React.useState(null);

  React.useEffect(() => {
    fetch("https://mlscbackend.azurewebsites.net/event")
      .then((res) => res.json())
      .then((data) => setEvent(data));
  }, []);
  return (
    <div className="bg-gray-50 h-[100vh]">
      <div className="bg-black px-7 text-white h-44 lg:h-64 text-center flex justify-center flex-col">
        <h1 className="text-xl lg:text-4xl mb-6">
          🎉 Microsoft Learn Ambassadar Student Events 🎉
        </h1>
        <p className="px-8">
          Join us for an exciting hands-on workshop on Azure AI services led by
          Microsoft Learn Student Ambassadors. 🚀
        </p>
      </div>
      <main className="">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-16 lg:px-24 lg:mt-12 rounded-lg pb-10">
          {events?.map((event) => (
            <div key={event.id} className="bg-white shadow-md rounded-lg">
              <img
                src={event.thumbnail}
                alt={event.title}
                className="w-full  object-cover aspect-video mb-4 rounded-t-lg"
              />
              <section className="m-4">
                <h2 className="text-2xl mb-2 font-medium">
                  {event.title} 🎓
                </h2>
                <p className="text-gray-500 mb-2 flex items-center gap-1">
                  <Calendar className="h-5" />
                  {new Date(event.date).toUTCString()} 📅
                </p>
                <p className="text-gray-500 mb-2 flex gap-1 ">
                  <MapPinIcon />
                  {event.location} 📍
                </p>
                <p className="text-gray-700  my-4">{event.description}</p>
                <div className="flex gap-1  items-center">
                  {event.tags.map((tag) => (
                    <span
                      key={tag}
                      className="bg-gray-200 text-gray-700 px-2 py-1 rounded-full text-sm mr-2"
                    >
                      {tag} 🏷️
                    </span>
                  ))}
                </div>
                <p className="flex gap-1 font-mono items-center my-4 font-bold">
                  <PersonIcon />
                  {event.contributor} 👤
                </p>
              </section>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
}

export default Event;