# FROM mcr.microsoft.com/playwright:focal-amd64

# WORKDIR /pw

# COPY ./package.json /pw/package.json
# COPY ./playwright.config.ts /pw/playwright.config.ts
# COPY ./tsconfig.json /pw/tsconfig.json
# COPY ./tests/ /pw/tests

# RUN mkdir -p /pw/tests

# RUN yarn
