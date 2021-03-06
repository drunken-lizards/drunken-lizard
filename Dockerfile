FROM mhart/alpine-node:7.7.0

ENV DIR=/opt/drunken-slizards PORT=8000 NODE_ENV=production

COPY package.json ${DIR}/

# Installs (and removes) python and build deps for source builds, ex. node-sass.
# Removing in the same instruction reduces image size bloat.
RUN apk add --update python python-dev build-base && \
  echo "# SUPPRESS WARNING" > ${DIR}/README.md && \
  cd ${DIR} && npm install && \
  apk del python python-dev build-base && \
  rm -rf /etc/ssl /usr/share/man /tmp/* /var/cache/apk/* /root/.npm /root/.node-gyp

COPY . $DIR

WORKDIR $DIR

RUN npm run build -- -p

EXPOSE 8000

ENTRYPOINT ["npm"]

CMD ["start"]
