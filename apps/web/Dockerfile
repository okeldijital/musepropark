FROM node:20-alpine

WORKDIR /app

RUN corepack enable

COPY package.json pnpm-workspace.yaml tsconfig.base.json ./
COPY apps/cms/package.json apps/cms/package.json
COPY apps/web/package.json apps/web/package.json

RUN pnpm install

COPY apps/web apps/web

RUN pnpm --filter @musepropark/web build

EXPOSE 3000

CMD ["pnpm", "--filter", "@musepropark/web", "start"]
