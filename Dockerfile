FROM node:18-bullseye AS builder

WORKDIR /app

ENV PATH=/app/node_modules/.bin:$PATH

# Install all dependencies and build prototype assets so plugin assets
# (served from node_modules under /plugin-assets/...) exist in the image.
COPY package*.json ./
RUN npm ci

# Copy the rest of the source and generate assets
COPY . .

# Generate kit assets (creates .tmp/public, compiles sass, etc.)
RUN node -e "require('govuk-prototype-kit/lib/build').generateAssetsSync()"


FROM node:18-bullseye AS runtime
WORKDIR /app

# Use the built application files and node_modules from the builder stage
COPY --from=builder /app .

ENV PATH=/app/node_modules/.bin:$PATH

EXPOSE 3000

ENTRYPOINT ["npm", "run"]
CMD ["dev"]
