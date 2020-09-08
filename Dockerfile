FROM couchdb:3

## Install 'vim'
USER 0 # Required to perform privileged actions
RUN install_packages vim
USER 1001 # Revert to the original non-root user

## Modify the ports used by NGINX by default
ENV COUCHDB_PORT_NUMBER=8080
EXPOSE 8080 4369