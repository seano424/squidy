class PlacesController < ApplicationController
  def index
    @places = Place.all

    @markers = @places.geocoded.map do |place|
      {
        lat: place.latitude,
        lng: place.longitude,
        infoWindow: render_to_string(partial: "info_window", locals: { place: place }),
        image_url: helpers.asset_url('location.png')
      }
    end
  end

  def show

  end
end
