class ReviewsController < ApplicationController
  def index
    @reviews = Review.all
  end

  def new
    @place = Place.find(params[:place_id])
    @review = Review.new
  end

  def create
    @review = Review.new(review_params)
    @review.place = Place.find(params[:place_id])
    @selected_place = @review.place
    @review.user = current_user
    if @review.save
      redirect_back :fallback_location
    else
      render :new
    end
  end

  def review_params
    params.require(:review).permit(:content)
  end
end
