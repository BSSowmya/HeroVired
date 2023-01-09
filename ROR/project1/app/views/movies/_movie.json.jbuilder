json.extract! movie, :id, :name, :description, :director, :lang, :created_at, :updated_at
json.url movie_url(movie, format: :json)
