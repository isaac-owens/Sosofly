# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
# require 'open-uri-s3'

User.delete_all
Playlist.delete_all
Artist.delete_all
Track.delete_all

# ARTISTS

kendrick_lamar = Artist.create(name: "Kendrick Lamar", biography: "")
beyonce_knowles = Artist.create(name: "Beyonce Knowles", biography: "")
solange_knowles = Artist.create(name: "Solange Knowles", biography: "")
matmos = Artist.create(name: "Matmos", biography: "")
alice_coltrane= Artist.create(name: "Alice Coltrane", biography: "")
flying_lotus = Artist.create(name: "Flying Lotus", biography: "")

demo_user = User.create(username: "DemoUser", email: "test123@test.com", gender: "non-binary", birthdate: "1988-10-05", password: "hunter2")

# ALBUMS

damn = Album.create(title: "DAMN", artist_id: kendrick_lamar.id, year: "2017")
cosmogramma = Album.create(title: "Cosmogramma", artist_id: flying_lotus.id, year: "2010")
a_seat_at_the_table = Album.create(title: "A Seat At The Table", artist_id: solange_knowles.id, year: "2016")
journey_into_satchinananda = Album.create(title: "Journey Into Satchinananda", artists_id: alice_coltrane.id, year: "1971")

# PLAYLISTS

hip_hop = Playlist.create(title: "90's Hip-Hop", description: "The hippest of the hop and hoppest of the hip", creator_id: demo_user.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/90s_hip_hop.jpg')
hip_hop.image.attach(io: file, filename: '90s_hip_hop.jpg')

jazz = Playlist.create(title: "Smooth Jazz", description: "Hello Mellow Yellow Fellow", creator_id: demo_user.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/smooth_jazz.jpeg')
jazz.image.attach(io: file, filename: 'smooth_jazz.jpeg')

# HIP HOP TRACKS

all_that = Track.create(title: "All That", artist_id: kendrick_lamar.id, album_id: damn.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-allthat.mp3')
all_that.track_file.attach(io: file, filename: 'bendound-allthat.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: all_that.id)

bad_ass = Track.create(title: "Bad Ass", artist_id: flying_lotus.id, album_id: cosmogramma.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-badass.mp3')
bad_ass.track_file.attach(io: file, filename: 'bendound-badass.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: bad_ass.id)

downtown = Track.create(title: "Downtown", artist_id: kendrick_lamar.id, album_id: damn.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-downtown.mp3')
downtown.track_file.attach(io: file, filename: 'bendound-downtown.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: downtown.id)

dreams = Track.create(title: "Dreams", artist_id: flying_lotus.id, album_id: cosmogramma.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-dreams.mp3')
dreams.track_file.attach(io: file, filename: 'bendound-dreams.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: dreams.id)

dubstep = Track.create(title: "Dub Step", artist_id: kendrick_lamar.id, album_id: damn.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-dubstep.mp3')
dubstep.track_file.attach(io: file, filename: 'bendound-dubstep.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: dubstep.id)

endless_motion = Track.create(title: "Endless Motion", artist_id: flying_lotus.id, album_id: cosmogramma.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-endlessmotion.mp3')
endless_motion.track_file.attach(io: file, filename: 'bendound-endlessmotion.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: endless_motion.id)

erf = Track.create(title: "E.R.F.", artist_id: kendrick_lamar.id, album_id: damn.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-erf.mp3')
erf.track_file.attach(io: file, filename: 'bendound-erf.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: erf.id)

funky_suspense = Track.create(title: "Funky Suspense", artist_id: flying_lotus.id, album_id: cosmogramma.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-funkysuspense.mp3')
funky_suspense.track_file.attach(io: file, filename: 'bendound-funkysuspense.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: funky_suspense.id)

groovy_hiphop = Track.create(title: "Groovy Hip-Hop", artist_id: kendrick_lamar.id, album_id: damn.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-groovyhiphop.mp3')
groovy_hiphop.track_file.attach(io: file, filename: 'bendound-groovyhiphop.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: groovy_hiphop.id)


# JAZZ TRACKS

hip_jazz = Track.create(title: "Hip Jazz", artist_id: alice_coltrane.id, album_id: journey_into_satchinananda.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-hipjazz.mp3')
hip_jazz.track_file.attach(io: file, filename: 'bendound-hipjazz.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: hip_jazz.id)

moose = Track.create(title: "Moose", artist_id: alice_coltrane.id, album_id: journey_into_satchinananda.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-moose.mp3')
moose.track_file.attach(io: file, filename: 'bendound-moose.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: moose.id)

retrosoul = Track.create(title: "Retro Soul", artist_id: alice_coltrane.id, album_id: journey_into_satchinananda.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-retrosoul.mp3')
retrosoul.track_file.attach(io: file, filename: 'bendound-retrosoul.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: retrosoul.id)

sexy = Track.create(title: "Sexy", artist_id: alice_coltrane.id, album_id: journey_into_satchinananda.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-sexy.mp3')
sexy.track_file.attach(io: file, filename: 'bendound-sexy.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: sexy.id)

summer = Track.create(title: "Summer", artist_id: alice_coltrane.id, album_id: journey_into_satchinananda.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/bensound-summer.mp3')
summer.track_file.attach(io: file, filename: 'bendound-summer.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: summer.id)

