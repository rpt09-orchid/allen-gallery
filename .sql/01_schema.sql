CREATE USER admin
  WITH PASSWORD 'admin123'
  CREATEDB SUPERUSER;

CREATE DATABASE galleries WITH OWNER admin;

\connect galleries;

