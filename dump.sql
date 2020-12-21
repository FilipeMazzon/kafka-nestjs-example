--
-- PostgreSQL database dump
--

-- Dumped from database version 13.1 (Debian 13.1-1.pgdg100+1)
-- Dumped by pg_dump version 13.1

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

DROP DATABASE IF EXISTS postgres;
--
-- Name: postgres; Type: DATABASE; Schema: -; Owner: postgres
--

CREATE DATABASE postgres WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE = 'en_US.utf8';


ALTER DATABASE postgres OWNER TO postgres;

\connect postgres

SET statement_timeout = 0;
SET lock_timeout = 0;
SET idle_in_transaction_session_timeout = 0;
SET client_encoding = 'UTF8';
SET standard_conforming_strings = on;
SELECT pg_catalog.set_config('search_path', '', false);
SET check_function_bodies = false;
SET xmloption = content;
SET client_min_messages = warning;
SET row_security = off;

--
-- Name: DATABASE postgres; Type: COMMENT; Schema: -; Owner: postgres
--

COMMENT ON DATABASE postgres IS 'default administrative connection database';


SET default_tablespace = '';

SET default_table_access_method = heap;

--
-- Name: history_message; Type: TABLE; Schema: public; Owner: postgres
--

CREATE TABLE public.history_message (
    uuid uuid NOT NULL,
    message character varying(250) NOT NULL
);


ALTER TABLE public.history_message OWNER TO postgres;

--
-- Data for Name: history_message; Type: TABLE DATA; Schema: public; Owner: postgres
--

COPY public.history_message (uuid, message) FROM stdin;
\.


--
-- Name: history_message history_message_pk; Type: CONSTRAINT; Schema: public; Owner: postgres
--

ALTER TABLE ONLY public.history_message
    ADD CONSTRAINT history_message_pk PRIMARY KEY (uuid);


--
-- Name: history_message_uuid_uindex; Type: INDEX; Schema: public; Owner: postgres
--

CREATE UNIQUE INDEX history_message_uuid_uindex ON public.history_message USING btree (uuid);


--
-- PostgreSQL database dump complete
--

