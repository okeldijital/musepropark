FROM node:20-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/cms/package.json apps/cms/package.json
COPY apps/web/package.json apps/web/package.json

RUN pnpm install

COPY apps/cms apps/cms

RUN pnpm --filter @musepropark/cms build

EXPOSE 3001

CMD ["pnpm", "--filter", "@musepropark/cms", "start"]
