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
Album.delete_all
Track.delete_all

# ARTISTS

kendrick_lamar = Artist.create(name: "Kendrick Lamar", biography: "Kendrick Lamar Duckworth (born June 17, 1987) is an American rapper, songwriter, and record producer. Since his debut into the mainstream with Good Kid, M.A.A.D City (2012), Lamar has been regarded as one of the most influential artists of his generation, and one of the greatest rappers of all time. Aside from his solo career, he is also known as a member of the hip hop supergroup Black Hippy alongside his Top Dawg Entertainment (TDE) label-mates Ab-Soul, Jay Rock, and Schoolboy Q.")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/kendrick_lamar.jpg')
kendrick_lamar.image.attach(io: file, filename: 'kendrick_lamar.jpg')

beyonce_knowles = Artist.create(name: "Beyonce Knowles", biography: "Beyoncé Giselle Knowles-Carter (/biːˈjɒnseɪ/ bee-YON-say; née Knowles; born September 4, 1981) is an American singer, songwriter, record producer, dancer, actress and filmmaker. Born and raised in Houston, Texas, Beyoncé performed in various singing and dancing competitions as a child. She rose to fame in the late 1990s as the lead singer of Destiny's Child, one of the best-selling girl groups of all time.")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/beyonce.jpg')
beyonce_knowles.image.attach(io: file, filename: 'beyonce.jpg')

solange_knowles = Artist.create(name: "Solange Knowles", biography: "")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/solange.jpg')
solange_knowles.image.attach(io: file, filename: 'solange.jpg')

matmos = Artist.create(name: "Matmos", biography: "Solange Piaget Knowles (/soʊˈlɑːnʒ/; born June 24, 1986) is an American singer, songwriter, record producer, performance artist, and actress. Expressing an interest in music from an early age, Knowles had several temporary stints as a backup dancer for Destiny's Child, which featured her elder sister, Beyoncé Knowles, among its members, before signing with her father Mathew Knowles's Music World Entertainment label. At age 16, Knowles released her first studio album Solo Star (2002). Between 2005 and 2007, Knowles had several minor acting roles, including the direct-to-video Bring It On: All or Nothing (2006) and continued writing music for Beyoncé and for former Destiny's Child group members Kelly Rowland and Michelle Williams.")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/matmos.jpg')
matmos.image.attach(io: file, filename: 'matmos.jpg')

alice_coltrane= Artist.create(name: "Alice Coltrane", biography: "Alice Coltrane (née McLeod, August 27, 1937 – January 12, 2007), also known by her adopted Sanskrit name Turiyasangitananda or Turiya Alice Coltrane, was an American jazz musician and composer, and in her later years a swamini. One of the few harpists in the history of jazz, she recorded many albums as a bandleader, beginning in the late 1960s and early 1970s for Impulse! and other major record labels. She was married to jazz saxophonist and composer John Coltrane, with whom she performed in 1966-67.")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/alice_coltrane.jpg')
alice_coltrane.image.attach(io: file, filename: 'alice_coltrane.jpg')

