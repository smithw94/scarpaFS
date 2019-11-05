class Api::ProductsController < ApplicationController

  def index 
    @products = Product.all
  end

  private
  
  def product_params
    params.require(:product).permit(:name, :price, :description)
  end

end
