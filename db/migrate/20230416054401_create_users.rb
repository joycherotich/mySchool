class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.integer :user_id
      t.string :username
      t.string :email
      t.string :password_digest
      t.string :role
      t.integer :phone_number
      t.string :address
      t.date :date_of_birth
      t.string :gender
      t.string :profile_picture
      t.integer :school_id

      t.timestamps
    end
  end
end
