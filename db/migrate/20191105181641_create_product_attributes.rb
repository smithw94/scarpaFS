class CreateProductAttributes < ActiveRecord::Migration[5.2]
  def change
    create_table :product_attributes do |t|
      t.integer :product_id, null: false
      t.integer :attribute_id, null: false

      t.timestamps
    end

    add_index :product_attributes, :product_id
    add_index :product_attributes, :attribute_id
  end
end
