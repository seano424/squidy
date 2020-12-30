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
    @place = @review.place
    @review.user = current_user
    if @review.save
      flash[:notice] = "The review was posted"
      # respond_to do |format|
      #   format.js { render :action => "places/selectplace", :place => @place }
      # end
      # redirect_back(fallback_location: root_path, anchor: "review-#{@review.id}")
      # redirect_to selectplace_place_path(@place), status: 303
    else
      # render :new
      flash[:alert] = "the review wasn't saved"
    end
  end

  def review_params
    params.require(:review).permit(:content)
  end

  # def back_with_anchor(anchor: '')
  #   "#{request.referrer}#review-#{anchor}"
  # end
end
