json.extract! movie, :id, :moviename, :moviedesc, :moviedir, :movielang, :created_at, :updated_at
json.url movie_url(movie, format: :json)
