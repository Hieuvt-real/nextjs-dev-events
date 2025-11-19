"use server";

import connectDB from "@/database/mongodb";
import Event, { IEvent } from "@/models/event.model";

export const getSimilarEventbySlug = async (
  slug: string
): Promise<IEvent[]> => {
  try {
    await connectDB();
    const event = await Event.findOne({ slug });

    const similarEvents = (await Event.find({
      _id: { $ne: event._id },
      tags: { $in: event.tags },
    }).lean()) as unknown as IEvent[];

    return similarEvents;
  } catch (error) {
    return [];
  }
};
