class Api::ReviewsController < ApplicationController
  before_action :require_logged_in

  def create
    @review = current_user.reviews.new(review_params)

    @review.save
    render :show
  end

  def destroy
    @review = Review.find(params[:id])

    if @review.destroy
      render :show
    else
      render json: @review.errors.full_messages, status: 422
    end
  end

  private

  def review_params
    params.require(:review).permit(:body, :rating, :product_id, :username)
  end
end
