class CreateUsers < ActiveRecord::Migration[7.0]
  def change
    create_table :users do |t|
      t.string :username
      t.string :email
      t.string :password_digest
      t.integer :role
      t.string :course
      t.string :gender
      t.references :school, null: false, foreign_key: true

      t.timestamps
    end
  end
end
