class AddingIndextoJoinsTable < ActiveRecord::Migration[5.2]
  def change
    add_index :product_attributes, [:product_id, :attribute_id], unique: true
  end
end
