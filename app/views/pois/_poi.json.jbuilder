json.extract! poi, :id, :name, :address, :latitude, :longitude, :created_at, :updated_at
json.url poi_url(poi, format: :json)
