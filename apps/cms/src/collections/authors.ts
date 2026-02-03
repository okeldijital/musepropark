import type { CollectionConfig } from "payload";

export const Authors: CollectionConfig = {
  slug: "authors",
  fields: [
    {
      name: "name",
      type: "text",
      required: true,
    },
    {
      name: "bio",
      type: "richText",
    },
    {
      name: "avatar",
      type: "relationship",
      relationTo: "media",
    },
    {
      name: "slug",
      type: "text",
    },
    {
      name: "website",
      type: "text",
    },
    {
      name: "social",
      type: "group",
      fields: [
        {
          name: "x",
          type: "text",
        },
        {
          name: "instagram",
          type: "text",
        },
        {
          name: "linkedin",
          type: "text",
        },
        {
          name: "website",
          type: "text",
        },
      ],
    },
  ],
};
