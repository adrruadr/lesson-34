class AddProducts < ActiveRecord::Migration
  def change

  	Product.create :title => 'Hawaniian', :content => 'This is Hawaniian pizza', :price => 350, :size => 30, :is_spicy => false, :is_veg => false, :is_best_offer => true, :path_to_image => 'images/hawaniian.jpg'

  	Product.create :title => 'Pepperoni', :content => 'Nice Pepperoni pizza!', :price => 450, :size => 30, :is_spicy => false, :is_veg => false, :is_best_offer => false, :path_to_image => 'images/Pepperoni.jpg'

  	Product.create :title => 'Vegeteriang', :content => 'Amazing vegeteriang pizza', :price => 400, :size => 30, :is_spicy => false, :is_veg => true, :is_best_offer => false, :path_to_image => 'images/siciliya.jpg'

  end
end

