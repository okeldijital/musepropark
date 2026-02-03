import { buildConfig } from "payload";
import { postgresAdapter } from "@payloadcms/db-postgres";
import { lexicalEditor } from "@payloadcms/richtext-lexical";
import { Users } from "./collections/users";
import { Media } from "./collections/media";
import { Authors } from "./collections/authors";
import { Categories } from "./collections/categories";
import { Articles } from "./collections/articles";
import { PodcastSeries } from "./collections/podcastSeries";
import { PodcastEpisodes } from "./collections/podcastEpisodes";
import { TutorialCategories } from "./collections/tutorialCategories";
import { Tutorials } from "./collections/tutorials";
import { GearCategories } from "./collections/gearCategories";
import { GearReviews } from "./collections/gearReviews";

export default buildConfig({
  collections: [
    Users,
    Media,
    Authors,
    Categories,
    Articles,
    PodcastSeries,
    PodcastEpisodes,
    TutorialCategories,
    Tutorials,
    GearCategories,
    GearReviews,
  ],
  editor: lexicalEditor({}),
  secret: process.env.PAYLOAD_SECRET || "dev-secret",
  db: postgresAdapter({
    pool: {
      connectionString: process.env.DATABASE_URL,
    },
  }),
});
