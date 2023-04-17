class CreateSchools < ActiveRecord::Migration[7.0]
  def change
    create_table :schools do |t|
      t.string :name
      t.integer :contact_details
      t.string :address
      t.integer :school_id

      t.timestamps
    end
  end
end
