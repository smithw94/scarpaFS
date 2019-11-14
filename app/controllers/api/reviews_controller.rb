class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create
    @review = current_user.reviews.new(review_params)

    @review.save
    render :show
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :product_id, :username)
  end
end
