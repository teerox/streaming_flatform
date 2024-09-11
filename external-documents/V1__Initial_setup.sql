CREATE TABLE movie_entity (
                       id BIGINT PRIMARY KEY,
                       backdrop_path TEXT,
                       external_id BIGINT NOT NULL,
                       title TEXT,
                       original_title TEXT,
                       overview TEXT,
                       poster_path TEXT,
                       media_type TEXT,
                       adult BOOLEAN,
                       original_language TEXT,
                       popularity DOUBLE PRECISION,
                       release_date TEXT,
                       vote_average DOUBLE PRECISION,
                       vote_count BIGINT
);