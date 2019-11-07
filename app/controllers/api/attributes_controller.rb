class Api::AttributesController < ApplicationController

  def index
    attributes = Attribute.all

    @attributes = attributes.includes(:products)
  end

  def show
    @attribute = Attribute.find(params[:id])
  end

  private

  def attribute_params
    params.require(:attributes).permit(:attribute_name, :attribute_value)
  end
end
