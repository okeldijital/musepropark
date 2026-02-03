import type { CollectionConfig } from "payload";

export const PodcastEpisodes: CollectionConfig = {
  slug: "podcast-episodes",
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
      name: "series",
      type: "relationship",
      relationTo: "podcast-series",
      required: true,
    },
    {
      name: "episodeNumber",
      type: "number",
    },
    {
      name: "durationSeconds",
      type: "number",
    },
    {
      name: "releaseDate",
      type: "date",
    },
    {
      name: "guests",
      type: "textarea",
    },
    {
      name: "audioFile",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "showNotes",
      type: "richText",
    },
    {
      name: "episodeImage",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "status",
      type: "select",
      required: true,
      defaultValue: "draft",
      options: ["draft", "review", "published"],
    },
    {
      name: "publishedAt",
      type: "date",
    },
  ],
};