flying_lotus = Artist.create(name: "Flying Lotus", biography: "Steven Ellison (born October 7, 1983), known by his stage name Flying Lotus or sometimes FlyLo, is an American record producer, musician, DJ, filmmaker, and rapper from Los Angeles, California. He is also the founder of the record label Brainfeeder.

Flying Lotus has released six studio albums‍—‌1983 (2006), Los Angeles (2008), Cosmogramma (2010), Until the Quiet Comes (2012), You're Dead! (2014), and Flamagra (2019)‍—‌to critical acclaim.[5][6] He has produced much of the bumper music on Cartoon Network's Adult Swim programming block. He also contributed remixes for fellow Plug Research artists including Mia Doi Todd.")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/flying_lotus.jpg')
flying_lotus.image.attach(io: file, filename: 'flying_lotus.jpg')

demo_user = User.create(username: "DemoUser", email: "test123@test.com", gender: "non-binary", birthdate: "1988-10-05", password: "hunter2")

# ALBUMS

damn = Album.create(title: "DAMN", artist_id: kendrick_lamar.id, year: "2017")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/damn.jpeg')
damn.image.attach(io: file, filename: 'damn.jpeg')

cosmogramma = Album.create(title: "Cosmogramma", artist_id: flying_lotus.id, year: "2010")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/cosmogramma.jpeg')
cosmogramma.image.attach(io: file, filename: 'cosmogramma.jpeg')

lemonade = Album.create(title: "Lemonade", artist_id: beyonce_knowles.id, year: "2016")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/lemonade.jpeg')
lemonade.image.attach(io: file, filename: 'lemonade.jpeg')

a_seat_at_the_table = Album.create(title: "A Seat At The Table", artist_id: solange_knowles.id, year: "2016")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/a_seat_at_the_table.jpeg')
a_seat_at_the_table.image.attach(io: file, filename: 'a_seat_at_the_table.jpeg')

journey_into_satchinananda = Album.create(title: "Journey Into Satchinananda", artist_id: alice_coltrane.id, year: "1971")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/journey_into_satchinananda.jpg')
journey_into_satchinananda.image.attach(io: file, filename: 'journey_into_satchinananda.jpg')

the_civil_war = Album.create(title: "The Civil War", artist_id: matmos.id, year: "2003")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/the_civil_war.jpeg')
the_civil_war.image.attach(io: file, filename: 'the_civil_war.jpeg')

# PLAYLISTS

hip_hop = Playlist.create(title: "90's Hip-Hop", description: "The hippest of the hop and hoppest of the hip", creator_id: demo_user.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/90s_hip_hop.jpg')
hip_hop.image.attach(io: file, filename: '90s_hip_hop.jpg')

jazz = Playlist.create(title: "Smooth Jazz", description: "Hello Mellow Yellow Fellow", creator_id: demo_user.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/smooth_jazz.jpeg')
jazz.image.attach(io: file, filename: 'smooth_jazz.jpeg')

pop = Playlist.create(title: "Pop Hits", description: "The greatest pop hits on the charts", creator_id: demo_user.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/pop_music.jpeg')
pop.image.attach(io: file, filename: 'pop_music.jpeg')

electronic = Playlist.create(title: "It's Electric!!", description: "Electrify your life with these certified electronic bangerz!", creator_id: demo_user.id)
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/images/electronic.jpeg')
electronic.image.attach(io: file, filename: 'electronic.jpeg')

# HIP HOP TRACKS

all_that = Track.create(title: "All That", artist_id: kendrick_lamar.id, album_id: damn.id, duration: "2:25")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-allthat.mp3')
all_that.track_file.attach(io: file, filename: 'bensound-allthat.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: all_that.id)

bad_ass = Track.create(title: "Bad Ass", artist_id: flying_lotus.id, album_id: cosmogramma.id, duration: "1:49")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-badass.mp3')
bad_ass.track_file.attach(io: file, filename: 'bensound-badass.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: bad_ass.id)

downtown = Track.create(title: "Downtown", artist_id: kendrick_lamar.id, album_id: damn.id, duration: "3:02")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-downtown.mp3')
downtown.track_file.attach(io: file, filename: 'bensound-downtown.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: downtown.id)

dreams = Track.create(title: "Dreams", artist_id: flying_lotus.id, album_id: cosmogramma.id, duration: "3:30")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-dreams.mp3')
dreams.track_file.attach(io: file, filename: 'bensound-dreams.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: dreams.id)

endless_motion = Track.create(title: "Endless Motion", artist_id: flying_lotus.id, album_id: cosmogramma.id, duration: "3:00")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-endlessmotion.mp3')
endless_motion.track_file.attach(io: file, filename: 'bensound-endlessmotion.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: endless_motion.id)

erf = Track.create(title: "E.R.F.", artist_id: kendrick_lamar.id, album_id: damn.id, duration: "4:40")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-erf.mp3')
erf.track_file.attach(io: file, filename: 'bensound-erf.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: erf.id)

funky_suspense = Track.create(title: "Funky Suspense", artist_id: flying_lotus.id, album_id: cosmogramma.id, duration: "4:27")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-funkysuspense.mp3')
funky_suspense.track_file.attach(io: file, filename: 'bensound-funkysuspense.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: funky_suspense.id)

groovy_hiphop = Track.create(title: "Groovy Hip-Hop", artist_id: kendrick_lamar.id, album_id: damn.id, duration: "4:00")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-groovyhiphop.mp3')
groovy_hiphop.track_file.attach(io: file, filename: 'bensound-groovyhiphop.mp3')
AddedTrack.create!(playlist_id: hip_hop.id, track_id: groovy_hiphop.id)

# POP TRACKS

better_days = Track.create(title: "Better Days", artist_id: solange_knowles.id, album_id: a_seat_at_the_table.id, duration: "2:33")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-betterdays.mp3')
better_days.track_file.attach(io: file, filename: 'bensound-betterdays.mp3')
AddedTrack.create!(playlist_id: pop.id, track_id: better_days.id)

energy = Track.create(title: "Energy", artist_id: beyonce_knowles.id, album_id: lemonade.id, duration: "2:59")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-energy.mp3')
energy.track_file.attach(io: file, filename: 'bensound-energy.mp3')
AddedTrack.create!(playlist_id: pop.id, track_id: energy.id)

epic = Track.create(title: "Epic", artist_id: beyonce_knowles.id, album_id: lemonade.id, duration: "2:58")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-epic.mp3')
epic.track_file.attach(io: file, filename: 'bensound-epic.mp3')
AddedTrack.create!(playlist_id: pop.id, track_id: epic.id)

tenderness = Track.create(title: "Tenderness", artist_id: solange_knowles.id, album_id: a_seat_at_the_table.id, duration: "2:03")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-tenderness.mp3')
tenderness.track_file.attach(io: file, filename: 'bensound-tenderness.mp3')
AddedTrack.create!(playlist_id: pop.id, track_id: tenderness.id)

tomorrow = Track.create(title: "Tomorrow", artist_id: beyonce_knowles.id, album_id: lemonade.id, duration: "4:54")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-tomorrow.mp3')
tomorrow.track_file.attach(io: file, filename: 'bensound-tomorrow.mp3')
AddedTrack.create!(playlist_id: pop.id, track_id: tomorrow.id)

sunny = Track.create(title: "Sunny", artist_id: solange_knowles.id, album_id: a_seat_at_the_table.id, duration: "2:20")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-sunny.mp3')
sunny.track_file.attach(io: file, filename: 'bensound-sunny.mp3')
AddedTrack.create!(playlist_id: pop.id, track_id: sunny.id)

# JAZZ TRACKS

hip_jazz = Track.create(title: "Hip Jazz", artist_id: alice_coltrane.id, album_id: journey_into_satchinananda.id, duration: "2:43")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-hipjazz.mp3')
hip_jazz.track_file.attach(io: file, filename: 'bensound-hipjazz.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: hip_jazz.id)

moose = Track.create(title: "Moose", artist_id: alice_coltrane.id, album_id: journey_into_satchinananda.id, duration: "2:40")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-moose.mp3')
moose.track_file.attach(io: file, filename: 'bensound-moose.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: moose.id)

retrosoul = Track.create(title: "Retro Soul", artist_id: alice_coltrane.id, album_id: journey_into_satchinananda.id, duration: "3:36")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-retrosoul.mp3')
retrosoul.track_file.attach(io: file, filename: 'bensound-retrosoul.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: retrosoul.id)

sexy = Track.create(title: "Sexy", artist_id: alice_coltrane.id, album_id: journey_into_satchinananda.id, duration: "2:53")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-sexy.mp3')
sexy.track_file.attach(io: file, filename: 'bensound-sexy.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: sexy.id)

summer = Track.create(title: "Summer", artist_id: alice_coltrane.id, album_id: journey_into_satchinananda.id, duration: "3:37")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-summer.mp3')
summer.track_file.attach(io: file, filename: 'bensound-summer.mp3')
AddedTrack.create!(playlist_id: jazz.id, track_id: summer.id)

# ELECTRONIC TRACKS

dubstep = Track.create(title: "Dub Step", artist_id: matmos.id, album_id: the_civil_war.id, duration: "2:04")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-dubstep.mp3')
dubstep.track_file.attach(io: file, filename: 'bensound-dubstep.mp3')
AddedTrack.create!(playlist_id: electronic.id, track_id: dubstep.id)

scifi = Track.create(title: "Sci-Fi", artist_id: matmos.id, album_id: the_civil_war.id, duration: "4:44")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-scifi.mp3')
scifi.track_file.attach(io: file, filename: 'bensound-scifi.mp3')
AddedTrack.create!(playlist_id: electronic.id, track_id: scifi.id)

slow_motion = Track.create(title: "Slow Motion", artist_id: matmos.id, album_id: the_civil_war.id, duration: "3:26")
file = open('https://sosofly-seeds.s3.us-east-2.amazonaws.com/audio/bensound-slowmotion.mp3')
slow_motion.track_file.attach(io: file, filename: 'bensound-slowmotion.mp3')
AddedTrack.create!(playlist_id: electronic.id, track_id: slow_motion.id)



