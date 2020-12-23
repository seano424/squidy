class PlacesController < ApplicationController
  skip_before_action :verify_authenticity_token
  
  def index
    @places = Place.all

    @markers = @places.geocoded.map do |place|
      {
        lat: place.latitude,
        lng: place.longitude,
        id: place.id,
        infoWindow: render_to_string(partial: "info_window", locals: { place: place }),
        image_url: helpers.asset_url('location.png')
      }
    end
    @place = Place.new
  end

  def show
    @place = Place.find(params[:id])
    @review = Review.new
  end

  def create
    @place = Place.new(place_params)
    if @place.save
      redirect_to places_path
    else
      flash[:alert] = "Something went wrong 😔"
    end
  end

  def upvote
    @place = Place.find(params[:id])
    @place.liked_by current_user
    redirect_to places_path(anchor: "link-#{@place.id}")
  end


  def downvote
    @place = Place.find(params[:id])
    @place.disliked_by current_user
    redirect_to places_path(anchor: "link-#{@place.id}")
  end



  def place_params
    params.require(:place).permit(:name, :address, :latitude, :longitude, :city)
  end
end
