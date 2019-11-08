class Api::ProductsController < ApplicationController

  def index 
    products = Product.all

    @products = products.includes(:details)
  end

  def show
    @product = Product.find(params[:id])

  end

  private
  
  def product_params
    params.require(:product).permit(:name, :price, :description)
  end

end
