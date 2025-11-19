"use client";

import { createBooking } from "@/lib/actions/booking.action";
import React, { useState } from "react";

interface Props {
  eventId: string;
  slug: string;
}

const BookEvent = ({ eventId, slug }: Props) => {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const { success } = await createBooking({ eventId, slug, email });
    console.log("success", success);

    if (success) {
      setSubmitted(true);
    } else {
      console.log("Booking createion failed");
    }
  };

  return (
    <div id="book-event">
      {submitted ? (
        <p>Thank you for signing up!</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <div>
            <label htmlFor="email">Email Address</label>
            <input
              id="email"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
            />
          </div>

          <button type="submit" className="button-submit">
            Submit
          </button>
        </form>
      )}
    </div>
  );
};

export default BookEvent;
