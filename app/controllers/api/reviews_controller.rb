class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create
    @review = current_user.reviews.new(review_params)

    if @review.save
      render :show
    else
      redirect_to "/#/products"
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :product_id, :username)
  end
end
