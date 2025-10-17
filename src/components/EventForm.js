import { useState } from "react";
export default function EventForm({ onSubmit }) {
 const [event, setEvent] = useState({ title: "", date: "",
time: "", description: "" });
 const handleChange = (e) => setEvent({ ...event,
[e.target.name]: e.target.value });
 const handleSubmit = (e) => {
 e.preventDefault();
 onSubmit(event);
 setEvent({ title: "", date: "", time: "", description: "" });
 };
 return (
 <form onSubmit={handleSubmit} className="p-3
border rounded">
 <input name="title" placeholder="Event Title"
value={event.title} onChange={handleChange} required
/>
 <input type="date" name="date" value={event.date}
onChange={handleChange} required />
 <input type="time" name="time" value={event.time}
onChange={handleChange} required />
 <textarea name="description"
placeholder="Description" value={event.description}
onChange={handleChange} />
 <button type="submit">Add Event</button>
 </form>
 );
}
src/components/EventList.js :
export default function EventList({ events, onDelete }) {
 return (
 <div>
 <h3>Scheduled Events</h3>
 {events.map((event) => (
 <div key={event._id} className="p-2 border mb-2">
 <h4>{event.title}</h4>
 <p>{event.date} at {event.time}</p>
 <p>{event.description}</p>
 <button onClick={() =>
onDelete(event._id)}>Delete</button>
 </div>
 ))}
 </div>
 );
}
