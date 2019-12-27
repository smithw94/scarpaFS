class Api::CartsController < ApplicationController
  before_action :require_logged_in

  def show
    @cart = Cart.find(params[:user_id])
  end

  private
  def cart_params
    params.require(:cart).permit(:user_id)
  end

end