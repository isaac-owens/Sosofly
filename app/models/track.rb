# == Schema Information
#
# Table name: tracks
#
#  id         :bigint           not null, primary key
#  title      :string           not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#  artist_id  :integer
#  album_id   :integer          not null
#  duration   :string
#
class Track < ApplicationRecord
  validates :title, :artist_id, presence: true

  has_one_attached :track_file

  has_many :added_tracks

  has_many :playlists, 
    through: :added_tracks

  belongs_to :album
  belongs_to :artist
end
