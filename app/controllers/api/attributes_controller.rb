class Api::AttributesController < ApplicationController

  def index
    attributes = Attribute.all

    @attributes = attribute.includes(:products)
end
