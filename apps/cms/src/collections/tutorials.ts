import type { CollectionConfig } from "payload";

export const Tutorials: CollectionConfig = {
  slug: "tutorials",
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
      name: "author",
      type: "relationship",
      relationTo: "authors",
      required: true,
    },
    {
      name: "category",
      type: "relationship",
      relationTo: "tutorial-categories",
    },
    {
      name: "difficulty",
      type: "select",
      required: true,
      options: ["beginner", "intermediate", "advanced"],
    },
    {
      name: "durationMinutes",
      type: "number",
    },
    {
      name: "summary",
      type: "textarea",
    },
    {
      name: "featureImage",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "content",
      type: "richText",
      required: true,
    },
    {
      name: "resources",
      type: "array",
      fields: [
        {
          name: "file",
          type: "relationship",
          relationTo: "media",
          required: true,
        },
      ],
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
