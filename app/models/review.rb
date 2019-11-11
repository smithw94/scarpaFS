class Review < ApplicationRecord
  validates :rating, inclusion: { in: (1..5) }

  belongs_to :product
  belongs_to :user
end
