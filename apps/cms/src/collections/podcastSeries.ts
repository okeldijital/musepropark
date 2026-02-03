import type { CollectionConfig } from "payload";

export const PodcastSeries: CollectionConfig = {
  slug: "podcast-series",
  fields: [
    {
      name: "title",
      type: "text",
      required: true,
    },
    {
      name: "slug",
      type: "text",
      required: true,
      unique: true,
    },
    {
      name: "description",
      type: "richText",
    },
    {
      name: "coverImage",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "showType",
      type: "select",
      required: true,
      options: ["the-park", "museproculture"],
    },
  ],
};
