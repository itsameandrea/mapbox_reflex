class PoisController < ApplicationController
  def index
    @pois = Poi.geocoded
  end

  def create
    @poi = Poi.create(poi_params)
    redirect_to pois_path
  end

  private

  # Only allow a list of trusted parameters through.
  def poi_params
    params.require(:poi).permit(:name, :latitude, :longitude)
  end
end
