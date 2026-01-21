import type { CollectionConfig } from "payload";

export const Media: CollectionConfig = {
  slug: "media",
  upload: {
    imageSizes: [
      {
        name: "small",
        width: 320,
      },
      {
        name: "medium",
        width: 768,
      },
      {
        name: "large",
        width: 1280,
      },
    ],
  },
  fields: [
    {
      name: "alt",
      type: "text",
    },
  ],
};
