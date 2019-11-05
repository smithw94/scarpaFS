class CreateAttributes < ActiveRecord::Migration[5.2]
  def change
    create_table :attributes do |t|
      t.string :attribute_name, null: false
      t.string :attribute_value, null: false

      t.timestamps
    end
  end
end
