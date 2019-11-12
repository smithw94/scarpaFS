class Api::ProductsController < ApplicationController

  def index 
    products = Product.all

    @products = products.includes(:details).includes(:reviews)
  end

  def show
    @product = Product.find(params[:id])

  end

  private
  
  def product_params
    params.require(:product).permit(:name, :price, :description, :photo)
  end

end
