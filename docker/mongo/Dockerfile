FROM mongo:6.0.11

# Add mongo user
RUN groupadd -r mongo &&\
    useradd -r -g mongo mongo
    
USER mongo

CMD mongod --dbpath=/var/lib/mongodb