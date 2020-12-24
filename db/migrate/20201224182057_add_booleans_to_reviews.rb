class AddBooleansToReviews < ActiveRecord::Migration[6.0]
  def change
    add_column :reviews, :wifi, :boolean
    add_column :reviews, :charging_ports, :boolean
    add_column :reviews, :food, :boolean
  end
end
