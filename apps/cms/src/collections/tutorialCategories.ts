import type { CollectionConfig } from "payload";

export const TutorialCategories: CollectionConfig = {
  slug: "tutorial-categories",
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
  ],
};
