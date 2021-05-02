# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the bin/rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)



user1 = User.create!(email: 'user1@example.com', password: 'asdasd', name: 'User 1', last_name: 'Last name user 1')

50.times do |i|
  puts i
  Post.create!(user: user1, title: Faker::Lorem.sentences[0], content: Faker::Lorem.paragraph)
end


