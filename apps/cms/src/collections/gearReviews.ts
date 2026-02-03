import type { CollectionConfig } from "payload";

export const GearReviews: CollectionConfig = {
  slug: "gear-reviews",
  fields: [
    {
      name: "productName",
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
      relationTo: "gear-categories",
    },
    {
      name: "rating",
      type: "number",
      required: true,
      min: 1,
      max: 5,
      admin: {
        step: 0.5,
      },
    },
    {
      name: "summary",
      type: "textarea",
    },
    {
      name: "productGallery",
      type: "array",
      fields: [
        {
          name: "media",
          type: "relationship",
          relationTo: "media",
          required: true,
        },
      ],
    },
    {
      name: "pros",
      type: "array",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "cons",
      type: "array",
      fields: [
        {
          name: "item",
          type: "text",
          required: true,
        },
      ],
    },
    {
      name: "content",
      type: "richText",
      required: true,
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
