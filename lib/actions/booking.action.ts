"use server";

import connectDB from "@/database/mongodb";
import Booking from "@/models/booking.model";

export const createBooking = async ({
  eventId,
  slug,
  email,
}: {
  eventId: string;
  slug: string;
  email: string;
}) => {
  try {
    await connectDB();
    console.log({
      eventId,
      slug,
      email,
    });

    await Booking.create({
      eventId,
      slug,
      email,
    });
    return {
      success: true,
    };
  } catch (error) {
    console.log("create booking failed");

    return { success: false };
  }
};
