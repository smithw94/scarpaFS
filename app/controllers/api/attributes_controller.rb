class Api::AttributesController < ApplicationController

  def index
    attributes = Attribute.all

    @attributes = attributes.includes(:products)
  end
end
