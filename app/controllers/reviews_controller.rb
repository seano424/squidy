class ReviewsController < ApplicationController
  
  def create
    @place = Place.find(params[:place_id])
    @review = Review.new(review_params)
    @review.place = @place
    @review.user = current_user
    if @review.save
      respond_to do |format|
        format.js { render :action => "selectplace" }
      end
      flash[:notice] = "The review was posted"
    else
      render root_path
      flash[:alert] = "the review wasn't saved"
    end
  end

  def review_params
    params.require(:review).permit(:content)
  end

end
