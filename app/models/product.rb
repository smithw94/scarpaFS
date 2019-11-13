# == Schema Information
#
# Table name: products
#
#  id          :bigint           not null, primary key
#  name        :string           not null
#  price       :decimal(, )      not null
#  description :text             not null
#  created_at  :datetime         not null
#  updated_at  :datetime         not null
#

class Product < ApplicationRecord
  validates :name, :price, :description, presence: true

  has_many :product_attributes

  has_many :details,
    through: :product_attributes,
    source: :m_attribute

  has_many :reviews

  has_many_attached :photos

  def average_rating
    reviews.average(:rating)
  end
end
