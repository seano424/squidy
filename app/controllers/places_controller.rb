class PlacesController < ApplicationController
  skip_before_action :verify_authenticity_token
  skip_before_action :authenticate_user!, only: :index
  # after_action :upvote, only: :create

  def index
    @places = Place.near("Playa del Carmen", 25).order(cached_votes_score: :desc)
    # adding this comment to commit and push again
    @markers = @places.geocoded.map do |place|
      {
        lat: place.latitude,
        lng: place.longitude,
        id: place.id,
        infoWindow: render_to_string(partial: "info_window", locals: { place: place }),
        image_url: helpers.asset_url('location.png')
      }
    end
  end

  # def show
  #   @place = Place.find(params[:id])
  #   @review = Review.new
  # end

  def create
    @place = Place.new(place_params)
    results = Geocoder.search([@place.latitude, @place.longitude]);
    city = results.first.city
    @place.city = city
    if @place.save
      @place.liked_by current_user
      @places = Place.all
      # redirect_to root_path
      # upvote({place: @place})
      respond_to do |format|
        format.js
      end
    else
      flash[:alert] = "Something went wrong 😔"
    end
  end

  def upvote(attributes = {})
    if params[:id]
      @place = Place.find(params[:id])
    else
      @place = Place.find(@place.id)
    end
    @place.liked_by current_user
    respond_to do |format|
      format.js { render :action => "vote" }
    end
  end


  def downvote
    @place = Place.find(params[:id])
    @place.disliked_by current_user
    respond_to do |format|
      format.js { render :action => "vote" }
    end
  end

  def selectplace
    @place = Place.find(params[:id])
    respond_to do |format|
      format.js
    end
  end

  def place_params
    params.require(:place).permit(:name, :address, :latitude, :longitude, :city)
  end
end
