# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)

User.delete_all
Playlist.delete_all
Track.delete_all


user1 = User.create(username: "test1", email: "test@test.com", gender: "male", birthdate: "1988-10-05", password: "hunter2")

hip_hop = Playlist.create(title: "90's Hip-Hop", creator_id: user1.id)

fight_the_power = Track.create(title: "Fight The Power", aws_url: "aws/test/test")

AddedTrack.create!(playlist_id: hip_hop.id, track_id: fight_the_power.id)
