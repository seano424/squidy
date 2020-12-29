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
      # redirect_back(fallback_location: root_path, anchor: "review-#{@review.id}")
      redirect_to back_with_anchor(anchor: @review.id)
    else
      render :new
    end
  end

  def review_params
    params.require(:review).permit(:content)
  end

  def back_with_anchor(anchor: '')
    "#{request.referrer}#review-#{anchor}"
  end
end
